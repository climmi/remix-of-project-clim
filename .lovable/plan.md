
# Scroll-to-Top bei jeder Seitennavigation

## Problem

Aktuell springt die Seite nicht nach oben wenn man zu einer neuen Seite navigiert:
- `Index.tsx`, `Projects.tsx`, `About.tsx`, `ContactPage.tsx` haben keinen Scroll-to-Top Code
- `ProjectDetail.tsx` hat einen `useEffect` mit `[id]` Dependency, der nur bei Projekt-Wechsel funktioniert, nicht bei der ersten Navigation

## Loesung

Eine zentrale `ScrollToTop`-Komponente wird erstellt und in `App.tsx` eingebunden. Diese reagiert auf jede Aenderung des `pathname` und scrollt automatisch nach oben.

---

## Neue Komponente: ScrollToTop

```
src/components/ScrollToTop.tsx
```

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

Diese Komponente:
- Nutzt `useLocation()` von React Router
- Reagiert auf jede Aenderung des `pathname`
- Scrollt bei jeder Navigation nach ganz oben
- Rendert nichts (gibt `null` zurueck)

---

## Aenderung in App.tsx

Die `ScrollToTop`-Komponente wird innerhalb von `BrowserRouter` platziert:

```
Vorher:
<BrowserRouter>
  <Routes>
    ...
  </Routes>
</BrowserRouter>

Nachher:
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    ...
  </Routes>
</BrowserRouter>
```

---

## Aenderung in ProjectDetail.tsx

Der vorhandene `useEffect` fuer Scroll-to-Top in `ProjectDetail.tsx` kann entfernt werden, da die zentrale Komponente dies uebernimmt:

```
// Diese Zeilen werden entfernt (Zeilen 16-18):
useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);
```

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/components/ScrollToTop.tsx` | NEU: Zentrale Scroll-Komponente |
| `src/App.tsx` | ScrollToTop importieren und einbinden |
| `src/pages/ProjectDetail.tsx` | useEffect fuer scrollTo entfernen (optional) |

---

## Vorher/Nachher

### Vorher
- Startseite → About: Bleibt bei aktueller Scroll-Position
- Projects → Contact: Bleibt bei aktueller Scroll-Position  
- Projekt 1 → Projekt 2: Springt nach oben (manchmal)

### Nachher
- Jede Navigation springt zuverlaessig nach ganz oben
- Konsistentes Verhalten auf allen Seiten

---

## Warum diese Loesung?

1. **Zentral**: Eine Stelle fuer alle Seiten
2. **Zuverlaessig**: Funktioniert bei jeder Route-Aenderung
3. **Wartbar**: Keine doppelten `useEffect` Hooks in jeder Seite
4. **Standard-Pattern**: Empfohlene Loesung fuer React Router
