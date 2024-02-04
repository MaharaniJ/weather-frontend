import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setHistory] = useState([]);
  

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = async () => {
    if (search !== "") {
      try {
        const response = await axios.get(
          `https://weatherapp-qzrz.onrender.com/api/weather?search=${search}`
          // `${apiUrl}?q=${search}&appid=${apiKey}`
        );
        console.log(response);

        if (history.indexOf(search) === -1) {
          setHistory([...history, search]);
        }

        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const historySearchHandler = async (data) => {
    setSearch(data);

    if (data !== "") {
      try {
        const response = await axios.get(
          `https://weatherapp-qzrz.onrender.com/api/weather?search=${data}`
          // `${apiUrl}?q=${data}&appid=${apiKey}`
          );
          console.log("second res",response)

        if (history.indexOf(data) === -1) {
          setHistory([...history, data]);
        }

        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />

      <Result
        weatherData={weather}
        historyData={history}
        historySearch={historySearchHandler}
      />
    </div>
  );
}

export default Main;
