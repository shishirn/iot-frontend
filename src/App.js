import React, { useMemo, useState, useEffect } from "react";
import "./App.css";
import TempReadings from "./Components/TempReadings";
import {Navigate, BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Sensors from "./Components/Sensors";
import HumiditySensors from "./Components/HumiditySensors";
import TempSensors from "./Components/TempSensors";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Sensors />} />
        <Route path="/tempsensors" element={<TempSensors />} />
        <Route path="/humiditysensors" element={<HumiditySensors />} />
        <Route path="/tempreadings/:id" element={<TempReadings />} />
    </Routes>
)
  
}

export default App;