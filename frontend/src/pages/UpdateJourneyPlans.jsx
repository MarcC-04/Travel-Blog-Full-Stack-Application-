import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const UpdateJourneyPlan = () => {
    const [journeyPlans, setJourneyPlan] = useState({
        journeyplanname: "",
        journeyplanlocation: "",
        journeyplanstartdate: "",
        journeyplanenddate: "",
        listofactivities: "",
        journeyplandescription: ""
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const journeyPlanId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setJourneyPlan((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/JourneyPlans/${journeyPlanId}`, journeyPlans);
            navigate("/JourneyPlans");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className='form'>
            <h1>Update Journey Plan</h1>
            <input
                type="text"
                placeholder="Journey Plan Name"
                name="journeyplanname"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Location"
                name="journeyplanlocation"
                onChange={handleChange}
            />
            <input
                type="date"
                placeholder="Start Date"
                name="journeyplanstartdate"
                onChange={handleChange}
            />
            <input
                type="date"
                placeholder="End Date"
                name="journeyplanenddate"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="List of Activities"
                name="listofactivities"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Description"
                name="journeyplandescription"
                onChange={handleChange}
            />

            <button className="formButton" onClick={handleClick}>Update Journey Plan</button>
            {error && <p>Something went wrong</p>}
            <Link to="/JourneyPlans">See all Journey Plans</Link>
        </div>
    );
};

export default UpdateJourneyPlan;
