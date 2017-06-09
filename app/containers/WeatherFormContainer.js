import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import WeatherForm from '../components/WeatherForm';


class WeatherFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
  }

  onCityUpdate = (e) => {
    const city = e.target.value;

    this.setState({
      city,
    });
  }

  onCitySubmission = (e) => {
    e.preventDefault();

    const { city } = this.state;
    const { history } = this.props;

    console.log(city);

    if (!city) {
      // TODO: error handler
      return;
    }

    history.push(`/forecast/${city}`);
  }

  render() {
    return (
      <div className="weather-form-container">
        <WeatherForm
          onCityUpdate={this.onCityUpdate}
          onCitySubmission={this.onCitySubmission} />
      </div>
    );
  }
}

export default withRouter(WeatherFormContainer);