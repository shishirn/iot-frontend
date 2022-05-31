import React, { useMemo, useState, useEffect } from "react";
import {Navigate, BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import axios from "axios";
import Table from "../Table/Table";
import TempReadings from "./TempReadings";

const TempSensors=()=>{


const [data, setData] = useState([]);

// Using useEffect to call the API once mounted and set the data
useEffect(() => {
  (async () => {
    const result = await axios("http://localhost:8080/tempsensors");
    setData(result.data);
  })();
}, []);

const columns = useMemo(
  () => [
    {
      Header: "Temperature Sensors",

      columns: [
        {
          Header: "Device id",
          accessor: "deviceid",
        },
        {
          Header: "Installation Date",
          accessor: "installationDate"
        },
        {
          Header: "Temperature Upper Limit",
          accessor: "upperTemperatureLimit"
        },
        {
          Header: "Uptime in Minutes",
          accessor: "maxUptimeInMinutes"
        },
        {
          Header: "Location",
          accessor: "location"
        },
        {
          Header: "Link",
          accessor: "id",
          Cell: e=> {
          let linkto= "/tempreadings/"+e.value;
          return (
              <Link to={linkto} >Link {e.value} </Link>
         );
        }
        }
      ]
    }
  ],
  []
);

return (
    
      <Table columns={columns} data={data} />
      
);
}

export default TempSensors;