import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Weather = (props) => {

return (
  <div>
      { props.city && props.country && <p className="weather__key"> City:
        <span className="weather__value">{props.city },{props.country } </span></p>}
      { props.temperature && <p className="weather__key"> Temperature:
        <span className="weather__value">{(props.temperature).toFixed(1)}°C / {(Number(props.temperature)*9/5+32).toFixed(1)}°F</span></p>}
      { props.humidity && <p className="weather__key">Humidity:
        <span className="weather__value">{props.humidity }%  </span></p>}
      { props.description && <p className="weather__key">Condition:
        <span className="weather__value">{props.description }</span> </p>}
      { props.error && <p className="weather__error"> Error: {props.error} </p> }
      { props.lon &&  props.lat &&
        <div style={{ height: '30vh', width: '70vh' }}>
                <GoogleMapReact className="map__container"
                  bootstrapURLKeys={{
                    key: 'AIzaSyA5aEpNl5eZxhR0ox8BOaHHxkor6kBiT-Y',
                    language: 'en',
                  }}
                  defaultCenter={{lat: props.lat, lng: props.lon}}
                  defaultZoom={11}
                >
                </GoogleMapReact>
              </div>
      }
  </div>
);
}

export default Weather;
