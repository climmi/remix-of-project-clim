
# Vollstaendige Portfolio-Uebertragung auf die Website

## Problem 1: Bilder werden nicht angezeigt

Das erste Bild bei "Spectrum Wall Light" hat eine ungueltige Unsplash-URL:
```
https://images.unsplash.com/photo-507473885765-e6ed057f782c
```
Diese ID existiert nicht - daher wird kein Bild angezeigt.

Loesung: Alle Placeholder-Projekte werden durch echte Projekte aus dem Portfolio ersetzt. Die alten Beispielprojekte werden entfernt.

---

## Projekte aus dem Portfolio

Basierend auf dem PDF werden folgende **6 Hauptprojekte** uebertragen:

| Nr | Projekt | Kategorie | Jahr | PDF-Seiten |
|----|---------|-----------|------|------------|
| 1 | Glasbaustein | Lighting | 2020 | 37-42 (bereits vorhanden) |
| 2 | Infrarotthermometer | Product Design | 2019 | 11-17 |
| 3 | L-Ement | Furniture | 2019 | 18-24 |
| 4 | ORU | Lighting | 2019 | 25-36 |
| 5 | AtoBe (Bachelor-Thesis) | Mobility / Concept | 2019 | 43-47 |
| 6 | Glug | Social Design | 2023 | 48-50 |

---

## Bilder pro Projekt (aus PDF extrahiert)

### Infrarotthermometer (5 Bilder)
- img_p10_1.jpg - Hauptbild Rendering
- img_p14_1.jpg - Produktfoto
- img_p13_1.png - Technische Zeichnung
- img_p12_1.jpg - Entwurfsskizzen
- img_p16_1.jpg - Lifestyle-Bild

### L-Ement (5 Bilder)
- img_p17_1.jpg - Hauptbild Stuhl
- img_p23_1.jpg - Fertiger Prototyp
- img_p20_1.jpg - CNC Fraesen
- img_p21_1.jpg - Aufbau
- img_p22_1.jpg - Detail Verbindung

### ORU (5 Bilder)
- img_p24_1.png - Rendering Hauptbild
- img_p30_1.jpg - Prototyp Foto
- img_p33_1.jpg - Detail LED
- img_p34_1.jpg - Leuchte offen
- img_p35_1.jpg - Leuchte geschlossen

### AtoBe (4 Bilder)
- img_p42_1.jpg - Hauptbild Bus
- img_p45_1.jpg - Technisches Konzept
- img_p46_1.jpg - Detail Rendering
- img_p43_1.jpg - Infografik

### Glug (4 Bilder)
- img_p47_1.jpg - Hauptbild Pop-Up Station
- img_p49_1.jpg - Kampagne Poster
- img_p48_1.png - Infografik
- img_p49_2.jpg - Detail

---

## Workshops und Lehrerfahrung

Aus dem Lebenslauf-Teil (Seite 4-6) werden folgende Daten extrahiert:

### Neue Datenstruktur: `src/data/experience.ts`

```text
Workshops:
- Blender Quick & Easy (InCollege, 2022)
- Workshop Micasa Retail (design for human nature GmbH, 2023)

Werkstattleitung (Freie Werkstatt):
- Osterferienprogramm (2023, 2024)
- Sommerferienprogramm (2023, 2024)
- Spot-Your-Job (2023, 2024, 2025)
- Zukunftstag (2023, 2024)
- Projekt Anstoss (2025)

Tutorenerfahrung:
- CAD I Tutor, HAWK (4 Semester, 2017)
```

---

## About-Seite Update

Die About-Seite wird mit echten Daten aus dem Portfolio gefuellt:

### Persoenliche Info
- Name: Clim Michel
- Kontakt: clim@gmx.net, 0173 53 18 627, IG: clims_krams
- Standort: Hildesheim, Germany

### Tagline
"So besonders wie mein Name ist auch meine Art zu arbeiten - Nicht immer gleich und auch manchmal alles umgekehrt."

### Philosophie (aus Seite 7)
- **Design**: Das Schaffen von Produkten bringt einen Mehrwert an Aesthetik, kultureller Bildung und problemloesender Funktionalitaet.
- **Handwerk**: Mit Sorgfalt Objekte und Prototypen erschaffen, begutachten und mit den eigenen Haenden veraendern.
- **Zwischenmenschlich**: Die zwischenmenschlichen Beziehungen machen einen wichtigen Teil der Arbeit aus.

