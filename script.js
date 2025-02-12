// Ambil elemen-elemen yang dibutuhkan
const form = document.getElementById('formBelanja');
const input = document.getElementById('itemInput');
const daftarBelanja = document.getElementById('daftarBelanja');

// Fungsi untuk menambahkan item ke daftar belanja
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah form submit

  // Ambil nilai input
  const itemText = input.value.trim();

  if (itemText !== '') {
    // Buat elemen li baru
    const li = document.createElement('li');

    // Tambahkan teks item
    li.textContent = itemText;

    // Tambahkan tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    // Tambahkan event listener untuk menandai item sebagai selesai
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    // Tambahkan event listener untuk menghapus item
    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation(); // Mencegah event li terpanggil
      daftarBelanja.removeChild(li);
    });

    // Tambahkan item ke daftar belanja
    daftarBelanja.appendChild(li);

    // Reset input
    input.value = '';
  }
});