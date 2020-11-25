import {useState, useEffect} from 'react'
import './App.scss';

function App() {
  const [weatherData, setWeatherData] = useState()
 useEffect(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=df4bf30124677a20271799a99e0df13b')
  // fetch('https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5')
  .then(res => res.json())
  .then(res => {
    console.log(res)
    setWeatherData(res)
  })
 }, [])


  return (
    <div className="App">
      <div className="app-container">
        <div className="location-container">
        <div className="city">
          {weatherData.name}
        </div>
        <div className="weather-icon">
          <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={`${weatherData.weather[0].description}`}
          />
        </div>
        <div>
        {weatherData.weather[0].description}
      </div>
      </div>
      <div>
        {weatherData.main.temp} &#176;
      </div>
      <div>
        <div className="range-container">
            <div className="temp-min">
              {weatherData.main.temp_min} &#176;
            </div>
            <div className="temp-max">
              {weatherData.main.temp_max} &#176;
            </div>
        </div>
      </div>
      <hr></hr>
      </div>
    </div>
  );
}

export default App;
