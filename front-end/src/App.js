import React, { useState, useEffect } from 'react';
import { getCityName, getWeather } from './service/Api';

import './App.css';

function App() {
  const [location, setLocation] = useState(false);
  const [nameCity, setNameCity] = useState(false);
  const [weather, setWeather] =useState(false);

  const handleChange = ({ target: { value } }) => {
    setNameCity(value);
  };

  const handleSubmit = async () => {
    const data = await getCityName(nameCity);
    setWeather(data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      getWeather(latitude, longitude).then((data) => setWeather(data));
      setLocation(true);
    });
  }, []);

  if (!location) return <p>Você precisa habilitar a localização no browser!</p>;
  if (!weather) return (
    <div className="flex items-center justify-center space-x-2 animate-pulse m-60">
      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
    </div>
  ); 

  return (
    <div className="App xl:px-20 px-6 py-20 xl:mx-auto xl:container">
      <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12"> 
        Clima na sua localidade: 
        <h2 className="text-yellow-500"> { weather['weather'][0]['description'] } </h2>
      </h1>
      <div className="flex flex-row justify-center m-6">
        <input id="city" onChange={handleChange} className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-900 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Nome da cidade" />
        <button type="button" className="ml-1 bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-1 px-4 border border-yellow-500 hover:border-transparent rounded" onClick={() => handleSubmit()}>:D</button>
      </div>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img src="https://i.ibb.co/KjrPCyW/map.png" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" alt=""/>
        <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" alt="" />
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 rounded">
            <p className="text-3xl font-semibold text-gray-800">{ weather['main']['temp'] }°</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-yellow-600">Temperatura atual</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12 rounded">
            <p className="text-3xl font-semibold text-gray-800">{ weather['main']['temp_max'] }°</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-yellow-600">Temperatura máxima</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24 rounded">
            <p className="text-3xl font-semibold text-gray-800">{ weather['main']['temp_min'] }°</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-yellow-600">Temperatura minima</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full dark:bg-gray-900 sm:absolute relative z-20 md:mt-0 sm:-mt-0 mt-4 top-0 xl:mr-56 sm:mr-24 rounded">
            <p className="text-3xl font-semibold text-white">{ weather['main']['humidity'] }%</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-yellow-600">Umidade da localidade</p>
        </div>
      </div>
    </div>
  );
}

export default App;
