// clock.js

const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];

function updateClock() {
  const timeEl = document.getElementById('clockTime');
  const dateEl = document.getElementById('clockDate');
  if (!timeEl) return;

  const now = new Date();

  // Konversi ke WIB (UTC+7)
  const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

  // Format jam:menit
  const hour   = String(wib.getHours()).padStart(2, '0');
  const minute = String(wib.getMinutes()).padStart(2, '0');
  timeEl.textContent = `${hour}:${minute}`;

  if (dateEl) {
    const hari    = HARI[wib.getDay()];
    const tanggal = wib.getDate();
    const bulan   = BULAN[wib.getMonth()];
    const tahun   = wib.getFullYear();
    dateEl.textContent = `${hari}, ${tanggal} ${bulan} ${tahun}`;
  }
}

// Update setiap detik
setInterval(updateClock, 1000);

// Jalankan langsung saat DOM siap
document.addEventListener('DOMContentLoaded', updateClock);

