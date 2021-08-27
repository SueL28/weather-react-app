import React, {useState} from "react";
import axios from "axios";
import FutureForecast from "./FutureForecast";


export default function WeatherApp(){
    let [city, setCity] = useState(null);
    let [weather, setWeather] = useState("");
    let [emoji, setEmoji] = useState(null);
    let [searched, setSearched] = useState(false);
    let [coordinates, setCoordinates] = useState("");

    function getWeather(response){
        
        setSearched(true);
        setWeather({
            temperature: Math.round(response.data.main.temp),
            humidity: (response.data.main.humidity),
            wind: Math.round(response.data.wind.speed),
            description: response.data.weather[0].description
        })
        setEmoji(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        setCoordinates({
            latitude: response.data.coord.lat,
            longitude:response.data.coord.lon

        })
        
       // console.log(coordinates)
    }    
    
    
    function getBasicWeather(event){
        event.preventDefault();
        let apiKey = `a0ec055234934001bdc16c33f46f3ecb`;
        let units = "metric";
        let basicWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(basicWeatherUrl).then(getWeather);


    }




    function updateSearch(search){
        setCity(search.target.value)
    }

    if (searched === false){
        return(
            <form onSubmit={getBasicWeather}>
                <input type="search" placeholder="Search a City" className="search-bar" onChange={updateSearch}/>
                <input type="submit" value="Search" className="search-button"/>
            </form>
        );
        
    } 
    else {
    return(
        <div className="Search">
            <form onSubmit={getBasicWeather}>
                <input type="search" placeholder="Search a City" className="search-bar" onChange={updateSearch}/>
                <input type="submit" value="Search" className="search-button"/>
            </form>

            <h2>
                <span className="results-container">
                    Temperature: {weather.temperature}°
                    <br/>
                    Humidity: {weather.humidity}%
                    <br/>
                    Wind: {weather.wind} km/h
                    <br/>
                    Currently: {weather.description}
                    <img src={emoji} alt={weather.description}></img>
                    <br/>
                </span>
            </h2>

                <h3>Next 5 Days</h3>
                <FutureForecast latitude={coordinates.latitude} longitude={coordinates.longitude}  />


        </div>
        
        );
    }
}