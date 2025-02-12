if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Terdaftar'))
      .catch((err) => console.log('Gagal Mendaftarkan Service Worker:', err));
  }