
# Vollstaendige Portfolio-Aktualisierung

## Uebersicht der Aufgaben

Vier Hauptbereiche werden bearbeitet:

1. Glasbaustein erstes Bild reparieren
2. Glug Bilder 2-4 durch echte Projektbilder ersetzen
3. About-Seite Layout fuer Jahreszahlen fixen
4. Alle zusaetzlichen Projekte/Experimente aus dem Portfolio hinzufuegen

---

## 1. Glasbaustein erstes Bild reparieren

Das Problem: `public/images/glasbaustein/glasbaustein-1.jpg` existiert zwar, zeigt aber nicht richtig an.

Loesung: Neues Bild aus dem PDF extrahieren und ersetzen.

Quelldatei aus PDF:
```text
parsed-documents://...Clim_Michel_Portfolio.../images/img_p36_1.jpg
```
(Seite 37 - Hauptbild Leuchte an der Wand)

Dieses Bild wird als neues `glasbaustein-1.jpg` kopiert.

---

## 2. Glug Bilder ersetzen

Aktuelle Bilder die ersetzt werden muessen:
- glug-2.jpg (Bild 2)
- glug-3.png (Bild 3)  
- glug-4.jpg (Bild 4)

Neue Bilder aus dem PDF (Seiten 48-50):
| Alt | Neu (aus PDF) | Beschreibung |
|-----|---------------|--------------|
| glug-2.jpg | img_p47_1.jpg (Seite 48) | Pop-Up Station Lastenrad |
| glug-3.png | img_p49_1.jpg (Seite 50) | Marktsituation/Refill |
| glug-4.jpg | img_p49_2.jpg (Seite 50) | Kampagne Detail |

---

## 3. About-Seite Layout fixen

### Problem
Bei langen Firmennamen wie "Cluster Projekte GmbH & Freie Werkstatt Hildesheim gGmbH" bricht die Jahreszahl in eine neue Zeile um.

### Loesung
Das Layout der Work Experience Eintraege anpassen:

```text
VORHER:
┌─────────────────────────────────────────────────────────────────────┐
│ Workshop Manager — Cluster Projekte GmbH & Freie Werkstatt...       │
│                                                        2023–2025    │
└─────────────────────────────────────────────────────────────────────┘

NACHHER:
┌─────────────────────────────────────────────────────────────────────┐
│ Workshop Manager, Construction & Visual Artist         2023–2025    │
│ Cluster Projekte GmbH & Freie Werkstatt Hildesheim gGmbH            │
└─────────────────────────────────────────────────────────────────────┘
```

Aenderungen in About.tsx:
- Titel und Jahr in einer Zeile (flex mit justify-between)
- Firmenname als separate Zeile darunter (kleinere Schrift, gedaempfte Farbe)
- Gleiche Anpassung fuer alle Experience-Sektionen

---

## 4. Zusaetzliche Projekte/Experimente hinzufuegen

Aus dem PDF wurden folgende weitere Projekte/Experimente identifiziert die noch nicht auf der Website sind:

### Neue Projekte aus Seite 9-10 (Selbstaendigkeit/Experimente)

| ID | Titel | Kategorie | Beschreibung |
|----|-------|-----------|--------------|
| sonderanfertigungen | Sonderanfertigungen | Custom Design | Messing, Glas, Aluminium - individuelle Designobjekte |
| grow-mushrooms | Grow Mushrooms | Experiment | Bio-Algorithmen und Keramik-3D-Druck |
| glas-metall-fliese | Glass-Metal Tile | Experiment | Glas und Metall verschmolzen zu einer Fliese |
| fast-good-cheap | Fast Good Cheap | Interactive Object | Interaktives Objekt - Spielerisches Design |
| ki-experiment | KI & KI | Experiment | Bild und Code von KI - AI-generierte Kunst |
| 3d-print-materials | 3D Print on Materials | Experiment | 3D-Druck auf verschiedenen Materialien |

