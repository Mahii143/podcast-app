import React from 'react';
import '../styles/component-styles/Card.css';
const Card = (props) => {
    const { image, name, speaker, type } = props.data;
    return (
        <>
            <div className="podcast-img">
                <img src={image} alt=" " />
            </div>
            <div className="podcast-name">{name}</div>
            <div className="podcast-speaker">{speaker}</div>
            <div className="podcast-type">{type}</div>
        </>
    )
}

export default Card;