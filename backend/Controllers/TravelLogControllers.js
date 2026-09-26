import mysql from "mysql";

const db = mysql.createConnection({
    host: "webcourse.cs.nuim.ie",
    user: "...",
    password: "...",
    database: "..."
});

export const getTravelLogs = (req, res) => {
    const q = "SELECT * FROM TravelLogModel";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const createTravelLog = (req, res) => {
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
};

export const deleteTravelLog = (req, res) => {
    const travellogId = req.params.travellog_id;
    const q = "DELETE FROM TravelLogModel WHERE travellog_id = ?";
    db.query(q, [travellogId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Travel log has been deleted successfully");
    });
};

export const updateTravelLog = (req, res) => {
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
};
