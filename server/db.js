const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "profile_db"
});

connection.connect((err) => {
    if (err) {
        console.error("Koneksi database gagal!");
        console.error(err);
        return;
    }

    console.log("✅ MySQL Connected");
});

module.exports = connection;