const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mif:yourdatabasemongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
    console.log("Koneksi database berhasil!");
});

