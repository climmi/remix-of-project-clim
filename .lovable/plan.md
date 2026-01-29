
# Dynamisches Grid-Layout und Video-Unterstuetzung

## Ueberblick

Die Startseite erhaelt ein dynamisches Masonry-artiges Layout mit unterschiedlichen Bildgroessen und voller Bildschirmbreite. Zusaetzlich wird Video-Unterstuetzung fuer Projekte hinzugefuegt.

---

## 1. Breiteres Layout auf grossen Bildschirmen

### Problem:
- `max-w-7xl` (1280px) begrenzt den Inhalt
- Auf 4K-Bildschirmen bleibt viel Platz ungenutzt

### Loesung:
- Startseite: Kein `max-w-7xl` - volle Breite nutzen
- Projects-Seite: Behalt konsistentes Grid (optional auch erweitern)

```
Aktuell:  max-w-7xl mx-auto (zentriert, max 1280px)
Neu:      Volle Breite mit mehr Padding auf grossen Screens
```

---

## 2. Unterschiedliche Bildformate auf der Startseite

### Aktuell:
Alle Projekte haben `aspect-[4/5]` (Hochformat)

### Neu:
Jedes Projekt kann ein eigenes Format haben:

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  ┌─────────────────┐  ┌───────────────────────────────────┐  │
│  │                 │  │                                   │  │
│  │   HOCHFORMAT    │  │          QUERFORMAT               │  │
│  │    aspect-[3/4] │  │          aspect-[16/9]            │  │
│  │                 │  │                                   │  │
│  │                 │  └───────────────────────────────────┘  │
│  └─────────────────┘                                          │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────────┐  │
│  │            │  │            │  │                        │  │
│  │  QUADRAT   │  │  QUADRAT   │  │     GROSS/BREIT        │  │
│  │ aspect-[1] │  │ aspect-[1] │  │     colspan-2          │  │
│  │            │  │            │  │                        │  │
│  └────────────┘  └────────────┘  └────────────────────────┘  │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

### Formate:
- `portrait` = aspect-[3/4] (Hochformat)
- `square` = aspect-[1/1] (Quadratisch)
- `landscape` = aspect-[16/9] (Querformat)
- `wide` = aspect-[21/9] (Extra breit)

---

## 3. Video-Unterstuetzung

### Datenmodell erweitern:

```typescript
interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  poster?: string;  // Vorschaubild fuer Videos
}

interface Project {
  id: string;
  title: string;
  // ...
  media: ProjectMedia[];  // NEU: ersetzt/ergaenzt images
  images: string[];       // Bleibt fuer Rueckwaertskompatibilitaet
  displayFormat?: 'portrait' | 'square' | 'landscape' | 'wide';
  gridSpan?: 1 | 2;  // Wie viele Spalten das Projekt einnimmt
}
```

### Video-Anzeige in ProjectCard:

```
┌─────────────────────────────────────┐
│  ▶ VIDEO (autoplay, muted, loop)   │
│                                     │
│   oder bei Hover/Swipe:            │
│   Video wird abgespielt            │
│                                     │
└─────────────────────────────────────┘
MAR 2024
ART INSTALLATION
Kinetic Light Sculpture
```

Videos werden:
- Autoplay (stumm, loop) beim Hover oder beim Scrollen in den Viewport
- Mit Poster-Bild als Vorschau
- Im selben Wisch-Karussell wie Bilder

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/projects.ts` | `displayFormat`, `gridSpan`, `media` Array hinzufuegen |
| `src/pages/Index.tsx` | Masonry-Grid ohne max-width, dynamische Spalten |
| `src/components/ProjectCard.tsx` | Format-Prop, Video-Unterstuetzung |
| `src/pages/Projects.tsx` | Optional: auch breiteres Layout |
| `src/pages/ProjectDetail.tsx` | Video-Anzeige in der Galerie |

---

## Index.tsx - Neues Layout

```
Aktuell:
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

Neu:
  <div> <!-- Kein max-w -->
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map(project => (
        <ProjectCard 
          className={project.gridSpan === 2 ? 'col-span-2' : ''}
          ...
        />
      ))}
```

Projekte koennen 1 oder 2 Spalten einnehmen, mit unterschiedlichen Formaten.

---

## Projekt-Daten Beispiel

```typescript
{
  id: 'project-4',
  title: 'Kinetic Light Sculpture',
  displayFormat: 'landscape',  // Querformat
  gridSpan: 2,                 // Nimmt 2 Spalten ein
  media: [
    { 
      type: 'video', 
      url: 'https://example.com/video.mp4',
      poster: 'https://example.com/poster.jpg'
    },
    { type: 'image', url: 'https://...' },
  ],
  images: [...],  // Fallback
  // ...
}
```

---

## Grid-Verhalten

### Desktop (4 Spalten):
```
┌──────┬──────┬──────┬──────┐
│  1   │  2   │   3 (wide)  │
│ port │ sqr  │   span-2    │
├──────┼──────┼──────┬──────┤
│  4 (landscape)    │  5   │
│     span-2        │ port │
└───────────────────┴──────┘
```

### Tablet (3 Spalten):
```
┌──────┬──────┬──────┐
│  1   │  2   │  3   │
├──────┼──────┴──────┤
│  4   │   5 (wide)  │
└──────┴─────────────┘
```

### Mobile (2 Spalten):
```
┌──────┬──────┐
│  1   │  2   │
├──────┴──────┤
│  3 (wide)   │
└─────────────┘
```

---

## Video-Komponente

```tsx
// In ProjectCard.tsx
const currentMedia = project.media?.[currentIndex] || { 
  type: 'image', 
  url: project.images[currentIndex] 
};

{currentMedia.type === 'video' ? (
  <video
    src={currentMedia.url}
    poster={currentMedia.poster}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
) : (
  <img
    src={currentMedia.url}
    alt={project.title}
    className="w-full h-full object-cover"
  />
)}
```

---

## Aspect-Ratio Mapping

```typescript
const aspectRatioClasses = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[16/9]',
  wide: 'aspect-[21/9]',
};
```

---

## Vorher/Nachher

### Layout-Breite

```
Vorher:  max-w-7xl (1280px), zentriert
Nachher: Volle Breite, nur Padding an den Seiten
```

### Bildformate

```
Vorher:  Alle aspect-[4/5]
Nachher: portrait, square, landscape, wide (pro Projekt konfigurierbar)
```

### Grid

```
Vorher:  Immer 2 Spalten, gleiche Groesse
Nachher: 2-4 Spalten, Projekte koennen 1-2 Spalten einnehmen
```

### Medien

```
Vorher:  Nur Bilder
Nachher: Bilder + Videos (autoplay, muted, loop)
```

---

## Zu aendernde Dateien

1. `src/data/projects.ts` - Datenmodell erweitern
2. `src/pages/Index.tsx` - Masonry-Grid, volle Breite
3. `src/components/ProjectCard.tsx` - Format + Video
4. `src/pages/ProjectDetail.tsx` - Video in Galerie
5. `src/pages/Projects.tsx` - Optional anpassen
