import Weather from './Weather';
import s from './Main.module.css';

const Main = (props) => {
    const isFixedClass = props.isFixed ? `${s.main} ${s.fixed}` : `${s.main}`;
    return(
        <div className = {isFixedClass}>
            <Weather 
            name = {props.currentGeo.name} 
            temp = {props.currentGeo.temp}
            weather = {props.currentGeo.weather}
            feels_like = {props.currentGeo.feels_like}
            icon = {props.currentGeo.icon}
            setWeekForecast = {props.setWeekForecast}
            />

            {props.locations.map( location =>  
                <Weather
                deleteCity = {props.deleteCity}
                name = {location.name} 
                temp = {location.temp}
                weather = {location.weather}
                feels_like = {location.feels_like}
                icon = {location.icon}
                setWeekForecast = {props.setWeekForecast} />
            )}

            {props.isSearching 
            ? <button className = {s.modalButton} onClick = { () => props.setIsSearching(false) }>-</button>
            : <button className = {s.modalButton} onClick = { () => props.setIsSearching(true) } >+</button>}
        </div>
    )
}

export default Main;