
Ziel
- Das Scroll-to-Top Verhalten soll bei jeder Navigation zuverlässig und immer sofort funktionieren (auch beim Wechsel zwischen Projekten innerhalb /project/:id), unabhängig davon, ob man vorher weit nach unten gescrollt hat.

Warum es aktuell “zufällig” wirkt (wahrscheinliche Ursachen)
- Der aktuelle ScrollToTop nutzt useEffect + window.scrollTo(0,0). Das läuft erst nach dem Rendern; in Kombination mit:
  - globalem CSS: html { scroll-behavior: smooth; } (weiches Scrollen kann “überlagert” wirken, wenn direkt danach Layout/Medien nachladen)
  - möglicher Browser-Scroll-Restoration (history.scrollRestoration) bei SPA-Navigation
  - “gleiche Route, anderer Param” (/project/:id nutzt dieselbe Komponente) → Timing/Restoration kann sichtbare Inkonsistenzen erzeugen
kann es passieren, dass man nicht am echten Seitenanfang landet.

Umsetzung (konkret)
1) ScrollToTop robuster machen (src/components/ScrollToTop.tsx)
   - Von useEffect auf useLayoutEffect wechseln, damit der Scroll vor dem Paint ausgeführt wird (reduziert “ich bleibe unten”-Effekte).
   - Nicht nur auf pathname hören, sondern auf location.key (triggert bei jeder Navigation zuverlässig).
   - Beim Scrollen kurz smooth scrolling deaktivieren, damit es immer “instant” ist, ohne die globale UI zu verändern.
   - Auf das tatsächliche Scrolling-Element scrollen (document.scrollingElement) plus window als Fallback.
   - Zusätzlich einen “double-tap” mit requestAnimationFrame machen, um Fälle abzufangen, wo nach dem ersten Render noch Layout-Änderungen passieren.

   Geplante Logik (Beispiel, kein finaler Code im Plan nötig):
   - const location = useLocation()
   - useEffect(() => { if ('scrollRestoration' in history) history.scrollRestoration = 'manual' }, [])
   - useLayoutEffect(() => {
       const el = document.scrollingElement ?? document.documentElement
       const prev = document.documentElement.style.scrollBehavior
       document.documentElement.style.scrollBehavior = 'auto'
       el.scrollTop = 0
       window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
       requestAnimationFrame(() => {
         el.scrollTop = 0
         window.scrollTo(0, 0)
         document.documentElement.style.scrollBehavior = prev
       })
     }, [location.key])

2) Sicherstellen, dass nichts anderes wieder nach unten scrollt
   - Projekt-Detailseite: dort wurde der lokale scrollTo bereits entfernt (gut).
   - Prüfen, ob irgendwo (z.B. in Komponenten/Hooks) scrollIntoView / focus-Scroll o.ä. genutzt wird. Falls ja, diese Logik so anpassen, dass sie nicht bei Navigation feuert.

3) Optional (nur falls weiterhin Probleme auftreten): globales smooth scrolling entfernen
   - In src/index.css steht html { scroll-behavior: smooth; }.
   - Falls die gewünschte UX ohnehin “editorial/instant” sein soll, können wir das komplett entfernen, damit es keinerlei Seiteneffekte mehr gibt.
   - Ich würde das erst machen, wenn Schritt 1 alleine nicht reicht.

Testplan (End-to-End)
- Desktop:
  1) About: weit nach unten scrollen → Klick “PROJECTS” → muss immer oben starten.
  2) Projects: weit nach unten scrollen → Klick auf ein Projekt → ProjectDetail muss oben starten.
  3) ProjectDetail: ganz nach unten zu “More Projects” scrollen → 4–5x nacheinander verschiedene “More Projects” anklicken → jedes Mal muss die neue Projektseite oben starten.
- Mobile:
  - Gleiche Tests, zusätzlich mit Wischen/Scrollen + schnellem Antippen.
- Browser Back/Forward:
  - Da wir “immer oben” erzwingen, wird auch bei Zurück/Vorwärts oben gestartet. Wenn du stattdessen beim “Zurück”-Button die alte Scrollposition wiederhaben willst, sag Bescheid; dann passen wir es so an, dass nur bei “normalen Klick-Navigationen” nach oben gescrollt wird.

Betroffene Dateien
- src/components/ScrollToTop.tsx (Hauptfix)
- Optional: src/index.css (nur wenn smooth scrolling komplett entfernt werden soll)

Ergebnis
- Scroll-to-Top ist nicht mehr “zufällig”, sondern deterministisch: jede Navigation (inkl. Projekt-zu-Projekt) führt sofort zum Seitenanfang.