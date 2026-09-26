import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Travel Blog Full-Stack Application</Link>

            <nav className="homepage">
                <Link to="/AddJourneyPlans">Journey Plans</Link>
                <Link to="/AddTravelLogs">Travel Logs</Link>
                </nav>
            </header>
    )
}

export default HomePage;