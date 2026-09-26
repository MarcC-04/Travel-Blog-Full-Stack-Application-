import bcrypt from "bcrypt";
import mysql from "mysql";

const db = mysql.createConnection({
    host: "webcourse.cs.nuim.ie",
    user: "...",
    password: "...",
    database: "..."
});

export const registerUser = async (req, res) => {
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        const q = "INSERT INTO UsersModel (`username`, `password`, `email`, `address`) VALUES (?)";
        const values = [
            req.body.username,
            hashedPassword, 
            req.body.email,
            req.body.address
        ];
        
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("User registered successfully");
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error hashing the password' });
    }
};
