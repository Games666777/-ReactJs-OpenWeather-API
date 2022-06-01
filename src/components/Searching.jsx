import s from './Searching.module.css';

const Searching = (props) => {
    return(
        <div className = {s.modal}>
            <div className = {s.modal__inner}>
                <form onSubmit = {(e) => {
                    e.preventDefault();
                    let city = e.target.cityName.value.trim();
                    if(city){
                        props.getWeatherByName(city);
                        e.target.cityName.value = '';
                        props.setIsSearching(false);
                    }
                }} className = {s.form}>
                    <input name = "cityName" type="text" className = {s.input} placeholder = "Введите место..."/>
                    <button type = 'submit' className = {s.button} >Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default Searching;