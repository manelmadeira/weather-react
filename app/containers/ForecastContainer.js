import React, {Component} from 'react';

import Forecast from '../components/Forecast';
import LoadingSpinner from '../components/LoadingSpinner';

import { getYahooWeather, setWeatherIcon } from '../utils/yahooWeatherService';


class ForecastContainer extends Component {
  constructor(props) {
    super(props);

    const { params } = this.props.match;

    this.state = {
      loading: true,
      forecast: null,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.setState({
      loading: true,
      city: params.id,
    });

    this.getWeather(params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.match;

    this.setState({
      loading: true,
      city: params.id,
    });

    this.getWeather(params.id);
  }

  getWeather(city) {
    getYahooWeather(city)
      .then((forecast) => {
        let item = null;
        let units = null;
        let location = null;
        if (forecast) {
          item = forecast.channel.item;
          units = forecast.channel.units;
          location = forecast.channel.location;
        }

        this.setState({
          loading: false,
          forecast: item,
          city: location ? `${location.city}, ${location.country}` : city,
          units,
        });
      });
  }

  render() {
    const { city, loading, forecast, units } = this.state;

    return (
      <div className="forecast-container">
        {
          loading
          ? <LoadingSpinner />
          : <Forecast
              units={units}
              city={city}
              info={forecast} />
        }
      </div>
    );
  }
}

export default ForecastContainer;