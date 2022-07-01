import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Table from "../Table/Table";


function TempReadings(){
    const [data, setData] = useState([]);
    const [StateId, setStateId] = useState();
    const routerParam = useParams();
    //console.log(props.data);
    
    
  useEffect(() => {
    (async () => {
      console.log(routerParam.id);
      setStateId(routerParam.id);
      const result = await axios("http://localhost:8080/tempreadings?sensorid="+routerParam.id);
      setData(result.data);
      
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Temperature Sensor Readings",

        columns: [
          {
    
            Header: "Device id",
            accessor: "tempSensor.id"
          },
          {
            Header: "Temperature Value",
            accessor: "temperature"
          },
          {
            Header: "Unit",
            accessor: "tempSensor.unit"
          },
          {
            Header: "Location",
            accessor: "tempSensor.location"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="TempReadings">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TempReadings;