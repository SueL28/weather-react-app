import React, {useState} from "react";
import axios from "axios";


export default function WeatherApp(){
    let [city, setCity] = useState(null);
    let [weather, setWeather] = useState("");
    let [emoji, setEmoji] = useState(null);
    let [searched, setSearched] = useState(false);
    let [coordinates, setCoordinates] = useState("");
    let [futureForecast, setFutureForecast] = useState("");

    function getWeather(response){

        function showForecast(response){

            setFutureForecast({
                day1: {
                    temp: Math.round(response.data.daily[0].feels_like.day),
                    humidity: response.data.daily[0].humidity,
                    wind: Math.round(response.data.daily[0].wind_speed),
                    description: response.data.daily[0].weather[0].main


                },
                day2: {
                    temp: Math.round(response.data.daily[1].feels_like.day),
                    humidity: response.data.daily[1].humidity,
                    wind :Math.round(response.data.daily[1].wind_speed),
                    description: response.data.daily[1].weather[0].main

                },
                day3: {
                    temp: Math.round(response.data.daily[2].feels_like.day),
                    humidity: response.data.daily[2].humidity,
                    wind :Math.round(response.data.daily[2].wind_speed),
                    description: response.data.daily[2].weather[0].main

                },
                day4: {
                    temp: Math.round(response.data.daily[3].feels_like.day),
                    humidity: response.data.daily[3].humidity,
                    wind: Math.round(response.data.daily[3].wind_speed),
                    description: response.data.daily[3].weather[0].main

                },
                day5: {
                    temp: Math.round(response.data.daily[4].feels_like.day),
                    humidity: response.data.daily[4].humidity,
                    wind: Math.round(response.data.daily[4].wind_speed),
                    description: response.data.daily[4].weather[0].main

                }   
            });
            console.log(response)

        }
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
        let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=a0ec055234934001bdc16c33f46f3ecb&units=metric`;
        axios.get(forecastURL).then(showForecast)

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

            <div>
                Next Few Days
                <ul>
                    <h4>Tomorrow</h4>
                  {/*   <span className="day-container">
                        <li>Temperature: {futureForecast.day1.temp} °C</li>
                        <li>Humidity: {futureForecast.day1.humidity}%</li>
                        <li>Wind: {futureForecast.day1.wind} km/h</li>

                    </span>
                    <span className="day-container">
                        <li>Temperature: {futureForecast.day2.temp} °C</li>
                        <li>Humidity: {futureForecast.day2.humidity}%</li>
                        <li>Wind: {futureForecast.day2.wind} km/h</li>

                    </span>
                    <span className="day-container">
                        <li>Temperature: {futureForecast.day3.temp} °C</li>
                        <li>Humidity: {futureForecast.day3.humidity}%</li>
                        <li>Wind: {futureForecast.day3.wind} km/h</li>

                    </span>
                    <span className="day-container">
                        <li>Temperature: {futureForecast.day4.temp} °C</li>
                        <li>Humidity: {futureForecast.day4.humidity}%</li>
                        <li>Wind: {futureForecast.day4.wind} km/h</li>

                    </span>
                    <span className="day-container">
                        <li>Temperature: {futureForecast.day5.temp} °C</li>
                        <li>Humidity: {futureForecast.day5.humidity}%</li>
                        <li>Wind: {futureForecast.day5.wind} km/h</li>

    </span> */}
                </ul> 
            </div>
        </div>
        
        );
    }
}