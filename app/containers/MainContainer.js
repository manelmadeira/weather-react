import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <main className="main">
        {this.props.children}
      </main>
    );
  }
}

export default MainContainer;