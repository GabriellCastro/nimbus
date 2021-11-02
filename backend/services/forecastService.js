const { exists, getAll, create } = require('../models/forecastModel');

const getAllRain = async () => {
  const rain = await getAll();
  if (rain.length < 1) return { err: { code: 'null_data', message: 'Register rain forecast' } }
  return rain;
};

const createForecast = async ({ city, hours, status }) => {
  const rainExists = await exists({ city });
  if (rainExists) return { err: { code: 'invalid_data', message: 'Forecast already exists' } };
  if (!city || !hours || !status) return { err: { code: 'invalid_data', message: 'Some field is null' } }
  return create(city, hours, status);
};

module.exports = { getAllRain, createForecast };
