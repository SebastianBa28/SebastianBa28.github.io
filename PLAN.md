# Portfolio Website — Build Plan

## Stack
Plain HTML + CSS + Vanilla JS. No npm, no build step — just open `index.html` in a browser.

## Why this stack
- Zero dependencies
- Works offline, no server needed
- Easy to understand and edit
- Can migrate to a framework (Astro, Next.js) later

---

## File Structure

```
portfolio-site/
├── index.html                  ← main single-page site
├── css/
│   └── style.css               ← all styles (variables, layout, components)
├── js/
│   └── main.js                 ← mobile nav, scroll-spy, smooth scroll
├── projects/                   ← one HTML file per project
│   ├── chopper.html
│   ├── me72.html
│   ├── me14.html
│   ├── ae103a.html
│   ├── ae103b.html
│   ├── me8.html
│   ├── surf.html
│   ├── asl.html
│   └── ftc.html
└── assets/
    ├── profile.png             ← profile photo
    └── projects/               ← images/PDFs/videos per project
        ├── chopper/
        ├── me72/
        ├── me14/
        ├── ae103a/
        ├── ae103b/
        ├── me8/
        ├── surf/
        ├── asl/
        └── ftc/
```

---

## index.html Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Sticky Nav | Links to each section; hamburger on mobile |
| 2 | Hero | Name, title, profile photo, contact icon links |
| 3 | About | Bio paragraph |
| 4 | Experience | Vertical timeline (date → company → role) |
| 5 | Projects | Card grid — thumbnail + title + 1-line blurb → project page |
| 6 | Skills | Tag clouds grouped by category |
| 7 | Coursework | Collapsible accordion (ME / Controls+Robotics / Math+Physics) |
| 8 | Contact | Email, phone, LinkedIn |

---

## Individual Project Pages (`projects/*.html`)

Each page contains:
- Back button → `index.html`
- Title + industry tag (CALTECH / NASA JPL)
- Overview callout block (styled like Notion's aside)
- Responsive image gallery grid
- PDF download link (or embedded viewer)
- `<video>` tags for local video files
- YouTube embed where applicable (ME 14)

---

## Design Decisions

### Keep from Notion
- Clean white background, high-contrast black text
- Clear heading hierarchy (h1 → h2 → h3)
- Callout boxes for project overviews

### Improvements over Notion
| What | How |
|------|-----|
| Mobile layout | CSS Grid + Flexbox, responsive breakpoints |
| Navigation | Sticky header with scroll-spy active highlighting |
| Project cards | Cover image + hover lift shadow |
| Typography | Inter (Google Fonts) |
| Color | One accent color (blue `#2563eb`) used consistently |
| Animations | CSS fade-in on scroll via IntersectionObserver (no library) |

---

## Asset Mapping (Notion export → portfolio-site)

| Source | Destination |
|--------|-------------|
| `IMG_9158_Cropped.jpg` | `assets/profile.png` |
| `CHOPPER/.jpeg` | `assets/projects/chopper/` |
| `ME 72/*.png, *.webp` | `assets/projects/me72/` |
| `ME 14/*.png, *.jpg` | `assets/projects/me14/` |
| `Ae 103a/image.png` | `assets/projects/ae103a/` |
| `Ae 103b/image.png` | `assets/projects/ae103b/` |
| `ME 8/*.png` | `assets/projects/me8/` |
| `Summer Research/*.png` | `assets/projects/surf/` |
| `ASL Interpreter/*.png` | `assets/projects/asl/` |
| `FTC Robotics/*.png` | `assets/projects/ftc/` |
| All PDFs | kept in their respective `assets/projects/<name>/` folders |
| All `.mp4` videos | kept in their respective `assets/projects/<name>/` folders |

---

## How to Open the Site
1. Open Finder → navigate to `portfolio-site/`
2. Double-click `index.html`
3. It opens in your default browser — done

Or from Terminal:
```bash
open /Users/sebas/Documents/portfolio-site/index.html
```

---

## Verification Checklist
- [ ] All nav links smooth-scroll to correct section
- [ ] Each project card links to its project page
- [ ] Back button on each project page returns to index
- [ ] Images load on all pages
- [ ] PDFs open or download correctly
- [ ] Videos play on project pages
- [ ] Layout looks good at mobile width (~375px)
- [ ] Layout looks good at desktop width (1280px+)
