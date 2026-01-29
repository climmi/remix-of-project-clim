
# Seitenstruktur Umbauen: Teaser-Startseite + Separate Unterseiten

## Ueberblick

Die Website wird umstrukturiert: Die Startseite zeigt nur kurze Teaser/Uebersichten, die zu separaten Seiten verlinken. Dies entspricht dem Leibal-Ansatz und typischen Magazin-Layouts.

---

## Neue Seitenstruktur

```
/                  → Startseite (Teaser fuer Projects, About, Contact)
/projects          → Alle Projekte (vollstaendige Galerie)
/project/:id       → Projekt-Detailseite (existiert bereits)
/about             → About-Seite (ausfuehrlich)
/contact           → Kontakt-Seite (mit Formular)
/exhibitions       → Ausstellungen & Presse (existiert bereits)
/legal-notice      → Impressum (existiert bereits)
/store-policy      → (existiert bereits)
/terms             → (existiert bereits)
/privacy           → (existiert bereits)
```

---

## 1. Startseite (Index) - Nur Teaser

Die Startseite wird radikal vereinfacht zu einer Uebersicht mit drei Sektionen:

```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                      Projects  About  Contact │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Projects                                                    │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │ Bild 1  │  │ Bild 2  │  │ Bild 3  │  │ Bild 4  │         │
│  │         │  │         │  │         │  │         │         │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘         │
│  Projekt 1    Projekt 2    Projekt 3    Projekt 4           │
│                                                              │
│  View all projects →                                        │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  About                                                       │
│                                                              │
│  Bridging traditional craftsmanship with modern technology  │
│                                                              │
│  Learn more →                                               │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Contact                                                     │
│                                                              │
│  mail@projectclim.com                                       │
│  Hildesheim, Germany                                        │
│                                                              │
│  Get in touch →                                             │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

### Inhalt der Teaser:
- **Projects**: 4-6 Projekte im Grid, Link zu "/projects"
- **About**: Headline + kurzer Satz, Link zu "/about"
- **Contact**: Email + Standort, Link zu "/contact"

---

## 2. Neue Seite: Projects (/projects)

Zeigt alle Projekte in der vollstaendigen Galerie (wie aktuell auf der Startseite).

### Layout:
```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                      Projects  About  Contact │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Projects                                                    │
│  Selected work from Project Clim                            │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│  │ Bild    │  │ Bild    │  │ Bild    │                      │
│  │         │  │         │  │         │                      │
│  └─────────┘  └─────────┘  └─────────┘                      │
│  Projekt 1    Projekt 2    Projekt 3                        │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│  │ Bild    │  │ Bild    │  │ Bild    │                      │
│  │         │  │         │  │         │                      │
│  └─────────┘  └─────────┘  └─────────┘                      │
│  Projekt 4    Projekt 5    Projekt 6                        │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Neue Seite: About (/about)

Ausfuehrliche About-Seite im Stil der Exhibitions-Seite.

### Layout:
```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                      Projects  About  Contact │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  About                                                       │
│                                                              │
│  Bridging traditional craftsmanship with modern technology  │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  I create objects and installations that explore the        │
│  interplay between light, material, and form...             │
│                                                              │
│  [Weitere Absaetze]                                         │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Material Expertise                                         │
│                                                              │
│  Wood, Metal, Glass, Plastics, 3D Printing, Optical Elements│
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Services                                                   │
│                                                              │
│  Product Design, Space Planning, Construction,              │
│  Visualization, Realization                                 │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

Services wird Teil der About-Seite (statt separate Komponente).

---

## 4. Neue Seite: Contact (/contact)

Vollstaendige Kontakt-Seite mit Formular.

### Layout:
```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                      Projects  About  Contact │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Contact                                                     │
│                                                              │
│  ┌──────────────────────┐     Email                         │
│  │ Name                 │     mail@projectclim.com          │
│  │────────────────────│                                    │
│  │ Email                │     Social                        │
│  │────────────────────│     Instagram                      │
│  │                      │                                   │
│  │ Message              │     Based in                      │
│  │                      │     Hildesheim, Germany           │
│  │                      │                                   │
│  │────────────────────│                                    │
│  │ Send Message →       │                                   │
│  └──────────────────────┘                                   │
│                                                              │
│  FOOTER                                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. ProjectDetail - Zurueck-Link hinzufuegen

