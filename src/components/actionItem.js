import React from 'react';
import { Link } from 'react-router-dom';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

function ActionItem({ action }) {
    return (
        <Link className="six columns" style={{textAlign:"center", marginTop: "40px"}} to={`/project/${action.id}Item`}>
            <img                 
                src={action.img}
                alt={action.title}
            />
            <label >{action.title}</label>
        </Link>
    );
}

export default ActionItem;