
# Umfassende Ueberarbeitung: Groessere Bilder, Wisch-Effekt, Schriftart und Seitenstruktur

## Ueberblick

Diese Aenderungen betreffen mehrere Bereiche: Projektbilder, Navigation, Schriftart, und die Umstrukturierung von About/Contact/Exhibitions.

---

## 1. Schriftart aendern (margreiterchoy.net Stil)

Die Referenzwebsite verwendet eine monospace/serifenlose Schrift mit technischem Charakter. Basierend auf dem Screenshot wird "Courier New" oder aehnliche Monospace-Schrift verwendet.

### Aenderungen:
- Neue Schriftart: **Courier Prime** (Google Fonts) oder System-Monospace
- Alle Texte und Beschreibungen in dieser Schrift

```
Aktuell: Space Grotesk (Display) + Inter (Body)
Neu:     Courier Prime fuer alles
```

---

## 2. Projekt-Bilder VIEL groesser machen

### Aktuell:
- 3-Spalten-Grid auf Desktop
- `aspect-[4/5]` (hoch-format)

### Neu:
- 2-Spalten-Grid auf Desktop (groessere Bilder)
- Mehr Platz zwischen den Bildern
- Auf Mobile: 1-Spalte volle Breite

```
Aktuell:  3 Spalten, kleine Bilder
Neu:      2 Spalten, grosse Bilder (wie Leibal)
```

---

## 3. Datum unter Projekten (Leibal-Stil)

Unter jedem Projekt soll das Datum erscheinen (wie "JAN 2024"):

```
┌─────────────────┐
│                 │
│     BILD        │
│                 │
└─────────────────┘
JAN 2024
FURNITURE
Prismatic Lens Table
```

### Aenderung an Project-Daten:
- `year: '2024'` erweitern zu `month` und `year`
- Format: "MMM YYYY" (z.B. "JAN 2024")

---

## 4. Drag/Wisch-Effekt fuer Bilder

Der `ProjectCard.tsx` hat bereits einen Wisch-Effekt implementiert. Dieser wird auf der Startseite und Projects-Seite verwendet.

### Aenderung:
- Startseite (`Index.tsx`) und Projects-Seite (`Projects.tsx`) sollen die `ProjectCard`-Komponente verwenden anstatt eigener Link-Komponenten
- Dots-Indikator bleibt

---

## 5. Navigation anpassen

### Aktuell:
```
PROJECTS | EXHIBITIONS | ABOUT | CONTACT
```

### Neu:
```
PROJECTS | ABOUT | CONTACT
```

Exhibitions wird von der Navigation entfernt und auf der About-Seite integriert.

---

## 6. About-Seite: Bild + Exhibitions hinzufuegen

### Neue Struktur:
```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                        PROJECTS  ABOUT  CONTACT│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  About                                                       │
│                                                              │
│  ┌─────────────────────────────┐                             │
│  │                             │                             │
│  │    BILD (Portrait/Studio)   │                             │
│  │                             │                             │
│  └─────────────────────────────┘                             │
│                                                              │
│  [Beschreibungstext...]                                      │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Material Expertise                                         │
│  Wood, Metal, Glass...                                      │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Services                                                   │
│  Product Design, Space Planning...                          │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Exhibitions & Press                                        │
│                                                              │
│  2024                                                       │
│  ───                                                        │
│  Title - Venue, Location               Date                 │
│                                                              │
│  2023                                                       │
│  ───                                                        │
│  Title - Venue, Location               Date                 │
│  ...                                                        │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Contact-Seite: Bild entfernen

Das Bild wird von der Contact-Seite entfernt (es gehoert zur About-Seite).

### Neue Struktur:
```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                        PROJECTS  ABOUT  CONTACT│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Contact                                                     │
│                                                              │
│  ┌──────────────────────┐          Email                    │
│  │ Name                 │          mail@projectclim.com      │
│  │────────────────────│                                     │
│  │ Email                │          Address                   │
│  │────────────────────│          Clim Michel               │
│  │                      │          Hottelner Weg 52          │
│  │ Message              │          31137 Hildesheim          │
│  │                      │          Germany                   │
│  │                      │                                    │
│  │────────────────────│          Social                     │
│  │ Send Message →       │          Instagram                 │
│  └──────────────────────┘                                   │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

Nur 2 Spalten: Formular links, Kontaktdaten rechts.

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/index.css` | Schriftart auf Courier Prime aendern |
| `index.html` | Google Fonts Link anpassen |
| `src/data/projects.ts` | Monat hinzufuegen zu Projektdaten |
| `src/pages/Index.tsx` | 2-Spalten-Grid, ProjectCard verwenden, Datum anzeigen |
| `src/pages/Projects.tsx` | 2-Spalten-Grid, ProjectCard verwenden, Datum anzeigen |
| `src/components/ProjectCard.tsx` | Datum-Anzeige hinzufuegen (MMM YYYY) |
| `src/components/Header.tsx` | EXHIBITIONS aus Navigation entfernen |
| `src/pages/About.tsx` | Bild hinzufuegen, Exhibitions-Inhalt integrieren |
| `src/pages/ContactPage.tsx` | Bild entfernen, auf 2-Spalten reduzieren |
| `src/App.tsx` | /exhibitions Route kann bleiben (direkter Zugang) |

---

## Vorher/Nachher

### Schriftart

```
Vorher:  Space Grotesk + Inter (modern, tech)
Nachher: Courier Prime (monospace, editorial/artistic)
```

### Projekt-Grid

```
Vorher:  3 Spalten, kleine Bilder
Nachher: 2 Spalten, grosse Bilder
```

### Projekt-Info

```
Vorher:
  [Bild]
  Titel
  Kategorie

Nachher:
  [Bild]
  JAN 2024
  FURNITURE
  Prismatic Lens Table
```

### Navigation

```
Vorher:  PROJECTS | EXHIBITIONS | ABOUT | CONTACT
Nachher: PROJECTS | ABOUT | CONTACT
```

### About-Seite

```
Vorher:  Nur Text + Services
Nachher: Bild + Text + Services + Exhibitions/Press
```

### Contact-Seite

```
Vorher:  3 Spalten (Bild + Form + Info)
Nachher: 2 Spalten (Form + Info)
```

---

## Projektdaten-Format (erweitert)

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
  techniques: string[];
  images: string[];
  year: string;
  month: string;  // NEU: "JAN", "FEB", etc.
  externalLink?: string;
}
```

---

## Schriftart-Konfiguration

```css
/* Neu in index.css */
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

:root {
  --font-display: 'Courier Prime', monospace;
  --font-body: 'Courier Prime', monospace;
}
```

Die monospace Schrift gibt der Website den redaktionellen/kuenstlerischen Charakter wie bei margreiterchoy.net.
