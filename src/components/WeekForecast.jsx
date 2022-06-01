import s from './WeeksForecast.module.css';
import WeatherMini from './WeatherMini/WeatherMini';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Loader from '../loader/Loader';

const WeekForecast = (props) => {
    return(
        <>
        <div className = {s.weeksForecast}>
            {props.week.length > 0 
            ? 
                <div className="container">
                    <div className = {s.title}>
                        { props.city }
                    </div>

                    {props.week.map( day => {
                    if( !(day.data.length > 0) || ( day.day == new Date().toLocaleString("ru", { weekday: "long" }) ) ) return;
                    return(
                        <div className = {s.day}>
                            <div className = {s.dayTitle}>
                                {day.day}
                            </div>
                            <div className = {s.dayItems}>
                                <Swiper
                                spaceBetween = {50} 
                                slidesPerView = {1}
                                initialSlide = {4}
                                breakpoints = { {
                                    600 : {slidesPerView:2}
                                    }}>
                                    {day.data.map( (item) =>
                                    <SwiperSlide >
                                        <WeatherMini data = {item} /> 
                                    </SwiperSlide> 
                                    )}
                                </Swiper>    
                            </div>  
                        </div> ) 
                    })
                    }
            </div>
            : <Loader /> }
        </div>
        
        </>
    )
}

export default WeekForecast;