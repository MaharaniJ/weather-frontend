import React from "react";
import { Link } from "react-router-dom";

export default function Result({ weatherData, historyData, historySearch }) {
  const historyItems = historyData.map((item, index) => (
    <li
      onClick={() => historySearch(item)}
      className="text-xl cursor-pointer"
      key={index}
    >
      {item}
    </li>
  ));

  const { weather } = weatherData; // Destructure the weather object from weatherData

  return (
    <div className="container mt-5 p-2 ">
      <div className="row">
        <div className="col-md-3 border-end">
          <span className="text-center block font-bold">History</span>
          <ul>{historyItems}</ul>
        </div>

        <div className="col-md-9">
          {weather && Object.keys(weather).length > 0 ? ( // Check if weather object is not empty
            <>
              <h2 className="text-4xl text-center cursor-pointer">
                {weatherData.name}
              </h2>
              <div className="text-2xl d-flex justify-content-around my-2">
                <div>Max Temp: {weather.main.temp_max} deg</div>
                <div>Min Temp: {weather.main.temp_min} deg</div>
              </div>
              <div className="text-2xl d-flex justify-content-around my-2 align-items-center">
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
                <div>{weather.weather[0].main}</div>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-center p-3 text-5xl">
                Please enter the city name
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
