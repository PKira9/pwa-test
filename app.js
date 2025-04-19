if ('serviceWorker' in navigator) { 
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js'); 
  });
}

function showQRCode() {
    const qrcodeContainer = document.getElementById('qrcode-container');
    const button = document.querySelector('.button');

    if (qrcodeContainer.style.display === 'none') {
        qrcodeContainer.style.display = 'block'; 
        button.textContent = 'Убрать QR-код'; 
    } else {
        qrcodeContainer.style.display = 'none'; 
        button.textContent = 'Показать QR-код'; 
    }
}
