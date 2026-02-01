
# Alle Projekte und Bilder loeschen

## Uebersicht

Es werden alle Projektdaten und die dazugehoerigen Bilddateien geloescht. Die Startseite und die Projects-Seite werden dann leer sein (ohne Fehlermeldungen).

---

## Zu loeschende Dateien

### Bildordner in public/images/

Folgende Projektordner werden geloescht (168 Bilder insgesamt):

| Ordner | Anzahl Bilder |
|--------|---------------|
| 3d-print-materials/ | 10 |
| atobe/ | 6 |
| blender-workshop/ | 10 |
| fast-good-cheap/ | 11 |
| glas-metall-fliese/ | 13 |
| glasbaustein/ | 19 |
| glug/ | 20 |
| grow-mushrooms/ | 17 |
| infrarotthermometer/ | 14 |
| l-ement/ | 15 |
| oru/ | 20 |
| sonderanfertigungen/ | 12 |
| workshops/ | 15 |

**Nicht geloescht wird:** `about/` (Portrait-Bild fuer About-Seite)

---

## Code-Aenderungen

### src/data/projects.ts

Das `projects`-Array wird geleert:

```typescript
export const projects: Project[] = [];
```

Die Interface-Definitionen (`Project`, `ProjectMedia`) bleiben erhalten, damit keine TypeScript-Fehler entstehen.

---

## Resultat

Nach der Umsetzung:

- **Startseite (Index):** Zeigt ein leeres Grid ohne Projekte
- **Projects-Seite:** Zeigt ein leeres Grid ohne Projekte
- **Detailseiten:** Funktionieren technisch weiterhin, aber es gibt keine Projekte mehr zum Anzeigen

Die Seiten funktionieren weiterhin ohne Fehler, da die Komponenten bereits mit leeren Arrays umgehen koennen.
