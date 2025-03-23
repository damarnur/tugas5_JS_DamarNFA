// Data Produk
let produkList = [
  {
    id: 1,
    nama: "Laptop",
    harga: 12000000,
  },
  {
    id: 2,
    nama: "Smartphone",
    harga: 5000000,
  },
  {
    id: 3,
    nama: "Tablet",
    harga: 7000000,
  },
  {
    id: 4,
    nama: "PC",
    harga: 1500000,
  },
  {
    id: 5,
    nama: "Action Camera",
    harga: 1500000,
  },
  {
    id: 6,
    nama: "Monitor",
    harga: 3500000,
  },

  // minimal 5 kode
];

// nama fungsi bebas
const eventHandler = {
  tambah: function (nama, harga) {
    produkList = tambahProduk(nama, harga); // Save the returned array to produkList
  },
  hapus: function (id) {
    hapusProduk(id);
  },
  tampilkan: function () {
    tampilkanProduk();
  },
};

// Menambahkan produk dengan Spread Operator
function tambahProduk(nama, harga) {
  // mencari id terbesar
  let maxId = 0;
  for (let i = 0; i < produkList.length; i++) {
    if (produkList[i].id > maxId) {
      maxId = produkList[i].id;
    }
  }

  // menambahkan ID baru
  let newId = maxId + 1;

  // Membuat objek produk yang baru ditambahkan
  const produkBaru = {
    id: newId,
    nama: nama,
    harga: harga,
  };

  // Menggunakan Spread Operator untuk menggabungkan array lama dengan produk baru
  const produkTerkini = [...produkList, produkBaru];
  console.log(`Produk ${nama} berhasil ditambahkan dengan ID: ${newId}`);
  return produkTerkini;
}

// Menghapus produk dengan Rest Parameter
function hapusProduk(...ids) {
  for (const id of ids) {
    const index = produkList.findIndex((produk) => produk.id === id);

    if (index !== -1) {
      console.log(`Produk dengan ID ${id} berhasil dihapus`);
      produkList.splice(index, 1);
    } else {
      console.log(`Produk dengan ID ${id} tidak ditemukan`);
    }
  }
}

// Menampilkan produk dengan Destructing
function tampilkanProduk() {
  console.log(`\n ===== Daftar Produk =====`);
  if (!produkList.length) {
    console.log("Tidak ada produk yang tersedia");
  } else {
    produkList.forEach((produk) => {
      const { id, nama, harga } = produk;
      console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
  }
}

eventHandler.tambah("Nintendo Switch", 5000000);
tampilkanProduk();
hapusProduk(2, 4, 6);
tampilkanProduk();
