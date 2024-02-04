import React, { createContext, useState } from "react";

export const CountryContext = createContext();
//to store the selected country
export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
