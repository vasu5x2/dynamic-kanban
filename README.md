<<<<<<< HEAD
# dynamic-kanban
=======
# Dynamic Kanban Board (Vanilla JS)

A modular, framework-free Kanban board with HTML5 drag & drop and localStorage persistence.

## Features
- Create tasks with title + description
- Three columns: **To Do**, **In Progress**, **Done**
- Drag & drop tasks between columns
- Persists to `localStorage` (key: `kanban_tasks_v1`)
- Modular code: separate files for storage, rendering, drag & drop, and events
- Reusable utilities (`dom.js`)

## Structure
```
.
├─ index.html          # App shell
├─ styles.css          # UI styles
└─ js/
   ├─ main.js          # Bootstraps app & global state
   ├─ storage.js       # LocalStorage wrapper
   ├─ dom.js           # DOM utilities (el, uid, timeShort)
   ├─ renderer.js      # Rendering & state mutation helpers
   ├─ dnd.js           # Drag & drop behavior
   └─ events.js        # Form & button event handlers
```

## Getting Started
1. Download the ZIP and extract.
2. Open `index.html` in a browser (double-click). No build step required.

> If you serve via a local server (optional), any static server works (e.g., `npx serve .`).

## Live Link (GitHub Pages)
1. Create a new GitHub repository.
2. Upload these files.
3. In **Settings → Pages**, set **Branch: main / root**.  
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`.

## Submission Checklist
- **Live link:** GitHub Pages URL
- **Repo link:** the GitHub repository
- **Zip file:** use the ZIP generated here
- **Video:** record a short walkthrough:
  - What GPT generated vs. what you edited
  - Explain architecture and each module's role
  - Show adding tasks, dragging, reloading persistence

## Notes on Scalability
- State lives in one place (`STATE.tasks`), mutations centralized in `renderer.js` helpers.
- Adding features (edit/delete, filters, search, swimlanes) fits naturally by extending modules or adding new ones.
- Storage versioning is isolated (swap `storageKey` or schema migration as needed).

---

© 2025-09-16
>>>>>>> 09f2079 (Initial Commit)
