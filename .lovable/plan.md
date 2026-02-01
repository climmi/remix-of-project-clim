

# Glasbaustein-Projekt auf die Website uebertragen

## Ueberblick

Das "Glasbaustein" Projekt aus dem Portfolio wird als neues Projekt auf der Website hinzugefuegt. Die extrahierten Bilder und Texte aus dem PDF werden verwendet.

---

## Extrahierte Projektdaten

### Titel
**Glasbaustein** (Studiendesign)

### Beschreibung (aus dem PDF)
> Aus Glas in Kombination mit dem 3D-Druckverfahren wird eine einzigartige Leuchte, die traditionsreiches Handwerk mit neuster Technologie kombiniert. Der dabei entstehende Kontrast erzeugt ein lebendiges Spiel der Gegensaetze und Gefuehle.

### Kategorie
Lighting (Wandleuchte / Glaslichtkunst)

### Materialien
- Glas (Glasbaustein)
- 3D-Druck Halterung

### Techniken
- Glaserstellung (Stahlform, Glasblasen)
- 3D-Druck
- Prototypen
- Konstruktion

### Jahr
Basierend auf dem Studienkontext: ca. 2019-2021 (Bachelor/Selbststaendigkeit)

---

## Verfuegbare Bilder aus dem PDF

Folgende Bilder werden aus dem PDF extrahiert und ins Projekt kopiert:

| Bild | Beschreibung |
|------|--------------|
| `img_p36_1.jpg` | Hauptbild - Leuchte an der Wand mit Pflanze (warmfarben) |
| `img_p37_1.jpg` | Mood-Bild (Landschaft - weniger relevant) |
| `img_p38_1.jpg` | Glasform in der Herstellung |
| `img_p38_2.jpg` | Mehrere Glasbausteine (klar + farbig) |
| `img_p38_3.jpg` | Glasblaeser bei der Arbeit |
| `img_p40_1.jpg` | Detailaufnahme Glasecke |
| `img_p40_2.jpg` | Leuchte leuchtend (warm) |
| `img_p40_3.jpg` | Detail Lichtbrechung |
| `img_p41_1.jpg` | Leuchte an weisser Wand (Produktfoto) |

---

## Umsetzung

### 1. Bilder in das Projekt kopieren

Ausgewaehlte Bilder werden nach `public/images/glasbaustein/` kopiert:

- `glasbaustein-1.jpg` (img_p36_1.jpg - Hauptbild, warmfarben)
- `glasbaustein-2.jpg` (img_p41_1.jpg - Produktfoto weisse Wand)
- `glasbaustein-3.jpg` (img_p40_2.jpg - Detail leuchtend)
- `glasbaustein-4.jpg` (img_p38_2.jpg - Glasbausteine Sammlung)
- `glasbaustein-5.jpg` (img_p40_1.jpg - Glasecke Detail)

### 2. Projekt in projects.ts hinzufuegen

Neuer Eintrag am Anfang des Arrays (als neuestes Projekt):

```
id: 'glasbaustein'
title: 'Glasbaustein'
category: 'Lighting'
description: 'Aus Glas in Kombination mit dem 3D-Druckverfahren wird 
              eine einzigartige Leuchte, die traditionsreiches Handwerk 
              mit neuster Technologie kombiniert. Der dabei entstehende 
              Kontrast erzeugt ein lebendiges Spiel der Gegensaetze 
              und Gefuehle.'
materials: ['Glas', '3D-Druck']
techniques: ['Glasblasen', '3D-Druck', 'Prototyping', 'Konstruktion']
year: '2020'
month: 'MAR'
displayFormat: 'portrait' (Hochformat passt gut zu den Bildern)
gridSpan: 1
```

---

## Ergebnis

Nach der Umsetzung erscheint das Glasbaustein-Projekt:

- Auf der Startseite im Grid
- Auf der Projects-Seite
- Mit eigener Detailseite unter `/project/glasbaustein`

Die originalen Bilder aus dem Portfolio werden verwendet anstelle der Placeholder-Bilder.

---

## Dateiaenderungen

| Datei | Aenderung |
|-------|----------|
| `public/images/glasbaustein/` | NEU: 5 Bilder aus dem PDF |
| `src/data/projects.ts` | Neuer Projekteintrag hinzufuegen |

