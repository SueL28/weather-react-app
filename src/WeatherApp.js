import React, {useState} from "react";
import axios from "axios";


export default function WeatherApp(){
    let [city, setCity] = useState(null);
    let [searched, setSearched] = useState(false);


        

    return(
        <div className="Search">
            <form>
                <input type="search" placeholder="Search a City" className="search-bar"/>
                <input type="submit" value="Search" className="search-button"/>
            </form>

            <h2>
                Currently
                <span className="results-container">
                    Temperature: °
                    <br/>
                    Humidity: %
                    <br/>
                    Wind:  km/h
                    <br/>
                    
                    <img src="" alt=""></img>
                    <br/>
                </span>
            </h2>

            <div>
                Next Few Days
                <ul>
                    <h4>Tomorrow</h4>

                </ul> 
            </div>
        </div>
        
        );
    }
