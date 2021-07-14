import moment from "../../node_modules/moment";
import WeatherIcon from "./WeatherIcon";

function MiniWeather({ elData, titleClass }) {
    const temp = typeof elData.main !== "undefined" ? elData.main.temp : elData.temp.day;
    const period = titleClass === "hours_title" ? moment.unix(elData.dt).format('HH') : moment.unix(elData.dt).format('ddd');
    return (
        <div>
            <h5>{period}</h5>
            <WeatherIcon desc={elData.weather[0].description}></WeatherIcon>
            <h5><span className="tempXs">{Math.floor(temp)}</span></h5>
        </div>
    )
}
export default MiniWeather;