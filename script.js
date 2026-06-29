document.getElementById("formTransaksi").addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let kategori = document.getElementById("kategori").value;

  if (nama === "" || jumlah === "" || kategori === "") {
    alert("Semua data transaksi wajib diisi!");
  } else {
    alert("Data transaksi berhasil disimpan!");
  }
});