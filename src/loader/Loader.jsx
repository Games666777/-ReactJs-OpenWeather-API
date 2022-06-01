import React from 'react';
import s from './Loader.module.css';


let Loader = () => {
    return(
        <div className = {s.wrapper}>
            <div className = {s.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
   
    )
}

export default Loader;