import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddTravelLogs.css";

const AddTravelLogs = () => {
    const [TravelLogs, setTravelLogs] = useState({
        title: "",
        description: "",
        travellogstartdate: "",
        travellogenddate: "", 
        travellogpostdate: "",

    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTravelLogs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/TravelLogs",  TravelLogs);
            navigate("/TravelLogs");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Add New Travel Log</h1>
            <input
                type="text"
                placeholder="Travel Log Title"
                onChange={handleChange}
                name="title"
            />
            <input
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
            />
            <input
                type="date"
                placeholder="Start Date"
                onChange={handleChange}
                name="travellogstartdate"
            />
            <input
                type="date"
                placeholder="End Date"
                onChange={handleChange}
                name="travellogenddate"
            />
            <input
                type="date"
                placeholder="Post Date"
                onChange={handleChange}
                name="travellogpostdate"
            />
            <button className="formButton" onClick={handleClick}>
                Add Travel Log
            </button>
            {error && <p>Something went wrong</p>}
            <Link to="/TravelLogs">See all Travel Logs</Link>
        </div>
    );
};

export default AddTravelLogs;