import React from 'react';
import '../assets/Styles/Styles.css'

export default function GridientButton(props) {
    const { handleClick, buttonText } = props;

    return (
        <button className="buttonGridient" onClick={handleClick}>{buttonText}</button>
    )
}