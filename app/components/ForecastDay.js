import React, {Component} from 'react';
import moment from 'moment';

import { setWeatherIcon } from '../utils/yahooWeatherService';
import '../styles/_forecast-day.scss';


class ForecastDay extends Component {
  render() {
    const { item, units } = this.props;

    return (
      <div className="forecast-day">
        <div className="forecast-day__icon">
          <i className={setWeatherIcon(item.code)}></i>
        </div>
        <span className="forecast-day__date">
          {
            item.temp
            ? moment(item.date, 'ddd, DD MMM YYYY hh:mm A').format('LLL')
            : item.date
          }
        </span>

        {
          item.temp &&
          <span className="forecast-day__temp">
            temp: { item.temp }º{ units.temperature }
          </span>
        }

        {
          item.low &&
          <span className="forecast-day__temp">
            min temp: { item.low }º{ units.temperature }
          </span>
        }

        {
          item.high &&
          <span className="forecast-day__temp">
            max temp: { item.high }º{ units.temperature }
          </span>
        }

      </div>
    );
  }
}

export default ForecastDay;