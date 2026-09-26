import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddJourneyPlans.css";


const AddJourneyPlans= () => {
    const [JourneyPlan, setJourneyPlan] = useState({
        journeyplanname: "",  
        journeyplanlocation: "",
        journeyplanstartdate: "",
        journeyplanenddate: "", 
        listofactivities: "",
        journeyplandescription: "",
    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setJourneyPlan((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/JourneyPlans", JourneyPlan);
            navigate("/JourneyPlans");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Add New Journey Plan</h1>
            <input
                type="text"
                placeholder="Journey Plan Name"
                onChange={handleChange}
                name="journeyplanname"
            />
            <input
                type="text"
                placeholder="Location"
                onChange={handleChange}
                name="journeyplanlocation"
            />
            <input
                type="date"
                placeholder="Start Date"
                onChange={handleChange}
                name="journeyplanstartdate"
            />
            <input
                type="date"
                placeholder="End Date"
                onChange={handleChange}
                name="journeyplanenddate"
            />
            <input
                type="text"
                placeholder="List of Activities"
                onChange={handleChange}
                name="listofactivities"
            />
            <input
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="journeyplandescription"
            />
            <button className="formButton" onClick={handleClick}>Add Journey Plan</button>
            {error && <p>Something went wrong</p>}
            <Link to="/JourneyPlans">See all Journey Plans</Link>
        </div>
    );
};

export default AddJourneyPlans;