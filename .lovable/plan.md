

# Portfolio-Reorganisation: Nur Fotos mit getrennter Vorschau

## Uebersicht

Alle Projekte und Bilder werden geloescht und komplett neu erstellt. Dabei werden:
- Nur echte Fotos verwendet (keine Grafiken, Diagramme, Renderings, Skizzen)
- Maximal 3 Bilder fuer die Vorschau-Karten
- Alle Fotos in der Detailansicht verfuegbar
- Duplikate werden automatisch ausgeschlossen

---

## Aenderungen an der Datenstruktur

### Neue Project-Interface

```text
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
  techniques: string[];
  previewImages: string[];  // NEU: Max 3 Bilder fuer Karten-Carousel
  images: string[];         // ALLE Fotos fuer Detailansicht
  year: string;
  month: string;
  displayFormat?: 'portrait' | 'square' | 'landscape' | 'wide';
  gridSpan?: 1 | 2;
}
```

### Komponenten-Anpassungen

1. **ProjectCard.tsx**: Verwendet `previewImages` statt `images` fuer das Carousel
2. **ProjectDetail.tsx**: Verwendet weiterhin `images` fuer die vollstaendige Galerie

---

## Ausschluss-Kriterien fuer Grafiken

Folgende Bildtypen werden NICHT verwendet:

| Typ | Beschreibung | Beispiele |
|-----|--------------|-----------|
| 3D-Renderings | CGI-Produktdarstellungen auf schwarzem Hintergrund | img_p13_1.png, img_p15_1.png, img_p24_1.png |
| Skizzen | Handgezeichnete Konzeptskizzen | img_p26_1.png, img_p3_1.png |
| Technische Zeichnungen | Explosionszeichnungen, CAD-Exporte | img_p29_1.png, img_p39_6.png |
| Software-Screenshots | Grasshopper, CAD-Programme | img_p21_1.png |
| Diagramme | Flowcharts, Schema-Darstellungen | - |
| Illustrationen | Grafisch gestaltete Bilder | img_p0_3.png (Rezeptkarte) |

**Grundregel:** .png Dateien werden manuell geprueft, da sie oft Grafiken enthalten.

---

## Projekt-Zuordnung (nur Fotos)

### 1. Infrarotthermometer (S.11-17)
**Nur Fotos (geschaetzt 8-10 Bilder):**
- img_p10_1.jpg (Hauptbild - Person mit Thermometer)
- img_p11_1.jpg bis img_p11_4.jpg
- img_p12_1.jpg bis img_p12_6.jpg
- img_p14_1.jpg, img_p14_2.jpg
- img_p16_1.jpg

**Ausgeschlossen:** img_p13_1.png, img_p13_2.jpg (Rendering), img_p15_1.png (Rendering)

**Preview:** 3 beste Fotos

---

### 2. L-Ement (S.18-24)
**Nur Fotos (geschaetzt 12-14 Bilder):**
- img_p17_1.jpg bis img_p23_1.jpg
- Die meisten sind echte Produktfotos des Stuhldesigns

**Preview:** 3 beste Fotos

---

### 3. ORU (S.25-36)
**Nur Fotos (geschaetzt 10-12 Bilder):**
- Echte Produktfotos der Lampe

**Ausgeschlossen:** img_p24_1.png (Rendering), img_p26_1.png (Skizze), img_p29_1.png, img_p29_2.png (Diagramme), img_p33_2.png

**Preview:** 3 beste Fotos

---

### 4. Glasbaustein (S.37-42)
**Nur Fotos (geschaetzt 15-18 Bilder):**
- Echte Produktfotos der Glaslampe

**Ausgeschlossen:** img_p39_6.png (Explosionszeichnung), img_p16.png (falls vorhanden)

**Preview:** 3 beste Fotos

---

### 5. A to BE (S.43-47)
**Nur Fotos (geschaetzt 5-6 Bilder):**
- Konzeptmodell-Fotos

**Preview:** 3 beste Fotos

---

### 6. glug! (S.48, 51-60 - OHNE S.49-50)
**Nur Fotos (geschaetzt 15-18 Bilder):**
- Echte Eventfotos und Produktfotos

