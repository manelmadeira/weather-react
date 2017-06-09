import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import WeatherForm from '../components/WeatherForm';

const ERROR = 'Must provide a city';

class WeatherFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      error: null,
    };
  }

  onCityUpdate = (e) => {
    const city = e.target.value;

    this.setState({
      city,
      error: !city ? ERROR : null,
    });
  }

  onCitySubmission = (e) => {
    e.preventDefault();

    const { city } = this.state;
    const { history } = this.props;

    console.log(city);

    if (!city) {
      this.setState({
        error: ERROR,
      });
      return;
    }

    history.push(`/forecast/${city}`);
  }

  render() {
    const { error } = this.state;

    return (
      <div className="weather-form-container">
        <WeatherForm
          error={error}
          onCityUpdate={this.onCityUpdate}
          onCitySubmission={this.onCitySubmission} />
      </div>
    );
  }
}

export default withRouter(WeatherFormContainer);