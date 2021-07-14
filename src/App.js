import { useState } from "react"
import moment from 'moment'
import WeekHour from './components/WeekHour'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const apiKey = "8c1df0f9fe108f87ff658f63fc03d78a";

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState('')
  const [weatherWeek, setWeatherWeek] = useState()
  const [weatherHour, setWeatherHour] = useState()
  const getTime = () => {
    let now;
    if (typeof weather.main === "undefined") {
      now = moment();
    } else {
      now = moment().utcOffset(weather.timezone / 60);
    }
    return `${now.format('HH:mm:ss')}`
  }
  const getDate = () => {
    const now = moment();
    return `${now.format('dddd')} ${now.format('MMMM')} ${now.format('d')}`
  }
  const [time, setTime] = useState()
  const [date, setDate] = useState(getDate())

  const timingInterval = setInterval(() => {
    setTime(getTime(), getDate())
    clearInterval(timingInterval);
  }, 1000);

  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          setQuery("");
          setWeather(data);
          setTime(getTime(), getDate())
        })

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          setWeatherHour(data.list);
        })

        fetch(`http://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon=1&addressdetails=1`)
        .then(res => res.json())
        .then((data) => {
          return {lat:data[0].lat,lon:data[0].lon}
        }).then(v=>{
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${v.lat}&lon=${v.lon}&units=metric&appid=${apiKey}`)
          .then(res => res.json())
          .then((data) => {
            setWeatherWeek(data.daily);
          })
        })
    }
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div>
          <div className="search_wrapper">
            <input
              onKeyUp={getWeather}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div>
              <h3>{weather.name}</h3>
              <h1><span className="temp">{Math.floor(weather.main.temp)}</span></h1>
              <h5>{weather.weather[0].main}</h5>
              <h4>{time}</h4>
              <h4>{date}</h4>
              <h5>H: {Math.floor(weather.main.temp_max)} L: {Math.floor(weather.main.temp_min)}</h5>
            </div>
          </div>
        ) : (
          <h2>search for location</h2>
        )}


        {typeof weatherHour !== "undefined" ? (
         <WeekHour
         currrentData={weatherHour}
           containerClass="hours_container"
           titleClass="hours_title"
           wrapperClass="hours_wrapper"
           viewName="h o u r"
         ></WeekHour>
        ) : (
          <span></span>
        )}

{typeof weatherWeek !== "undefined" ? (
           <WeekHour
              containerClass="weekdays_container"
              titleClass="weekdays_title"
              wrapperClass="weekdays_wrapper"
              viewName="w e e k"
              currrentData={weatherWeek}
            ></WeekHour>
        ) : (
          <span></span>
        )}
      </main>
    </div>
  )
}
export default App;