import axios from 'axios';

const QUERY = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"%s\") and u='c'";
const URL = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";

/**
 * Build URL to search weather information on Yahoo API
 *
 * @param  {String} search The text to search
 * @return {String} The URL to do the API request
 */
function buildRequest(search) {
    return URL + QUERY.replace("%s", search);
}

export const getYahooWeather = (city) => {
  return axios.get(buildRequest(city))
    .then((response) => {
      const data = response.data;
      return data.query.results;
    })
    .catch((err) => {
      console.log('Cant get weather from Yahoo.');

      throw err;
    });
};

export const setWeatherIcon = (condid) => {

  switch(condid) {
    case '0': var icon  = 'wi wi-tornado';
    break;
    case '1': var icon  = 'wi wi-storm-showers';
    break;
    case '2': var icon  = 'wi wi-tornado';
    break;
    case '3': var icon  = 'wi wi-thunderstorm';
    break;
    case '4': var icon  = 'wi wi-thunderstorm';
    break;
    case '5': var icon  = 'wi wi-snow';
    break;
    case '6': var icon  = 'wi wi-rain-mix';
    break;
    case '7': var icon  = 'wi wi-rain-mix';
    break;
    case '8': var icon  = 'wi wi-sprinkle';
    break;
    case '9': var icon  = 'wi wi-sprinkle';
    break;
    case '10': var icon  = 'wi wi-hail';
    break;
    case '11': var icon  = 'wi wi-showers';
    break;
    case '12': var icon  = 'wi wi-showers';
    break;
    case '13': var icon  = 'wi wi-snow';
    break;
    case '14': var icon  = 'wi wi-storm-showers';
    break;
    case '15': var icon  = 'wi wi-snow';
    break;
    case '16': var icon  = 'wi wi-snow';
    break;
    case '17': var icon  = 'wi wi-hail';
    break;
    case '18': var icon  = 'wi wi-hail';
    break;
    case '19': var icon  = 'wi wi-cloudy-gusts';
    break;
    case '20': var icon  = 'wi wi-fog';
    break;
    case '21': var icon  = 'wi wi-fog';
    break;
    case '22': var icon  = 'wi wi-fog';
    break;
    case '23': var icon  = 'wi wi-cloudy-gusts';
    break;
    case '24': var icon  = 'wi wi-cloudy-windy';
    break;
    case '25': var icon  = 'wi wi-thermometer';
    break;
    case '26': var icon  = 'wi wi-cloudy';
    break;
    case '27': var icon  = 'wi wi-night-cloudy';
    break;
    case '28': var icon  = 'wi wi-day-cloudy';
    break;
    case '29': var icon  = 'wi wi-night-cloudy';
    break;
    case '30': var icon  = 'wi wi-day-cloudy';
    break;
    case '31': var icon  = 'wi wi-night-clear';
    break;
    case '32': var icon  = 'wi wi-day-sunny';
    break;
    case '33': var icon  = 'wi wi-night-clear';
    break;
    case '34': var icon  = 'wi wi-day-sunny-overcast';
    break;
    case '35': var icon  = 'wi wi-hail';
    break;
    case '36': var icon  = 'wi wi-day-sunny';
    break;
    case '37': var icon  = 'wi wi-thunderstorm';
    break;
    case '38': var icon  = 'wi wi-thunderstorm';
    break;
    case '39': var icon  = 'wi wi-thunderstorm';
    break;
    case '40': var icon  = 'wi wi-storm-showers';
    break;
    case '41': var icon  = 'wi wi-snow';
    break;
    case '42': var icon  = 'wi wi-snow';
    break;
    case '43': var icon  = 'wi wi-snow';
    break;
    case '44': var icon  = 'wi wi-cloudy';
    break;
    case '45': var icon  = 'wi wi-lightning';
    break;
    case '46': var icon  = 'wi wi-snow';
    break;
    case '47': var icon  = 'wi wi-thunderstorm';
    break;
    case '3200': var icon  = 'wi wi-cloud';
    break;
    default: var icon  =  'wi-cloud';
    break;
  }

  return icon;
}
