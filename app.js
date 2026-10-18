const express = require("express");
const path = require("path");
const menu = require("./data/menu");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const kategori = req.query.kategori;

  let hasil = menu;
  if (kategori) {
    hasil = menu.filter((item) => item.kategori === kategori);
  }

  res.render("index", {
    judul: "Flora Coffee",
    daftarMenu: hasil,
    sorotan: menu.slice(0, 3),
    kategoriAktif: kategori || "semua",
    daftarKategori: [
      { kunci: "kopi", label: "Kopi" },
      { kunci: "nonkopi", label: "Non-Kopi" },
      { kunci: "makanan", label: "Makanan" },
      { kunci: "dessert", label: "Dessert" }
    ]
  });
});

app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find((m) => m.id === id);

  if (!item) {
    return res.status(404).render("notfound", {
      judul: "Menu Tidak Ditemukan",
      idDicari: req.params.id
    });
  }

  res.render("detail", {
    judul: item.nama,
    item: item
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});