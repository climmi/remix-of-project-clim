

# Portfolio-Bilder Extraktion und Projekt-Reorganisation

## Uebersicht der extrahierten Bilder nach Projekt

Nach der Analyse beider PDFs habe ich alle Bilder identifiziert und den richtigen Projekten zugeordnet.

---

## Projekt-zu-Seiten-Zuordnung

| Projekt | PDF-Seiten (Original) | PDF-Teil | Anzahl Bilder |
|---------|----------------------|----------|---------------|
| Infrarotthermometer | S.11-17 | Teil 1 | 10+ |
| L-Ement | S.18-24 | Teil 1 | 8 |
| ORU | S.25-36 | Teil 1 | 15+ |
| Glasbaustein | S.37-42 | Teil 1 | 10+ |
| AtoBe | S.43-47 | Teil 1 | 5 |
| glug! | S.48-60 (ohne 49-50) | Teil 1 + Teil 2 | 15+ |
| Glas-Metall-Fliese | S.61-66 | Teil 2 (S.11-16) | 8 |
| GROW MUSHROOMS | S.67-76 | Teil 2 (S.17-26) | 12 |
| FAST GOOD CHEAP | S.77-81 | Teil 2 (S.27-31) | 8 |
| Blender: Quick & Easy | S.82-85 | Teil 2 (S.32-35) | 6 |
| 3D Print Experiments | S.86-90 | Teil 2 (S.36-40) | 8 |
| Workshops | S.91-93 | Teil 2 (S.41-43) | 10+ |
| Sonderanfertigungen (Vogel Studio) | S.94-96 | Teil 2 (S.44-46) | 10+ |

---

## Bildpfade aus den PDFs

### PDF Teil 1 (S.1-50)

**Infrarotthermometer (S.11-17 = p10-p16):**
- img_p10_1.jpg, img_p11_1-4.jpg, img_p12_1-6.jpg, img_p13_1-2, img_p14_1-2.jpg, img_p15_1.png, img_p16_1.jpg

**L-Ement (S.18-24 = p17-p23):**
- img_p17_1.jpg, img_p18_1.jpg, img_p19_1-4.jpg, img_p20_1-4.jpg, img_p21_1-3.jpg, img_p22_1.jpg, img_p23_1.jpg

**ORU (S.25-36 = p24-p35):**
- img_p24_1.png, img_p25_1-9.jpg, img_p26_1.png, img_p27_1-5.jpg, img_p28_1-2.jpg, img_p29_1-2.png, img_p30_1.jpg, img_p31_1.jpg, img_p32_1.jpg, img_p33_1-2, img_p34_1.jpg, img_p35_1.jpg

**Glasbaustein (S.37-42 = p36-p41):**
- img_p36_1.jpg, img_p37_1-4.jpg, img_p38_1-5.jpg, img_p39_1-6, img_p40_1-3.jpg, img_p41_1.jpg

**AtoBe (S.43-47 = p42-p46):**
- img_p42_1.jpg, img_p43_1-2.jpg, img_p44_1.jpg, img_p45_1.jpg, img_p46_1.jpg

**Glug (S.48-60, ohne 49-50):**
- Teil 1: img_p47_1.jpg (S.48)
- Teil 2: img_p0_1-4, img_p1_1-2.jpg, img_p2_1-3, img_p3_1-7, img_p4_1-4, img_p5_1-6.jpg, img_p6_1-3.jpg, img_p7_1-6.jpg, img_p8_1.jpg, img_p9_1.jpg

### PDF Teil 2 (S.51-98)

**Glas-Metall-Fliese (p10-p15 im Teil 2):**
- img_p10_1.jpg, img_p11_1-2.jpg, img_p12_1-3.jpg, img_p13_1.jpg, img_p14_1-6.jpg, img_p15_1.jpg

**GROW MUSHROOMS (p16-p25 im Teil 2):**
- img_p16_1.jpg, img_p17_1-3.jpg, img_p18_1.jpg, img_p19_1-3.jpg, img_p20_1-3, img_p21_1.png, img_p22_1.jpg, img_p23_1.jpg, img_p24_1-4.jpg, img_p25_1.jpg

**FAST GOOD CHEAP (p26-p30 im Teil 2):**
- img_p26_1.jpg, img_p27_1-2.jpg, img_p28_1-4.jpg, img_p29_1-3.jpg, img_p30_1.jpg

