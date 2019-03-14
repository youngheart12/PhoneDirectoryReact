import React from 'react';
import './header.css';
const header=(props)=>
{
        return (
            <div className="HeaderMain">
            <h3>{props.name}</h3>
            </div>
        );
    }
export default header;