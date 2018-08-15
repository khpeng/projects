import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City.." />
          <input type="text" name="country" placeholder="Country.." />
          <button className="weather__search">Search </button>

        </form>
    );
  }
};
