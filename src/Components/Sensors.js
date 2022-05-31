import { Route, Routes , Link} from "react-router-dom";

const Sensors = ()=>{
    return (
        <div>
            <h1> Sensors</h1>
            <ul>
                <li> 
                    <Link to="/tempsensors">
                        Temperature Sensors
                    </Link>
                </li>
                <li>
                    <Link to="/humiditysensors">
                        Humidity Sensors
                    </Link>
                </li>
            </ul> 
        </div>
    );
}

export default Sensors;