import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./comonents/Register";
import CountrySelectionDropdown from "./comonents/DropdownCountry";
import Weathercard from "./comonents/Weathercard";
import Main from "./comonents/index/main";


function App() {

  
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/dropdown" element={<CountrySelectionDropdown />} />
        <Route path="/weathercard" element={<Weathercard />} />
          
      </Routes>
    </div>
  );
}

export default App;
