import React, {Component} from 'react';

import '../styles/_loading-spinner.scss';

const LoadingSpinner = (props) => {
  return (
    <div className="loading">
      <i className="loading__icon fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      <span className="loading__text">Looking at the window...</span>
    </div>
  );
};

export default LoadingSpinner;