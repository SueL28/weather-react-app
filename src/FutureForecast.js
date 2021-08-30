import React, { useState } from "react";
import "./FutureForecast.css"
import axios from "axios"


export default function FutureForecast(props){
    const[ready, setReady] = useState(false);
    let [dayOneTemp, setDayOneTemp] = useState("");
    let [dayTwoTemp, setDayTwoTemp] = useState("");
    let [dayThreeTemp, setDayThreeTemp] = useState("");
    let [dayFourTemp, setDayFourTemp] = useState("");
    let [dayFiveTemp, setDayFiveTemp] = useState("");
    let latitude = props.latitude;
    let longitude = props.longitude;

    
    
    function showForecast(response){
        setDayOneTemp(Math.round(response.data.daily[0].temp.max))
        setDayTwoTemp(Math.round(response.data.daily[1].temp.max))
        setDayThreeTemp(Math.round(response.data.daily[2].temp.max))
        setDayFourTemp(Math.round(response.data.daily[3].temp.max))
        setDayFiveTemp(Math.round(response.data.daily[4].temp.max))
        setReady(true);

    }
    

    let apiKey = `a0ec055234934001bdc16c33f46f3ecb`;
    let units = "metric";
    let forecastUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then(showForecast)

if (ready){
return(
    <div className="forecast-container">
        <div className="container">
            <div className="row">
                <div className="col-sm">

                    <span>Temperature 
                        <br />
                        {dayOneTemp}°C 
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        {dayTwoTemp}°C
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        {dayThreeTemp}°C 
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        {dayFourTemp}°C 
                        <br/>
                            HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br />
                        {dayFiveTemp}°C 
                        <br/>
                        HIGH
                    </span>
                </div>

            </div>
        </div>
    </div>
    );
    }else{
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm">

                    <span>Temperature 
                        <br />
                        -°C 
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        -°C
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        -°C 
                        <br/>
                        HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br/>
                        -°C 
                        <br/>
                            HIGH
                    </span>

                </div>
                <div className="col-sm">
                    <span>Temperature 
                        <br />
                        -°C 
                        <br/>
                        HIGH
                    </span>
                </div>

            </div>
        </div>
        );
    }
}