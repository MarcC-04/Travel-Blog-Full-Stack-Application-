import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./JourneyPlans.css";

const JourneyPlans = () => {
    const [journeyPlans, setJourneyPlans] = useState([]);

    useEffect(() => {
        const fetchAllJourneyPlans = async () => {
            try {
                const res = await axios.get("http://localhost:8800/JourneyPlans");
                setJourneyPlans(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllJourneyPlans();
    }, []);

    const handleDelete = async (journeyplan_id) => {
        try {
            await axios.delete(`http://localhost:8800/JourneyPlans/${journeyplan_id}`);
            setJourneyPlans(prev => prev.filter(j => j.journeyplan_id !== journeyplan_id));
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
            <h2 className="JPTitle">Journey Plans</h2>
            <div className="journeyPlans">
                {journeyPlans.map(journeyplan => (
                    <div className="journeyPlan" key={journeyplan.journeyplan_id}>
                        <p>{journeyplan.journeyplanname}</p>
                        <p>{journeyplan.journeyplanlocation}</p>
                        <p>{journeyplan.journeyplanstartdate}</p>
                        <p>{journeyplan.journeyplanenddate}</p>
                        <p>{journeyplan.listofactivities}</p>
                        <p>{journeyplan.journeyplandescription}</p>

                        <div className="buttonGroup">
                        <button className="delete" onClick={() => handleDelete(journeyplan.journeyplan_id)}>Delete</button>
                        <button className="update"><Link to={`/UpdateJourneyPlans/${journeyplan.journeyplan_id}`}>Update</Link>
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    
};

export default JourneyPlans;
