import React from "react";
import axios from "axios";
import { Puff } from 'react-loader-spinner'

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
    let apiKey = "c9470fa529ce6770f386cc31e17d6a25";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <Puff
            height="80"
            width="80"
            radisu={1}
            color="#61dafb"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}