import React, {Component} from 'react';

import Forecast from '../components/Forecast';

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
    console.log('get weather for ', city);

    getYahooWeather(city)
      .then((forecast) => {
        let item = null;
        let units = null;
        if (forecast) {
          item = forecast.channel.item;
          units = forecast.channel.units;
        }

        console.log(item);

        this.setState({
          loading: false,
          forecast: item,
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
          ? 'Loading...'
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