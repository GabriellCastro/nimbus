import axios from 'axios';

export const getWeather = async (lat, long) => {
  const res = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: long,
      appid: process.env.REACT_APP_KEY,
      lang: 'pt',
      unites: 'metric'
    }
  });
  return res.data;
};

export const getCityName = async (name) => {
  const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}`, {
    params: {
      q: name,
      appid: process.env.REACT_APP_KEY,
      lang: 'pt',
      unites: 'metric'
    }
  });
  return res.data;
};
