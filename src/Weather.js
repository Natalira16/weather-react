import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
    let apiKey = "c9470fa529ce6770f386cc31e17d6a25";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
}