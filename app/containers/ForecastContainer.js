import React, {Component} from 'react';

import Forecast from '../components/Forecast';
import LoadingSpinner from '../components/LoadingSpinner';

import { getYahooWeather, setWeatherIcon } from '../utils/yahooWeatherService';

import '../styles/_forecast-container.scss';


class ForecastContainer extends Component {
  constructor(props) {
    super(props);

    const { params } = this.props.match;

    this.intervalCount = null;

    this.state = {
      loading: true,
      forecast: null,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.getWeather(params.id);
    this.setIntervalWeather(params);
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.match;

    this.getWeather(params.id);
    this.setIntervalWeather(params);
  }

  setIntervalWeather(params) {
    if (this.intervalCount) {
      clearInterval(this.intervalCount);
    }

    this.intervalCount = setInterval(
      this.getWeather.bind(this, params.id, true),
      10000
    );
  }

  getWeather(city, isReloading = false) {
    const tmpState = {};

    if (isReloading) {
      tmpState.reloading = true;
    } else {
      tmpState.loading = true;
    }

    this.setState(tmpState);

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

        const updatedState = {
          forecast: item,
          city: location ? `${location.city}, ${location.country}` : city,
          units,
        };

        if (isReloading) {
          updatedState.reloading = false;
        } else {
          updatedState.loading = false;
        }

        this.setState(updatedState);
      });
  }

  render() {
    const { city, loading, forecast, units, reloading } = this.state;

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

        {
          reloading &&
            <div className="forecast-container__reloading-wrapper">
              <LoadingSpinner
                onlyIcon={true}
                small={true} />
            </div>
        }
      </div>
    );
  }
}

export default ForecastContainer;