import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CountryContext } from "../context/CountryProvider";
import { Link } from "react-router-dom";
import bgImage from "../assets/download.jpg";

const CountryWeatherInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedCountry } = useContext(CountryContext);

  console.log(selectedCountry);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedCountry) {
          // If selectedCountry is empty, you can handle it here
          setLoading(false);
          setError("Please select a country");
          return;
        }
        const response = await axios.get(
          `https://weatherapp-qzrz.onrender.com/api/countries/${selectedCountry}`
        );
        const result = response.data;
        console.log(result);

        if (result) {
          setData(result);
        } else {
          console.error("No country found in the response");
        }
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCountry]);

  return (
    <div className="container-fluid">
      <h1 className="mt-4">Weather Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}
      {data && (
        <div
          className="card bg-info shadow-md mx-auto mt-2 mb-5 "
          style={{
            maxWidth: "20rem",
            width: "100%",
            
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            transition: "background-size 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundSize = "110% 110%";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundSize = "100% 100%";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div className="card-body">
            <h2 className="card-title">{data.country}</h2>
          </div>

          <div className="card-body text-white">
            <div className="border-bottom pb-2 mb-3">
              <strong>Temperature:</strong> {data.weather.main.temp}°C
            </div>
            <div className="border-bottom pb-2 mb-3">
              <strong>Humidity:</strong> {data.weather.main.humidity}
            </div>
            <div className="border-bottom pb-2 mb-3">
              <strong>Pressure:</strong> {data.weather.main.pressure}
            </div>
            <div className="border-bottom pb-2 mb-3">
              <strong>Speed:</strong> {data.weather.wind.speed}
            </div>
            <div>
              <strong>Weather Description:</strong>{" "}
              {data.weather.weather[0].description}
            </div>
          </div>

          <div className="card-body mt-3">
            <Link to="/" className="btn btn-light ms-2">
              Home Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryWeatherInfo;
