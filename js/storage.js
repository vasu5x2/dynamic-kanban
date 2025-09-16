// storage.js
// A tiny wrapper around localStorage with JSON parsing, fallbacks, and versioned key.
export const Storage = {
  load(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Failed to parse localStorage; starting fresh.', e);
      return [];
    }
  },
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  },
  clear(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Failed to clear localStorage', e);
    }
  }
};