**Ausgeschlossen:** 
- Alle Bilder von S.49-50 (img_p48_*, img_p49_*)
- img_p0_3.png (Illustration Rezeptkarte)
- img_p2_2.png (Skizzen)
- img_p3_1.png, img_p3_2.png (Skizzen)
- img_p4_3.png, img_p4_4.png (falls Grafiken)

**Preview:** 3 beste Fotos

---

### 7. Glas-Metall-Fliese (S.62-66 - erstes Bild S.61 ausgeschlossen)
**Nur Fotos (geschaetzt 10-12 Bilder):**
- Produktfotos der Fliese

**Ausgeschlossen:** img_p10_1.jpg (erstes Bild wie angefordert)

**Preview:** 3 beste Fotos

---

### 8. GROW MUSHROOMS (S.67-76)
**Nur Fotos (geschaetzt 12-15 Bilder):**
- Pilzanbau-Dokumentation und Produktfotos

**Ausgeschlossen:** img_p20_1.png (Skizze), img_p21_1.png (Grasshopper-Screenshot)

**Preview:** 3 beste Fotos

---

### 9. FAST GOOD CHEAP (S.77-81)
**Nur Fotos (geschaetzt 8-10 Bilder):**
- Interaktives Objekt Fotos

**Preview:** 3 beste Fotos

---

### 10. Blender: Quick & Easy (S.82-85)
**Nur Fotos (geschaetzt 6-8 Bilder):**
- Workshop-Dokumentation

**Preview:** 3 beste Fotos

---

### 11. 3D Print Experiments (S.86-90)
**Nur Fotos (geschaetzt 8-10 Bilder):**
- Experimentelle Drucke auf verschiedenen Materialien

**Preview:** 3 beste Fotos

---

### 12. Workshops (S.91-93)
**Nur Fotos (geschaetzt 12-15 Bilder):**
- Workshop-Dokumentation

**Preview:** 3 beste Fotos

---

### 13. Sonderanfertigungen (S.94-96)
**Nur Fotos (geschaetzt 10-12 Bilder):**
- Kollaborationsarbeiten

**Preview:** 3 beste Fotos

---

## Technische Umsetzung

### Schritt 1: Alte Dateien loeschen
- Alle Bilder in public/images/[projekt]/ loeschen
- Alle Projektordner leeren

### Schritt 2: Bilder manuell pruefen und kopieren
Fuer jedes Projekt:
1. Alle Bilder der relevanten Seiten anzeigen
2. Grafiken/Diagramme/Renderings identifizieren und ausschliessen
3. Nur echte Fotos kopieren
4. Auf Duplikate pruefen

### Schritt 3: Project Interface erweitern
```typescript
export interface Project {
  // ... bestehende Felder
  previewImages: string[];  // Max 3 fuer Vorschau-Carousel
  images: string[];         // Alle fuer Detailansicht
}
```

### Schritt 4: ProjectCard.tsx anpassen
```typescript
// Aendere die Medien-Quelle
const mediaItems = project.previewImages.map(url => ({ type: 'image', url }));
```

### Schritt 5: projects.ts komplett neu schreiben
Mit allen 13 Projekten, jeweils:
- `previewImages`: Die 3 besten Fotos
- `images`: Alle verfuegbaren Fotos (nach Ausschluss von Grafiken)

---

## Zusammenfassung

| Projekt | Vorschau | Detailansicht | Ausgeschlossen |
|---------|----------|---------------|----------------|
| Infrarotthermometer | 3 | 8-10 | Renderings |
| L-Ement | 3 | 12-14 | - |
| ORU | 3 | 10-12 | Skizzen, Diagramme |
| Glasbaustein | 3 | 15-18 | Explosionszeichnung |
| A to BE | 3 | 5-6 | - |
| glug! | 3 | 15-18 | S.49-50, Illustrationen |
| Glas-Metall-Fliese | 3 | 10-12 | Erstes Bild |
| GROW MUSHROOMS | 3 | 12-15 | Skizzen, Screenshots |
| FAST GOOD CHEAP | 3 | 8-10 | - |
| Blender Workshop | 3 | 6-8 | - |
| 3D Print Experiments | 3 | 8-10 | - |
| Workshops | 3 | 12-15 | - |
| Sonderanfertigungen | 3 | 10-12 | - |

**Gesamt:** 39 Preview-Bilder, ca. 130-150 Detail-Bilder

