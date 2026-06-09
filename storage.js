const STORAGE_PREFIX = 'chinese-coach-';

const Storage = {
  saveReport(data) {
    const entry = { ...data, timestamp: data.timestamp || Date.now() };
    // Save as current report (for report page to read)
    localStorage.setItem(STORAGE_PREFIX + 'current-report', JSON.stringify(entry));
    // Append to history
    const history = this.getReports();
    history.push(entry);
    localStorage.setItem(STORAGE_PREFIX + 'reports', JSON.stringify(history));
  },

  getReports() {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + 'reports');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  getLastReport() {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + 'current-report');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  clearCurrentReport() {
    localStorage.removeItem(STORAGE_PREFIX + 'current-report');
  }
};
