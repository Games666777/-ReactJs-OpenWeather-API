import s from './WeatherMini.module.css';

// ICONS
import cloudyDay from '../../img/cloudy-day.svg';
import cloudyNight from '../../img/cloudy-night.svg';
import thunder from '../../img/thunder.svg';
import drizzle from '../../img/drizzle.svg';
import rainy from '../../img/rainy.svg';
import snow from '../../img/snowy.svg';
import clearDay from '../../img/day.svg';

const WeatherMini = (props) => {
    let img;
    switch (props.data.weather.main){
        case "Clouds": 
            img = cloudyNight
            break;

        case "Thunderstorm": 
            img = thunder;
            break;

        case "Drizzle": 
            img = drizzle;
            break;

        case "Rain": 
            img = rainy;
            break;

        case "Snow": 
            img = snow;
            break;

        case "Clear":
            img = clearDay;
            break;

        default: 
            img = clearDay;
            break;
    }
    return(
        <div className = {s.weatherMini}>
            <div className = {s.time}>
                {props.data.time}
            </div>
            <div className = {s.info}>
                <div className = {s.img}>
                    <img src = {img} alt=""/>
                </div>
                <div className = {s.temp}>
                    {Math.round(props.data.temp) + "°C"}
                </div>
            </div>
            <div className = {s.weather}>
                <p className = {s.description}>
                    {props.data.weather.description}
                </p>
                <p className = {s.description}>
                    {"Ощущается как: " + Math.round(props.data.feels_like)}
                </p>
            </div>
        </div>
    )
}

export default WeatherMini;