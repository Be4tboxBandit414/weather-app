import {useState, useEffect, useRef} from 'react'
import './App.scss';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState()
  const zipRef = useRef(null)
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setWeatherData(res)
      setLoading(false)
    })
  }, [])

  const getTemp = (event) => {
    event.preventDefault()
    let {value} = zipRef.current
    setLoading(true)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${value},us&appid=709847967f5e54b97308c1b2cae4dee5`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else if (res.status === 404) {
        return Promise.reject('No City Found')
      } else {
        return Promise.reject(`Some other error: ${res.status}` )
      }
    })
    .then(res => {
      setWeatherData(res)
      setLoading(false)
    })
    .catch(err => {
      alert('Please provide correct 5 digit zip code')
      setLoading(false)
    })
    event.target.reset()
  }

  const convertTemp = (kelvin) => {
    const temp = Math.round(((kelvin-273.15)*1.8)+32)
    return temp
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
          <div className="description">
            {weatherData.weather[0].description}
          </div>
        </div>
      <div className="main-temp"> 
        {convertTemp(weatherData.main.temp)}&#176;
      </div>
      <div>
        <div className="range-container">
            <div className="temp-min">
              {convertTemp(weatherData.main.temp_min)}&#176;
            </div>
            <div className="temp-max">
              {convertTemp(weatherData.main.temp_max)}&#176;
            </div>
        </div>
      </div>
      <hr></hr>
      <form onSubmit={getTemp}>
        <div className="zip-label">
          Zip Code:
        </div>
        <div>
          <input type="text" id="zipcode" ref={zipRef} />
          <button className="update-btn" onSubmit={getTemp}>Update</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
