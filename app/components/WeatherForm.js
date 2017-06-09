import React, {Component} from 'react';

import '../styles/_weather-form.scss';

const WeatherForm = (props) => {
  return (
    <div className="weather-form">
      <h2 className="weather-form__title">Enter a city</h2>
      <form name="weather" onSubmit={props.onCitySubmission}>
        <input
          type="text"
          className='weather-form__input'
          placeholder="Enter city name"
          onChange={props.onCityUpdate} />

        <button
          type="button"
          className="weather-form__btn btn"
          onClick={props.onCitySubmission}>

          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;