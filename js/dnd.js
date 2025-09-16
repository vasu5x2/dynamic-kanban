// dnd.js
// Drag & drop behavior (HTML5 DnD API) kept isolated from rendering.
import { moveTask } from './renderer.js';

/**
 * Install drag & drop listeners on the board.
 * - Cards are draggable via [draggable=true]
 * - Dropzones are the column bodies with [data-status]
 */
export function installDnD(STATE) {
  const board = document.getElementById('board');

  // Delegate dragstart from cards
  board.addEventListener('dragstart', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    e.dataTransfer.setData('text/plain', card.dataset.id);
    e.dataTransfer.effectAllowed = 'move';
    card.classList.add('dragging');
  });

  board.addEventListener('dragend', (e) => {
    const card = e.target.closest('.card');
    if (card) card.classList.remove('dragging');
  });

  // Dropzone effects
  const zones = board.querySelectorAll('.dropzone');
  zones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault(); // allow drop
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const newStatus = zone.dataset.status;
      if (id && newStatus) moveTask(id, newStatus);
    });
  });
}
