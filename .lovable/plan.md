

# Drag-to-Browse Bildergalerie + Redesign

Das Redesign umfasst zwei Hauptbereiche: Die visuelle Überarbeitung (heller, organischer) und die neue Drag-Interaktion für Projektbilder.

---

## Drag-to-Browse Interaktion

**Wie es funktioniert:**
- Maus gedrückt halten auf einem Projekt-Bild
- Nach links/rechts ziehen wechselt durch die Projektbilder
- Loslassen bleibt auf dem aktuellen Bild
- Klick (ohne Ziehen) öffnet das Projekt-Modal

**Technische Umsetzung:**
- `onMouseDown` startet den Drag-Modus und speichert die Start-X-Position
- `onMouseMove` berechnet die Distanz und wechselt Bilder bei Schwellenwert (z.B. 50px)
- `onMouseUp` beendet den Drag-Modus
- Unterscheidung zwischen Klick und Drag durch Bewegungsdistanz
- Touch-Support für Mobile (`onTouchStart`, `onTouchMove`, `onTouchEnd`)

**Visuelles Feedback:**
- Kleiner Bildindex-Indikator (z.B. "2/5") erscheint beim Draggen
- Cursor ändert sich zu `grab`/`grabbing`
- Sanfte Bild-Überblendung beim Wechsel

---

## Visuelles Redesign (wie besprochen)

**Farbpalette:**
- Hintergrund: Cremeweiß (#FAFAFA)
- Text: Fast-Schwarz (#1A1A1A)
- Lichteffekt: Warmes Weiß/Gelblich-Orange

**Layout:**
- Header minimal: "PROJECT CLIM" links oben
- Projekte sofort sichtbar
- Asymmetrisches Masonry-Grid
- Unterschiedliche Bildgrößen

**Lichteffekt:**
- Nur warme Farben (weiß bis orange)
- Sehr dezent und subtil

---

## Dateien die geändert werden

| Datei | Änderung |
|-------|----------|
| `src/index.css` | Neue helle Farbvariablen, warme Akzentfarben |
| `src/components/CausticsBackground.tsx` | Warme Farben, dezenterer Effekt |
| `src/components/ProjectCard.tsx` | Drag-to-Browse Logik, neues visuelles Design |
| `src/components/ProjectGallery.tsx` | Masonry-Layout, Header integrieren |
| `src/components/Header.tsx` | Neu: Minimaler Header |
| `src/components/Hero.tsx` | Entfernen oder stark reduzieren |
| `src/pages/Index.tsx` | Neue Struktur ohne Hero |

---

## Technische Details: Drag-to-Browse

```text
┌─────────────────────────────────────────┐
│  ProjectCard                             │
│                                          │
│  State:                                  │
│  - currentImageIndex: number             │
│  - isDragging: boolean                   │
│  - startX: number                        │
│  - hasMoved: boolean                     │
│                                          │
│  Events:                                 │
│  - onMouseDown → Start drag tracking     │
│  - onMouseMove → Calculate delta,        │
│                  switch image if > 50px  │
│  - onMouseUp   → If hasMoved: prevent    │
│                  click, else: open modal │
└─────────────────────────────────────────┘
```

**Wichtig:** Die Unterscheidung zwischen Klick und Drag erfolgt durch `hasMoved`. Nur wenn die Maus mehr als 5px bewegt wurde, gilt es als Drag und das Modal öffnet sich nicht.

