import React, { useEffect, useState } from "react";
import "./styles.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=45823c4393035ef644ed112c1cd0a68a`;
      const response = await fetch(url);
      const resjson = await response.json();
      // console.log(resjson)
      setCity(resjson.main);
    };
    fetchApi();
  });

  return (
    <>
      <div class="container">
        <div class="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full container mt-10 md:mt-0 relative z-10 shadow-md con">
          <h2 class="text-black text-lg mb-1 font-large mx-auto title-font txt">
            Weather App
          </h2>
          <p class="leading-relaxed mx-auto text-black txt1">
            Enter City to get Temp
          </p>
          <div class="relative mb-4">
            <input
              type="search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              id="email"
              class="w-1/2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-10 mleft leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {!city ? (
            <h1 className="txt1 mleft"> Enter Valid City </h1>
          ) : (
            <div>
              <h1 className="txt1 mleft">{search}</h1>
              <h1 className="txt1 mleft">{city.temp}°C</h1>
              <i className="fas fa-bolt"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
