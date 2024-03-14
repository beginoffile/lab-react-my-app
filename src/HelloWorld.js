import React, {Fragment} from 'react';
import './HelloWorld.css';


const HelloWorld = (propiedades) => {
    return (
        <Fragment>
            <hr/>
            <h1 className='h1-green'>{propiedades.msg}</h1>
        </Fragment>
    )

}

export default HelloWorld;