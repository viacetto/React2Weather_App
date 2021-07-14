import {
    faSun,
    faCloudSun,
    faCloud,
    faCloudShowersHeavy,
    faCloudSunRain,
    faPooStorm,
    faSnowflake,
    faSmog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function WeatherIcon({ desc }) {
    switch (desc) {
        case "clear sky":
            return <FontAwesomeIcon icon={faSun} />
            break;
        case "few clouds":
            return <FontAwesomeIcon icon={faCloudSun} />
            break;
        case "scattered clouds":
            return <FontAwesomeIcon icon={faCloud} />
            break;
        case "broken clouds":
            return <FontAwesomeIcon icon={faCloud} />
            break;
        case "shower rain":
            return <FontAwesomeIcon icon={faCloudShowersHeavy} />
            break;
        case "rain":
            return <FontAwesomeIcon icon={faCloudSunRain} />
            break;
        case "thunderstorm":
            return <FontAwesomeIcon icon={faPooStorm} />
            break;
        case "snow":
            return <FontAwesomeIcon icon={faSnowflake} />
            break;
        case "mist":
            return <FontAwesomeIcon icon={faSmog} />
            break;
        default:
            return <FontAwesomeIcon icon={faCloud} />
            break;
    }
};

export default WeatherIcon;