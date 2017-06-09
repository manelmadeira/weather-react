import React, {Component} from 'react';

import WeatherFormContainer from './WeatherFormContainer';


class HomeContainer extends Component {
  render() {
    return (
      <section className="home">
        <WeatherFormContainer />
      </section>
    );
  }
}

export default HomeContainer;