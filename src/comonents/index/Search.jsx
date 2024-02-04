import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
  const searchInput = useRef();

  return (
    <div className='d-flex justify-content-center shadow-lg w-100'>
      <input
        type="search"
        value={props.searchData}
        className='border border-dark p-3 text-2xl w-75'
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button onClick={props.searchWeather} className='p-3 bg-primary text-white'>
        Search
      </button>
      <Link to="/register" className='m-3 btn btn-primary '>Add</Link>
    </div>
  );
};

export default Search;
