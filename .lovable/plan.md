
# Services und Contact Vereinfachung

## Ueberblick

Der Services-Bereich wird kompakter und weniger prominent gestaltet. Der Contact-Bereich bekommt eine direktere, weniger generische Ansprache.

---

## 1. Services-Bereich: Kompakter und weniger im Fokus

### Aktuelles Problem
- Jeder Service hat eine eigene Zeile mit Nummer, Titel und Beschreibung
- Nimmt viel Platz ein (5 Services mit je ~3 Zeilen)
- Die Nummerierung (01, 02...) und der grosse Header wirken zu formal

### Neue Struktur

**Option A: Horizontale Auflistung**
```
Services

Product Design · Space Planning · Construction · Visualization · Realization
```

**Option B: Kompakte Liste mit kurzer Beschreibung**
```
Services

Product Design, Space Planning, Construction,
Visualization, Realization

From concept to finished product.
```

**Option C: Einzeilig im Footer-Stil**
Die Services koennten auch ganz aus der Hauptseite verschwinden und nur auf einer separaten About/Services-Seite erscheinen oder im Footer erwaehnt werden.

### Empfehlung: Option B
- Services als Komma-getrennte Liste (wie Material Expertise im About)
- Ein kurzer Satz darunter der alles zusammenfasst
- Kein grosser Header-Satz wie "End-to-end design and fabrication services"
- Weniger vertikaler Platz

---

## 2. Contact-Bereich: Weniger generisch

### Aktuelles Problem
- "Let's create something extraordinary together" ist ein typischer Marketing-Satz
- Wirkt unpersoenlich und austauschbar

### Neue Ansprache

**Optionen fuer Header:**
- Komplett entfernen (nur "Contact" als Titel)
- Direkter/persoenlicher: "Get in touch" oder "Say hello"
- Oder ganz ohne Untertitel - einfach das Formular

### Empfehlung: Minimalistisch ohne Slogan
```
Contact

[Formular links]          Email
                          mail@projectclim.com
                          
                          Instagram
                          @projectclim
                          
                          Based in
                          Hildesheim, Germany
```

Der grosse generische Satz faellt komplett weg. Der Bereich ist direkter und schlichter.

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/components/Services.tsx` | Kompaktere Liste ohne Nummern und Einzelbeschreibungen |
| `src/components/Contact.tsx` | Generischen Header-Satz entfernen |

---

## Vorher/Nachher

### Services

**Vorher:**
```
Services

End-to-end design and fabrication services

01  Product Design
    From concept to detailed design...

02  Space Planning
    Thoughtful spatial solutions...

[... 5 Eintraege]
```

**Nachher:**
```
Services

Product Design, Space Planning, Construction,
Visualization, Realization
```

### Contact

**Vorher:**
```
Contact

Let's create something extraordinary together

[Formular]                [Kontaktdaten]
```

**Nachher:**
```
Contact

[Formular]                [Kontaktdaten]
```

