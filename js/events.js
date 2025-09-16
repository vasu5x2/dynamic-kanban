// events.js
// Wire up UI events that change state: form submission, clear-all button
import { addTask, clearAll } from './renderer.js';
import { uid } from './dom.js';

/**
 * Install event handlers. Kept separate from rendering and storage.
 */
export function installEvents(STATE) {
  const form = document.getElementById('taskForm');
  const titleEl = document.getElementById('title');
  const descEl = document.getElementById('description');
  const clearBtn = document.getElementById('clearAllBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleEl.value.trim();
    const description = descEl.value.trim();
    if (!title) {
      titleEl.focus();
      return;
    }
    addTask({
      id: uid(),
      title,
      description,
      status: 'todo',
      createdAt: Date.now()
    });
    form.reset();
    titleEl.focus();
  });

  clearBtn.addEventListener('click', () => {
    if (confirm('Clear all tasks? This cannot be undone.')) {
      clearAll();
    }
  });
}
