import s from './Weather.module.css';

//ICONS
import cloudyDay from '../img/cloudy-day.svg';
import cloudyNight from '../img/cloudy-night.svg';
import thunder from '../img/thunder.svg';
import drizzle from '../img/drizzle.svg';
import rainy from '../img/rainy.svg';
import snow from '../img/snowy.svg';
import clearDay from '../img/day.svg';
import Loader from '../loader/Loader';

const Weather = (props) => {
    let img;
    switch (props.icon){
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
        <div className = {s.weatherBlock} onClick = { () => props.setWeekForecast( { isOpen: true, city: props.name } ) }>
            <div className = {s.weather}>
                {props.deleteCity && 
                <div className = {s.delete}>
                  <button className = {s.button} onClick = { () => props.deleteCity(props.name) } > X </button>
                </div>
                }
                <div className = {s.location}>
                    {props.name}
                </div>
                <div className = {s.mainInfo}>
                    <div className = {s.img}>
                        <img src = {img} alt=""/>
                    </div>
                    <div className = {s.temp}>
                        {Math.round(props.temp) + '°C'}
                    </div>
                </div>
                <div className = {s.weatherType}>{props.weather}</div>
                <div className = {s.feelsLike}>Ощущается как: {Math.round(props.feels_like)}°C</div>
            </div>
        </div>
    )
}

export default Weather;