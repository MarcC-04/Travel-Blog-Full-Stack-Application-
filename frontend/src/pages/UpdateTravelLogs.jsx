import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const UpdateTravelLog = () => {
    const [travelLog, setTravelLog] = useState({
        title: "",
        destination: "",
        travellogstartdate: "",
        travellogenddate: "",
        travellogpostdate: "",
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    
    const travelLogId = location.pathname.split("/")[2];

   
    const handleChange = (e) => {
        setTravelLog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8800/TravelLogs/${travelLogId}`, travelLog);
            navigate("/TravelLogs");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className='form'>
            <h1>Update Travel Log</h1>
            <input type="text" placeholder="Travel Log Name" onChange={handleChange} name="title"/>
            <input type="text" placeholder="Description" onChange={handleChange} name="description"/>
            <input type="date" placeholder="Start Date"  onChange={handleChange} name="travellogstartdate"/>
            <input type="date" placeholder="End Date"    onChange={handleChange}  name="travellogenddate"/>
            <input type="date" placeholder="Post Date"  onChange={handleChange} name="travellogpostdate"/>  
             

            <button className="formButton" onClick={handleClick}>Update Travel Log</button>
            {error && <p>Something went wrong</p>}
            <Link to="/TravelLogs">See all Travel Logs</Link>
        </div>
    );
};

export default UpdateTravelLog;