### Kompetenzen
- Konzept, Sketching, Ideation, Rapid Prototyping
- 3D-Scanning/-Druck, Modellbau, Konstruktion
- Technische Zeichnung, Metallverarbeitung, Holzverarbeitung
- Keramikerstellung, Glasobjekte, Kupfer-/Aluminium-Guss

### Software
- Adobe Suite (InDesign, Photoshop, Illustrator)
- Rhinoceros 3D, Grasshopper, Vray
- Keyshot, Fusion360, Blender
- Bambu Studio, RhinoCAM, Lightburn, ESTLCAM

### Auszeichnungen
- Beste Bachelorarbeit Nominierung HAWK
- Absolventenausstellung HAWK Hildesheim
- Ideenwettbewerb "Hi2025" - 2. Platzierung

---

## Exhibitions & Press Update

Die bestehenden Placeholder-Daten werden durch echte Daten ersetzt:

### Ausstellungen (aus dem CV)
- Metall+Glasform Ausstellung, Schloss Landestrost
- Absolventenausstellung HAWK Hildesheim

### Kooperationen (statt Press)
- Britta Diers GmbH (Interieur & Design)
- design for human nature GmbH (Praktikum)
- Cluster Projekte GmbH
- Freie Werkstatt Hildesheim gGmbH
- Stadt Hildesheim (Partizipation & Stadtentwicklung)

---

## Datei-Aenderungen

| Datei | Aenderung |
|-------|----------|
| `public/images/infrarotthermometer/` | NEU: 5 Bilder |
| `public/images/l-ement/` | NEU: 5 Bilder |
| `public/images/oru/` | NEU: 5 Bilder |
| `public/images/atobe/` | NEU: 4 Bilder |
| `public/images/glug/` | NEU: 4 Bilder |
| `public/images/about/` | NEU: Portraitbild |
| `src/data/projects.ts` | Kompletter Ersatz - 6 echte Projekte |
| `src/data/exhibitions.ts` | Aktualisiert mit echten Daten |
| `src/data/experience.ts` | NEU: Workshops und Lehrerfahrung |
| `src/pages/About.tsx` | Aktualisiert mit echten Inhalten |

---

## Reihenfolge der Projekte (chronologisch absteigend)

1. Glug (2023) - Social Design
2. Glasbaustein (2020) - Lighting
3. AtoBe (2019) - Mobility Concept (Thesis)
4. ORU (2019) - Lighting
5. L-Ement (2019) - Furniture
6. Infrarotthermometer (2019) - Product Design

---

## Technische Details

### Bildpfade
Alle lokalen Bilder werden im Format gespeichert:
```
/images/[projekt-id]/[projekt-id]-[nummer].jpg
```

### Projekt-Beschreibungen (aus PDF)

**Infrarotthermometer**:
"Das Fieberthermometer ist ein essenzielles Produkt jeden Haushalts. In Ausnahmesituationen, wie Krankheit, muss das Fieberthermometer bereit sein. Die Interaktion zwischen Mensch und Objekt ist dabei besonders wichtig, da es sich um eine intime Situation handelt."

**L-Ement**:
"Die Exploration eines neuen Stuhls aus nur einem Formteil. Aus der zweiten Dimension wird zusammengebaut die dritte Dimension. Dabei spielten besonders die Packmasze eine grosse Rolle. Werkzeugloser Aufbau durch Holzmutterschrauben."

**ORU**:
"Ein sauberer geordneter Schreibtisch bildet haeufig die eigene Gedankenwelt ab. Mit der Idee ein moeglichst flaches, wenig aufdringliches Schreibtischbild zu kreieren wurde die Oru (jap. falten) Leuchte entworfen."

**AtoBe**:
"Ein holistischer Ansatz der Zukunftstechnologie mit Benutzer*innenbeduerfnissen verbindet. Teil-Individuelle Buslinienerstellung und sinnvoller Einsatz der E-Mobilitaet im OePNV."

**Glug**:
"Das Projekt setzt sich mit der Muellvermeidung, insbesondere von Plastikflaschen, auseinander. Eine mobile Pop-Up Station dient als interaktiver Informationsstand. Durch ein spielerisches Quiz werden Buerger*innen ueber die Vorteile von Leitungswasser aufgeklaert."
