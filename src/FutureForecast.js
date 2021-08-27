import React, {useState} from "react";
import WeatherApp from "./WeatherApp";
import axios from "axios"

export default function FutureForecast(props){
    let [futureForecast, setFutureForecast] = useState("");
    let latitude = props.latitude;
    let longitude = props.longitude;

    function showForecast(response){
     console.log(response.data)
    }

    let apiKey = `a0ec055234934001bdc16c33f46f3ecb`;
    let units = "metric";
    let forecastUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then(showForecast)

return(
    <div>
        <span>Temperature:</span>
    </div>
);
}