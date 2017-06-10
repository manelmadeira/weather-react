import React, {Component} from 'react';

import '../styles/_loading-spinner.scss';

const LoadingSpinner = (props) => {
  return (
    <div className="loading">
      <i className={"loading__icon fa fa-circle-o-notch fa-spin fa-fw " + (props.small ? "fa-2x" : "fa-3x ")}></i>
      {
        !props.onlyIcon &&
          <span className="loading__text">Looking at the window...</span>
      }
    </div>
  );
};

export default LoadingSpinner;