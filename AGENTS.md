# CRM Prototype — AGENTS.md

## Stack
- Vanilla HTML5 + CSS3 + JS (no build tools)
- Bootstrap 5.3.3 (CSS + JS bundle from CDN)
- Bootstrap Icons 1.11.3 (CDN)
- Google Fonts Inter (CDN)

## Project structure
```
/
├── index.html            # Login page (entry point)
├── flujo.html            # Kanban board ("Mi Flujo")
├── leads.html            # Leads table
├── detalle_flujo.html    # Opportunity detail with 6-stage pipeline
├── detalle_lead.html     # Lead detail
├── propuesta.html        # Follow-up form (cards, toggles, datepickers)
├── css/style.css         # Global styles
└── js/                   # Per-page JS files (flujo.js, leads.js, detalle_flujo.js, detalle_lead.js)
```

## Key conventions

### Navbar
- Dark background, link items: **Mi Flujo**, **Leads**, **Reportes**, **Configuración**
- Avatar dropdown ("A") on the right with **Mi perfil** and **Cerrar sesión** (links to `index.html`)

### Pages / routing
- **index.html** → login button redirects to `leads.html`
- **flujo.html** → cards link to `detalle_flujo.html`
- **leads.html** → rows link to `detalle_lead.html`
- **Ganado** button on detail pages links to `detalle_flujo.html`

### Stage tabs (detalle_flujo.html)
- 6 stages: Exámen, Pago, Status Académico, Status Exámen, Documentos, Matriculado
- Use `data-stage` attributes + JS toggling (`stage-block`, `stage-ribbon`)
- Clicking a stage appends an activity entry to the chatter feed (prepended, newest on top)
- Stage ribbon "Matriculado" is a diagonal badge (`.stage-ribbon` CSS) in top-right of `.p-4` container

### Data blocks
- `.data-block` = gray rounded container for grouped form fields
- Inside: `.field-label` (label), `.field-input` (input/select)
- Used in `detalle_flujo.html`, `detalle_lead.html`, `propuesta.html`

### Tabs (Notas / Contactos)
- Functional with `data-tab` attributes + JS toggling (`tab-panel`)

### propuesta.html specifics
- Custom classes: `.card-crm`, `.form-control-crm`, `.form-label-crm`, `.subcard`, `.toggle-group`, `.toggle-btn`
- Toggle Sí/No buttons work via JS click handlers
- Character counter on textarea updates on input
- Date inputs: full-width with calendar icon (`input-icon icon-right` + `type="date"`)
- Selects have custom SVG dropdown arrow via `background-image`

### Chat activity feed
- New entries added via JS, prepended to `#chatterFeed`
- Format: avatar badge + "Sistema" + time + "Avance a etapa: [name]"

### Git
- Remote: `https://github.com/biggitboss/crm`
- Commit messages follow: `version1`, `version2`, `version3` pattern
