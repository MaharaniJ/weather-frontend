import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  const handleAddCountry = async () => {
    if (!countryName.trim()) {
      alert("Please enter a country name");
      return;
    }
    try {
      const respones = await axios.post(
        "https://weatherapp-qzrz.onrender.com/api/countries",
        {
          name: countryName,
        }
      );
      const data = respones.data;
      console.log(data);
      if (data.status === 201 || data) {
         // Country doesn't exist, you can proceed with saving or show a success message
       
        alert("Country Stored successfully");
        navigate("/dropdown");
        setCountryName("");
      } else {
        // Country already exists, set the alert message
        alert("Country updated");
      }
    } catch (error) {
      console.error("Error adding country:", error.message);
    }
  };

  return (
    <div className="container-sm mt-5 p-4 bg-primary-subtle w-50">
      <div className="mb-3 mx-auto col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter the country name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="India"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button
          onClick={handleAddCountry}
          className="btn btn-primary mt-3 d-block mx-auto"
        >
          Add Country
        </button>
      </div>
    </div>
  );
}

export default Register;
