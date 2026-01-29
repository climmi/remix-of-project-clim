
# Fixes und Unsplash Bilder hinzufuegen

## Problembehebung

### 1. Projekt-Grid Ueberlappung beheben
Das Problem liegt bei `auto-rows-[200px]` und `md:row-span-2` bei grossen Cards.

**Loesung:**
- `auto-rows-[...]` entfernen - stattdessen flexible Hoehen nutzen
- `row-span-2` bei "large" entfernen (verursacht Ueberlappungen)
- `max-w-7xl` hinzufuegen fuer breite Bildschirme
- Groessere Gaps zwischen Projekten

### 2. About-Bereich vereinfachen
- Material Expertise: Boxen mit Hover-Effekten entfernen
- Stattdessen: Einfacher Fliesstext mit Kommas getrennt
- Keine Animationen auf einzelnen Materialien

### 3. Services-Bereich kuenstlerischer gestalten
- Icons komplett entfernen
- Keine Karten/Boxen
- Schlichte nummerierte Liste (01, 02, 03...)
- Minimaler Textstil ohne Hover-Effekte

### 4. Kontakt-Bereich vereinfachen
- Icons bei Email/Social entfernen
- Weniger gestylte Inputs (schlichter, ohne Border-Focus-Effekte)
- Button schlichter
- Mehr Weissraum

---

## Unsplash Bilder hinzufuegen

Jedes Projekt bekommt 3-4 hochwertige Bilder von Unsplash damit die Drag-to-Browse Funktion sichtbar wird.

**Bildthemen passend zu den Projekten:**
- Prismatic Lens Table: Holz, Glas, Lichtbrechung
- Spectrum Wall Light: Licht, Prismen, Wandinstallationen
- Reflection Console: Minimalistisches Moebel, Spiegel, Marmor
- Kinetic Light Sculpture: Skulpturen, Schatten, Bewegung
- Chromatic Vessel: Glaskunst, Vasen, Farben
- Shadow Clock: Uhren, Bronze, abstrakte Objekte

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/projects.ts` | Unsplash URLs fuer alle Projekte (3-4 pro Projekt) |
| `src/components/ProjectGallery.tsx` | Grid-Fix: max-w-7xl, flexible Hoehen, groessere Gaps |
| `src/components/ProjectCard.tsx` | row-span entfernen, einfachere Aspect-Ratios |
| `src/components/About.tsx` | Material-Liste als Komma-getrennter Text |
| `src/components/Services.tsx` | Nummerierte Liste ohne Icons/Karten |
| `src/components/Contact.tsx` | Weniger Styling, keine Icons |

---

## Vorher/Nachher

**About - Material Expertise:**
```
Vorher: [Wood] [Metal] [Glass] (Boxen mit Hover)
Nachher: Wood, Metal, Glass, Plastics, 3D Printing, Optical Elements
```

**Services:**
```
Vorher: 
┌─────────────┐ ┌─────────────┐
│ 🧭 Product  │ │ 📦 Space    │
│   Design    │ │   Planning  │
└─────────────┘ └─────────────┘

Nachher:
01  Product Design
    From concept to detailed design...

02  Space Planning
    Thoughtful spatial solutions...
```

**Contact:**
```
Vorher: 📧 mail@projectclim.com
Nachher: mail@projectclim.com (nur Text-Link)
```
