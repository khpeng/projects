import  React from 'react';
import  Tittles from './component/Tittles';
import Form from './component/Form';
import Weather from './component/Weather';
import MapContainer from './component/MapContainer';

const API_KEY = "4abcd96f0a407a8cdba475a207880a63";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        lat: data.coord.lat,
        lon: data.coord.lon,
        error: ""
      });
      /* set box to the top*/



    } else {
        this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please fill in the empty field."
      });
    }
  }

  render() {
    return (
      <div>
          <div className="wrapper">
          
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Tittles />

                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>

                    <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      lat={this.state.lat}
                      lon={this.state.lon}
                      error={this.state.error}
                        />

                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default App;
