import mysql from "mysql";

const db = mysql.createConnection({
    host: "webcourse.cs.nuim.ie",
    user: "...",
    password: "...",
    database: "..."
});

export const getJourneyPlans = (req, res) => {
    const q = "SELECT * FROM JourneyPlanModel";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const createJourneyPlan = (req, res) => {
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
};

export const deleteJourneyPlan = (req, res) => {
    const journeyPlanId = req.params.journeyplan_id;
    const q = "DELETE FROM JourneyPlanModel WHERE journeyplan_id = ?";
    db.query(q, [journeyPlanId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Journey plan has been deleted successfully");
    });
};

export const updateJourneyPlan = (req, res) => {
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
};