### Bilder fuer neue Projekte

Die Bilder kommen aus Seite 9-10 des PDFs:
- `img_p8_1.jpg` bis `img_p8_6.jpg` (Seite 9 - Experimente)
- `img_p9_1.jpg` bis `img_p9_5.jpg` (Seite 10 - Sonderanfertigungen)

---

## Technische Umsetzung

### Dateiaenderungen

| Datei | Aenderung |
|-------|----------|
| `public/images/glasbaustein/glasbaustein-1.jpg` | Ersetzen durch img_p36_1.jpg |
| `public/images/glug/glug-2.jpg` | Ersetzen durch echtes Projektbild |
| `public/images/glug/glug-3.png` | Ersetzen durch echtes Projektbild |
| `public/images/glug/glug-4.jpg` | Ersetzen durch echtes Projektbild |
| `public/images/sonderanfertigungen/` | NEU: 5 Bilder |
| `public/images/grow-mushrooms/` | NEU: 1-2 Bilder |
| `public/images/glas-metall-fliese/` | NEU: 1-2 Bilder |
| `public/images/fast-good-cheap/` | NEU: 1-2 Bilder |
| `public/images/ki-experiment/` | NEU: 1-2 Bilder |
| `public/images/3d-print-materials/` | NEU: 1-2 Bilder |
| `src/data/projects.ts` | 6 neue Projekte hinzufuegen |
| `src/pages/About.tsx` | Layout fuer Experience-Items anpassen |

### Neues Layout fuer Experience-Eintraege

```tsx
// About.tsx - Work Experience Sektion
{workExperience.map((exp) => (
  <div 
    key={exp.id}
    className="py-3 border-b border-border/50"
  >
    <div className="flex justify-between items-baseline gap-4">
      <span className="text-foreground">{exp.title}</span>
      <span className="text-muted-foreground text-sm whitespace-nowrap">
        {exp.year}
      </span>
    </div>
    <span className="text-muted-foreground text-sm">
      {exp.company}
    </span>
  </div>
))}
```

### Neue Projekt-Eintraege in projects.ts

```typescript
// Beispiel fuer Sonderanfertigungen
{
  id: 'sonderanfertigungen',
  title: 'Custom Creations',
  description: 'Individual design objects made from brass, glass, and aluminum. 
    Custom pieces created during self-employment period.',
  category: 'Custom Design',
  materials: ['Brass', 'Glass', 'Aluminum'],
  techniques: ['Metalworking', 'Glassblowing', 'Prototyping'],
  images: [
    '/images/sonderanfertigungen/sonderanfertigungen-1.jpg',
    '/images/sonderanfertigungen/sonderanfertigungen-2.jpg',
    '/images/sonderanfertigungen/sonderanfertigungen-3.jpg',
    '/images/sonderanfertigungen/sonderanfertigungen-4.jpg',
    '/images/sonderanfertigungen/sonderanfertigungen-5.jpg',
  ],
  year: '2020',
  month: 'JAN',
  displayFormat: 'landscape',
  gridSpan: 2,
}
```

---

## Zusammenfassung der Aenderungen

1. **Glasbaustein Bild 1**: Kopiere `img_p36_1.jpg` als neues `glasbaustein-1.jpg`
2. **Glug Bilder 2-4**: Ersetze durch `img_p47_1.jpg`, `img_p49_1.jpg`, `img_p49_2.jpg`
3. **About.tsx Layout**: Titel + Jahr in einer Zeile, Firma darunter
4. **6 neue Projekte**: Sonderanfertigungen, Grow Mushrooms, Glas-Metall-Fliese, Fast Good Cheap, KI & KI, 3D Print on Materials

Nach der Umsetzung:
- Alle Projektbilder werden korrekt angezeigt
- 12 Projekte insgesamt auf der Website (vorher 6)
- About-Seite zeigt sauberes Layout ohne Zeilenumbrueche bei den Jahren
