# 📝 Dynamic Kanban Board (Vanilla JS)

A lightweight, modular Kanban board built with **HTML, CSS, and Core JavaScript**.  
Supports drag-and-drop task management and persists tasks with **localStorage**.

---

## 🚀 Features
- **Create Tasks**: Add title + description via a simple form.
- **3 Columns**: To Do · In Progress · Done.
- **Drag & Drop**: Move tasks seamlessly between columns.
- **Persistence**: Tasks remain after page reload (saved to `localStorage`).
- **Clear All**: Wipe the board instantly.
- **No Frameworks**: Pure JavaScript modules.

---

## 📂 Project Structure

.
├── index.html        # Main HTML shell
├── styles.css        # Styling (responsive & modern UI)
├── js/
│   ├── main.js       # App entry point + state initialization
│   ├── storage.js    # LocalStorage wrapper
│   ├── dom.js        # Utility helpers (el, uid, timeShort)
│   ├── renderer.js   # Rendering logic + state mutations
│   ├── dnd.js        # Drag-and-drop behavior
│   └── events.js     # Form and button event handlers
└── README.md

---

## ⚡ Getting Started

### Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/dynamic-kanban.git
   cd dynamic-kanban

   2.	Start a local server:
   npx serve .
# or
python3 -m http.server 3000

3.	Open http://localhost:3000 in your browser.

ℹ️ Opening via file:// may block localStorage in some browsers. Always run with a server.
