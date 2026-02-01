
# Bild-Korrektur und Projekt-Reorganisation

## Das Problem verstanden

Die Bilder wurden falsch zugeordnet. Basierend auf deiner Beschreibung:

### Aktuelle falsche Situation in "Custom Creations" (sonderanfertigungen-1 bis -5):
| Bild | Zeigt aktuell | Soll zugeordnet werden zu |
|------|---------------|---------------------------|
| sonderanfertigungen-1.jpg | Glas-Metall Experiment | Glass-Metal Tile |
| sonderanfertigungen-2.jpg | Grow Mushroom | Vogel Studio Collaborations |
| sonderanfertigungen-3.jpg | Blender Workshop | NEUES Projekt: Blender Workshop |
| sonderanfertigungen-4.jpg | FAST GOOD CHEAP | FAST GOOD CHEAP |
| sonderanfertigungen-5.jpg | 3D Print Textil | 3D Print on Materials |

### Die aktuellen Bilder bei den Experimenten sollen zu Vogel Studio:
- grow-mushrooms-1.jpg
- glas-metall-fliese-1.jpg
- fast-good-cheap-1.jpg
- ki-experiment-1.jpg
- 3d-print-materials-1.jpg

Diese 5 + sonderanfertigungen-2.jpg = 6 Bilder fuer Vogel Studio Collaborations

---

## Loesung

### Schritt 1: Vogel Studio Collaborations neu befuellen

Die Bilder fuer Vogel Studio werden aus den aktuellen Experiment-Ordnern zusammengestellt:

```text
vogel-studio-1.jpg <- grow-mushrooms-1.jpg (aktuell)
vogel-studio-2.jpg <- glas-metall-fliese-1.jpg (aktuell)
vogel-studio-3.jpg <- fast-good-cheap-1.jpg (aktuell)
vogel-studio-4.jpg <- ki-experiment-1.jpg (aktuell)
vogel-studio-5.jpg <- 3d-print-materials-1.jpg (aktuell)
vogel-studio-6.jpg <- sonderanfertigungen-2.jpg
```

### Schritt 2: Experiment-Bilder mit richtigen Bildern ersetzen

| Projekt | Neues Bild (aus sonderanfertigungen) |
|---------|-------------------------------------|
| Glass-Metal Tile | sonderanfertigungen-1.jpg |
| FAST GOOD CHEAP | sonderanfertigungen-4.jpg |
| 3D Print on Materials | sonderanfertigungen-5.jpg |

### Schritt 3: Neues Projekt "Blender Workshop" erstellen

Mit dem Bild sonderanfertigungen-3.jpg (Workshop-Rendering)

### Schritt 4: Custom Creations (Sonderanfertigungen) loeschen

Da alle Bilder aus diesem Ordner anderen Projekten zugeordnet werden, wird dieses Projekt entfernt. Falls es echte "Custom Creations" Bilder im Portfolio gibt, muessen diese separat extrahiert werden.

### Schritt 5: Einzelne Experimente entfernen

Da Grow Mushrooms, Glass-Metal Tile, FAST GOOD CHEAP, AI & AI und 3D Print on Materials jetzt unter Vogel Studio Collaborations zusammengefasst sind, werden diese als eigenstaendige Projekte entfernt.

---

## Finale Projektstruktur

Nach der Umsetzung:

| Projekt | Bilder | Kategorie |
|---------|--------|-----------|
| Glug | 4 | Social Design |
| Glasbaustein | 5 | Lighting |
| AtoBe | 4 | Mobility Concept |
| ORU | 5 | Lighting |
| L-Ement | 5 | Furniture |
| Infrared Thermometer | 5 | Product Design |
| Vogel Studio Collaborations | 6 | Collaboration |
| Blender Workshop | 1+ | Workshop |

---

## Technische Aenderungen

### Dateien die geaendert werden

| Datei | Aenderung |
|-------|----------|
| `public/images/vogel-studio/` | Bilder neu zuordnen mit den 6 Collaboration-Bildern |
| `public/images/blender-workshop/` | NEU erstellen mit Workshop-Bild |
| `src/data/projects.ts` | Projekte reorganisieren: Experimente entfernen, Vogel Studio behalten, Blender Workshop hinzufuegen, Custom Creations entfernen |

### Projekt-Aenderungen in projects.ts

1. **Entfernen**: grow-mushrooms, glas-metall-fliese, fast-good-cheap, ki-experiment, 3d-print-materials, sonderanfertigungen
2. **Behalten**: vogel-studio (mit neuen Bildern)
3. **Hinzufuegen**: blender-workshop

### Neues Blender Workshop Projekt

```typescript
{
  id: 'blender-workshop',
  title: 'Blender Quick & Easy',
  description: 'Workshop introducing 3D modeling with Blender. Participants learn the basics of 3D visualization and rendering in a hands-on environment.',
  category: 'Workshop',
  materials: ['Digital', 'Software'],
  techniques: ['3D Modeling', 'Rendering', 'Teaching'],
  images: ['/images/blender-workshop/blender-workshop-1.jpg'],
  year: '2022',
  month: 'OCT',
  displayFormat: 'landscape',
  gridSpan: 1,
}
```

---

## Hinweis zum Durchscrollen

Das Durchscrollen in der Vorschau funktioniert technisch - aber nur wenn ein Projekt mehr als 1 Bild hat. Die Experiment-Projekte hatten jeweils nur 1 Bild, daher keine Navigation moeglich. Mit der Zusammenfassung zu Vogel Studio (6 Bilder) wird das Durchscrollen dort funktionieren.
