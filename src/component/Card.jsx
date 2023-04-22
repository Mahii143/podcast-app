import React from 'react'
const Card = (props) => {
    const {project_name, project_desc} = props.data;
    return (
        <div className="card">
            <h2>{project_name}</h2>
            <p>{project_desc}</p>
        </div>
    )
}

export default Card;