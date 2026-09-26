import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TravelLogs.css";

const TravelLogs = () => {
    const [travelLogs, setTravelLogs] = useState([]);

    useEffect(() => {
        const fetchAllTravelLogs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/TravelLogs");
                setTravelLogs(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllTravelLogs();
    }, []);

    const handleDelete = async (travellog_id) => {
        try {
            await axios.delete(`http://localhost:8800/TravelLogs/${travellog_id}`);
            setTravelLogs(prev => prev.filter(t => t.travellog_id !== travellog_id));
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
            <h3 className="TLTitle">Travel Logs</h3>
            <div className="travelLogs">
                {travelLogs.map(travelLog => (
                    <div className="travelLog" key={travelLog.travellog_id}>
                        <p>{travelLog.title}</p>
                        <p>{travelLog.description}</p>
                        <p>{travelLog.travellogstartdate}</p>
                        <p>{travelLog.travellogenddate}</p>
                        <p>{travelLog.travellogpostdate}</p>

                        <div className="buttonGroup">
                        <button className="delete" onClick={() => handleDelete(travelLog.travellog_id)}>Delete</button>
                        <button className="update"><Link to={`/UpdateTravelLogs/${travelLog.travellog_id}`}>Update</Link></button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    
};

export default TravelLogs;