Auf der Projekt-Detailseite wird ein "← All Projects" Link hinzugefuegt.

```
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CLIM                      Projects  About  Contact │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ← All Projects                                             │
│                                                              │
│  [Rest der Projektseite...]                                 │
```

---

## 6. Navigation (Header) aktualisieren

Die Navigation wird angepasst:

```
Aktuell:   About (Anker)  |  Exhibitions  |  Contact (Anker)
Neu:       Projects       |  About        |  Contact
```

Exhibitions bleibt als separater Link im Footer oder wird optional in der Navigation behalten.

---

## Technische Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/pages/Index.tsx` | Komplett neu: Nur Teaser-Sektionen mit Links |
| `src/pages/Projects.tsx` | NEU: Vollstaendige Projekt-Galerie |
| `src/pages/About.tsx` | NEU: About + Services kombiniert |
| `src/pages/Contact.tsx` | NEU: Kontaktformular + Infos |
| `src/pages/ProjectDetail.tsx` | "← All Projects" Link hinzufuegen |
| `src/components/Header.tsx` | Navigation: Projects, About, Contact als Links |
| `src/App.tsx` | Neue Routen: /projects, /about, /contact |
| `src/components/About.tsx` | Kann geloescht oder wiederverwendet werden |
| `src/components/Contact.tsx` | Kann geloescht oder wiederverwendet werden |
| `src/components/ProjectGallery.tsx` | Kann geloescht oder wiederverwendet werden |
| `src/components/Services.tsx` | Wird in About-Seite integriert, dann loeschen |

---

## Vorher/Nachher

### Navigation

**Vorher:**
```
About (Anker zu #about)  |  Exhibitions  |  Contact (Anker zu #contact)
```

**Nachher:**
```
Projects (/projects)  |  About (/about)  |  Contact (/contact)
```

### Startseite

**Vorher:**
- Vollstaendige Projekt-Galerie
- Vollstaendiger About-Bereich
- Vollstaendiger Services-Bereich
- Vollstaendiger Contact-Bereich

**Nachher:**
- 4-6 Projekte als Teaser + "View all projects →"
- 1 Satz About + "Learn more →"
- Email + Standort + "Get in touch →"

### Projekt-Detailseite

**Vorher:**
- Kein Zurueck-Link

**Nachher:**
- "← All Projects" Link oben links

---

## Dateistruktur nach Umbau

```
src/
├── pages/
│   ├── Index.tsx          (Teaser-Startseite)
│   ├── Projects.tsx       (NEU - Alle Projekte)
│   ├── ProjectDetail.tsx  (Existiert - mit Zurueck-Link)
│   ├── About.tsx          (NEU - Ausfuehrlich + Services)
│   ├── Contact.tsx        (NEU - Formular + Infos)
│   ├── Exhibitions.tsx    (Existiert)
│   ├── LegalNotice.tsx    (Existiert)
│   ├── StorePolicy.tsx    (Existiert)
│   ├── Terms.tsx          (Existiert)
│   ├── Privacy.tsx        (Existiert)
│   └── NotFound.tsx       (Existiert)
├── components/
│   ├── Header.tsx         (Aktualisiert)
│   ├── Footer.tsx         (Existiert)
│   ├── ProjectCard.tsx    (Wiederverwendet)
│   └── ui/                (Existiert)
└── data/
    ├── projects.ts        (Existiert)
    └── exhibitions.ts     (Existiert)
```

Alte Komponenten (About.tsx, Contact.tsx, ProjectGallery.tsx, Services.tsx) werden geloescht nachdem der Code in die neuen Seiten uebernommen wurde.
