import React, { useState } from "react";
import axios from "axios";

export default function WordSearch() {
  const [word, setWord] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");

  function handleResponse(response) {
    console.log(response);
    setTemperature(
      <li>
        Current temperature in {word} is {Math.round(response.data.main.temp)}{" "}
        °C
      </li>
    );
    setDescription(
      <li>Description: {response.data.weather[0].description}</li>
    );
    setWind(<li>Windspeed: {response.data.wind.speed} km/h</li>);
    setHumidity(<li>Humidity:{Math.round(response.data.main.humidity)}%</li>);
    let iconURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setIcon(
      <li>
        {" "}
        <img src={iconURL} alt={description} />{" "}
      </li>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "3ec119a7b4622feedeeba843b106eb0a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
    console.log(word);
  }

  return (
    <div className="WordSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="enter a word" onChange={changeWord} />
        <input type="submit" value="Search for word" />
      </form>
      <p>{temperature}</p>
      <p>{wind}</p>
      <p>{humidity}</p>
      <p>{description}</p>
      <p>{icon}</p>
      <div className="definition">
        <h2> meaning </h2>
        <p>A definition is the meaning of a word </p>
      </div>

      <p>
        Coded by <a href="https://github.com/dimbee40/dw-dictinary-hw">Deb</a>
      </p>
    </div>
  );
}
