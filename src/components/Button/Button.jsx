import React from 'react';
import './Button.module.css'

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button;