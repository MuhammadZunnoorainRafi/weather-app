import React, { useContext, useState } from 'react';
import WeatherContext from '../context/WeatherContext';

function Search() {
  const { getSearchResult } = useContext(WeatherContext);
  const { error, info } = useContext(WeatherContext);
  const [text, setText] = useState('');
  const handleSearchChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Enter City Please');
    } else if (text !== '') {
      getSearchResult(text);
      // console.log(getSearchResult(text));
    }
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 mt-10">
      <form onSubmit={handleSubmit}>
        {info.message === 'city not found' && (
          <p className=" text-red-600 ">
            City not found Please write correct spelling
          </p>
        )}
        <div className="relative">
          <input
            type="text"
            value={text}
            onChange={handleSearchChange}
            placeholder="Search for Cities"
            className=" p-3 w-full pr-36 rounded-lg focus:outline-none  "
          />
          <button
            className="absolute top-0 right-0 bottom-0 px-5
          py-2 rounded-lg rounded-l-none  hover:text-white duration-150 bg-cyan-500 "
          >
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
