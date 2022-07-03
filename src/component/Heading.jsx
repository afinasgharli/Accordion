import React from 'react';


const Heading = props =>{

    const {title,subtitle} = props;

    return(
        <div className='heading'>
            <h1 className='h1'>{title}</h1>
            <h3 className='h3'>{subtitle}</h3>
        </div>
    )
}

export default Heading;