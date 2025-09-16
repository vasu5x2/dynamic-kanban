// Entry point: bootstraps modules and sets up the app
import { Storage } from './storage.js';
import { renderBoard, renderAll } from './renderer.js';
import { installDnD } from './dnd.js';
import { installEvents } from './events.js';

/**
 * Global-ish app state is kept in-memory and synced to localStorage via Storage.
 * The 'tasks' array is the single source of truth for rendering.
 */
export const STATE = {
  tasks: [],
  storageKey: 'kanban_tasks_v1'
};

// Initialize application
function init() {
  STATE.tasks = Storage.load(STATE.storageKey);
  renderBoard();
  renderAll(STATE.tasks);
  installDnD(STATE);
  installEvents(STATE);
}

init();
