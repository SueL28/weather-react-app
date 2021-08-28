import React, {useState} from "react";
import "./FutureForecast.css"
import axios from "axios"


export default function FutureForecast(props){
    let[weekday, setWeekday]= useState("");
    let latitude = props.latitude;
    let longitude = props.longitude;


    function showForecast(response){
        let date = new Date(props.dt * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"]
        console.log(response.data)
        setWeekday(day[days])
    }

    let apiKey = `a0ec055234934001bdc16c33f46f3ecb`;
    let units = "metric";
    let forecastUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    console.log(forecastUrl)
    //axios.get(forecastUrl).then(showForecast)

return(
    <div className="forecast-container">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {weekday}
                    <span>Temperature: °C</span>
                    <br />
                    <span>Humidity: %</span>
                    <br />
                    <span>Wind: km/h</span>
                    <br />
                    <span>Description</span>
                </div>
                <div className="col-sm">
                    <span>Temperature:</span>
                    <br />
                    <span>Humidity:</span>
                    <br />
                    <span>Wind:</span>
                    <br />
                    <span>Description</span>
                </div>
                <div className="col-sm">
                    <span>Temperature:</span>
                    <br />
                    <span>Humidity:</span>
                    <br />
                    <span>Wind:</span>
                    <br />
                    <span>Description</span>
                </div>
                <div className="col-sm">
                    <span>Temperature:</span>
                    <br />
                    <span>Humidity:</span>
                    <br />
                    <span>Wind:</span>
                    <br />
                    <span>Description</span>
                </div>
                <div className="col-sm">
                    <span>Temperature:</span>
                    <br />
                    <span>Humidity:</span>
                    <br />
                    <span>Wind:</span>
                    <br />
                    <span>Description</span>
                </div>

            </div>
        </div>
    </div>
);
}