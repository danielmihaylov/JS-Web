import React from 'react';


const CurrencyDisplay = (props) => {
    return (
        <div>
            {props.name.toUpperCase()}
            <input
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            type="number" />
        </div>
    );
};



export default CurrencyDisplay;