**Blender: Quick & Easy (p31-p34 im Teil 2):**
- img_p31_1.jpg, img_p32_1-4.jpg, img_p33_1-4.jpg, img_p34_1.jpg

**3D Print Experiments (p35-p39 im Teil 2):**
- img_p35_1.jpg, img_p36_1.jpg, img_p37_1-3.jpg, img_p38_1.jpg, img_p39_1-4.jpg

**Workshops (p40-p42 im Teil 2):**
- img_p40_1-5.jpg, img_p41_1-4.jpg, img_p42_1-6.jpg

**Sonderanfertigungen/Vogel Studio (p43-p45 im Teil 2):**
- img_p43_1-4.jpg, img_p44_1-4.jpg, img_p45_1-4.jpg

---

## Technische Umsetzung

### Schritt 1: Bilder aus den PDFs kopieren

Fuer jedes Projekt werden die Bilder aus dem `parsed-documents://` Namespace in das `public/images/` Verzeichnis kopiert.

### Schritt 2: Ordnerstruktur

```text
public/images/
  infrarotthermometer/
    infrarotthermometer-1.jpg bis infrarotthermometer-10.jpg
  l-ement/
    l-ement-1.jpg bis l-ement-8.jpg
  oru/
    oru-1.jpg bis oru-15.jpg
  glasbaustein/
    glasbaustein-1.jpg bis glasbaustein-10.jpg
  atobe/
    atobe-1.jpg bis atobe-5.jpg
  glug/
    glug-1.jpg bis glug-15.jpg
  glas-metall-fliese/
    glas-metall-fliese-1.jpg bis glas-metall-fliese-8.jpg
  grow-mushrooms/
    grow-mushrooms-1.jpg bis grow-mushrooms-12.jpg
  fast-good-cheap/
    fast-good-cheap-1.jpg bis fast-good-cheap-8.jpg
  blender-workshop/
    blender-workshop-1.jpg bis blender-workshop-6.jpg
  3d-print-experiments/
    3d-print-experiments-1.jpg bis 3d-print-experiments-8.jpg
  workshops/
    workshops-1.jpg bis workshops-10.jpg
  sonderanfertigungen/ (Vogel Studio Collaborations)
    sonderanfertigungen-1.jpg bis sonderanfertigungen-10.jpg
```

### Schritt 3: projects.ts aktualisieren

Alle Projekte werden mit den korrekten Bildpfaden aktualisiert:

| Projekt | ID | Kategorie |
|---------|-----|-----------|
| Infrarotthermometer | infrarotthermometer | Product Design |
| L-Ement | l-ement | Furniture |
| ORU | oru | Lighting |
| Glasbaustein | glasbaustein | Lighting |
| A to BE | atobe | Mobility Concept |
| glug! | glug | Social Design |
| Glas-Metall-Fliese | glas-metall-fliese | Experiment |
| GROW MUSHROOMS | grow-mushrooms | Experiment |
| FAST GOOD CHEAP | fast-good-cheap | Interactive Object |
| Blender: Quick & Easy | blender-workshop | Workshop |
| 3D Print Experiments | 3d-print-experiments | Experiment |
| Workshops (Freie Werkstatt) | workshops | Workshop |
| Sonderanfertigungen (Vogel Studio) | sonderanfertigungen | Collaboration |

---

## Wichtige Hinweise

1. **Glug-Projekt**: Die Bilder von S.49-50 (img_p48_* und img_p49_*) werden NICHT verwendet, wie vom Benutzer gewuenscht.

2. **Sonderanfertigungen = Vogel Studio Collaborations**: Die Seiten 94-96 zeigen die Zusammenarbeit mit Vogel Studio (Spiegel, Tuergriff, Griffe).

3. **Maximale Bilderanzahl**: Pro Projekt werden bis zu 20 Bilder extrahiert, je nach Verfuegbarkeit.

4. **Bildqualitaet**: Es werden die extrahierten Einzelbilder verwendet (img_p*), nicht die vollstaendigen Seiten-Screenshots (page_*.jpg).

---

## Zusammenfassung

- **13 Projekte** werden mit korrekten Bildern aktualisiert
- **Ueber 100 Bilder** werden aus den PDFs extrahiert
- Alle Projekte haben nun mehrere Bilder fuer die Carousel-Funktion
- Die Projektstruktur entspricht dem Original-Portfolio

