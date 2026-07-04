const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");   // <- harus ada

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
    res.send("Backend berjalan!");
});
app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contacts(name,email,message)
        VALUES (?,?,?)
    `;

    db.query(sql, [name, email, message], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success:false,
                message:"Gagal menyimpan data"
            });
        }

        res.json({
            success:true,
            message:"Data berhasil disimpan"
        });

    });

});

// Menjalankan server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});