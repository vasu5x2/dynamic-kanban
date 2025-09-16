// renderer.js
import { el, timeShort } from './dom.js';
import { Storage } from './storage.js';
import { STATE } from './main.js';

/**
 * Render the static board columns (once).
 */
export function renderBoard() {
  // Already present in HTML; we only ensure counts are synced in renderAll.
}

/**
 * Render all tasks into their columns, updating counts.
 * This batch render is simple and efficient for modest task counts.
 */
export function renderAll(tasks) {
  const zones = document.querySelectorAll('.dropzone');
  zones.forEach(z => z.innerHTML = '');

  const counts = { todo: 0, inprogress: 0, done: 0 };

  for (const t of tasks) {
    const card = renderCard(t);
    const zone = document.querySelector(`.dropzone[data-status="${t.status}"]`);
    if (zone) zone.appendChild(card);
    counts[t.status]++;
  }

  // Update column counters
  for (const [k, v] of Object.entries(counts)) {
    const elCount = document.querySelector(`.count[data-count="${k}"]`);
    if (elCount) elCount.textContent = String(v);
  }
}

function renderCard(task) {
  const card = el('article', { class: 'card', draggable: true, 'data-id': task.id });
  card.append(
    el('h4', { class: 'title' }, task.title),
    task.description ? el('p', { class: 'desc' }, task.description) : el('p', { class: 'desc' }, '—'),
    el('div', { class: 'meta' },
      el('span', {}, timeShort(task.createdAt)),
      el('span', { class: 'pill' }, prettyStatus(task.status))
    )
  );

  // Drag attributes handled in dnd.js through event delegation
  return card;
}

function prettyStatus(s) {
  if (s === 'todo') return 'To Do';
  if (s === 'inprogress') return 'In Progress';
  return 'Done';
}

/** Convenience: push a task and persist + re-render */
export function addTask(task) {
  STATE.tasks.push(task);
  Storage.save(STATE.storageKey, STATE.tasks);
  renderAll(STATE.tasks);
}

/** Move a task to a new status and persist + re-render */
export function moveTask(taskId, newStatus) {
  const t = STATE.tasks.find(x => x.id === taskId);
  if (!t) return;
  t.status = newStatus;
  Storage.save(STATE.storageKey, STATE.tasks);
  renderAll(STATE.tasks);
}

/** Clear all tasks */
export function clearAll() {
  STATE.tasks = [];
  Storage.clear(STATE.storageKey);
  renderAll(STATE.tasks);
}
