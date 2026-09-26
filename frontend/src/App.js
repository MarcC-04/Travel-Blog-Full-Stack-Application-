import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';

import AddJourneyPlans from './pages/AddJourneyPlans';
import JourneyPlans from './pages/JourneyPlans';
import UpdateJourneyPlans from './pages/UpdateJourneyPlans';

import AddTravelLogs from './pages/AddTravelLogs';
import TravelLogs from './pages/TravelLogs';
import UpdateTravelLogs from './pages/UpdateTravelLogs';


import HomePage from './pages/HomePage';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/JourneyPlans" element={<JourneyPlans/>} />
        <Route path="/AddJourneyPlans" element={<AddJourneyPlans />} />
        <Route path="/UpdateJourneyPlans/:id" element={<UpdateJourneyPlans />} />
        
        <Route path="/AddTravelLogs" element={<AddTravelLogs />} />
        <Route path="/UpdateTravelLogs/:id" element={<UpdateTravelLogs />} />
        <Route path="/TravelLogs" element={<TravelLogs />} />
        
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
