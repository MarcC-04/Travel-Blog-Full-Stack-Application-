import express from "express"
import mysql from "mysql"
import cors from "cors"
import bcrypt from "bcrypt"

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "webcourse.cs.nuim.ie",
    user: "...",
    password: "..",
    database: "..."
})

app.get("/", (req, res) => {
    res.json("backend test")
})

app.post("/", async (req, res) => {
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
            if (err) {
                return res.json(err); 
            }
            return res.json(data); 
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error hashing the password' });
    }
});


app.get("/JourneyPlans", (req, res) => {
    const q = "SELECT * FROM JourneyPlanModel";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/JourneyPlans", (req, res) => {
    const q = "INSERT INTO JourneyPlanModel (`journeyplanname`, `journeyplanlocation`, `journeyplanstartdate`, `journeyplanenddate`, `listofactivities`, `journeyplandescription`) VALUES (?)";
    const values = [
        req.body.journeyplanname,
        req.body.journeyplanlocation,
        req.body.journeyplanstartdate,
        req.body.journeyplanenddate,
        req.body.listofactivities,
        req.body.journeyplandescription
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Journey plan has been created successfully");
    });
});

app.delete("/JourneyPlans/:journeyplan_id", (req, res) => {
    const journeyPlanId = req.params.journeyplan_id;
    const q = "DELETE FROM JourneyPlanModel WHERE journeyplan_id = ?";
    db.query(q, [journeyPlanId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Journey plan has been deleted successfully");
    });
});

app.put("/JourneyPlans/:journeyplan_id", (req, res) => {
    const journeyPlanId = req.params.journeyplan_id;
    const q = "UPDATE JourneyPlanModel SET `journeyplanname`=?, `journeyplanlocation`=?, `journeyplanstartdate`=?, `journeyplanenddate`=?, `listofactivities`=?, `journeyplandescription`=? WHERE journeyplan_id=?";
    const values = [
        req.body.journeyplanname,
        req.body.journeyplanlocation,
        req.body.journeyplanstartdate,
        req.body.journeyplanenddate,
        req.body.listofactivities,
        req.body.journeyplandescription
    ];
    db.query(q, [...values, journeyPlanId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Journey plan has been updated successfully");
    });
});

app.get("/TravelLogs", (req, res) => {
    const q = "SELECT * FROM TravelLogModel";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/TravelLogs", (req, res) => {
    const q = "INSERT INTO TravelLogModel (`title`, `description`, `travellogstartdate`, `travellogenddate`, `travellogpostdate`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.travellogstartdate,
        req.body.travellogenddate,
        req.body.travellogpostdate
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Travel log has been created successfully");
    });
});

app.delete("/TravelLogs/:travellog_id", (req, res) => {
    const travellogId = req.params.travellog_id;
    const q = "DELETE FROM TravelLogModel WHERE travellog_id = ?";
    db.query(q, [travellogId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Travel log has been deleted successfully");
    });
});

app.put("/TravelLogs/:travellog_id", (req, res) => {
    const travellogId = req.params.travellog_id;
    const q = "UPDATE TravelLogModel SET `title`=?, `description`=?, `travellogstartdate`=?, `travellogenddate`=?, `travellogpostdate`=? WHERE travellog_id=?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.travellogstartdate,
        req.body.travellogenddate,
        req.body.travellogpostdate
    ];
    db.query(q, [...values, travellogId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Travel log has been updated successfully");
    });
});

app.post("/Register", (req, res) => {
    const q = "INSERT INTO UsersModel (`username`, `password`, `email`, `address`) VALUES (?)";
    const values = [req.body.username, req.body.password, req.body.email, req.body.address];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("User registered successfully");
    });
});



app.listen(8800, () => {
    console.log("Backend is running on port 8800")
});
