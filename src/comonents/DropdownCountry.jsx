import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/CountryProvider";

const CountrySelectionDropdown = () => {
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of countries from the backend API
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://weatherapp-qzrz.onrender.com/api/countries/getall"
        );
        const data = response.data;
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelection = (e) => {
    const selectedValue = e.target.value;
    setSelectedCountry(selectedValue);
  };
  console.log("Selected Country:", selectedCountry);
  return (
    <div className="container mt-5 d-flex flex-column align-items-center shadow-lg p-3 p-md-5 w-75">
      <label className="me-2 mb-3">Select Country:</label>
      <select
        className="form-select me-2 w-50 w-md-25"
        onChange={handleCountrySelection}
      >
        <option value="" disabled>
          -- Select a country --
        </option>
        {countries.map((country) => (
          <option key={country._id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <p className="mt-2">You selected: {selectedCountry}</p>
      )}
      <Link className="btn btn-success mt-3" to="/weathercard">
        Get Weather
      </Link>
    </div>
  );
};

export default CountrySelectionDropdown;
