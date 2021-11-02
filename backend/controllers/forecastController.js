const { StatusCodes } = require('http-status-codes');
const forecastService = require('../services/forecastService');

const createForecast = async (req, res) => {
  try {
    const { city, hours, status } = req.body;
    const resposta = await forecastService.createForecast({ city, hours, status });
    console.log(resposta)
    if (resposta.err) return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(resposta);
    return res.status(StatusCodes.CREATED).json(resposta);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Aconteceu um erro ao cadastrar' });
  }
};

const getAllRain = async (req, res) => {
  try {
    const forecast = await forecastService.getAllRain();
    return res.status(StatusCodes.OK).json({ forecast });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Aconteceu um erro ao buscar as previsões' });
  }
};

module.exports = { createForecast, getAllRain };
