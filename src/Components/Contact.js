import React from 'react';
import './Contact.css';

function Contact(props) {
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div>
                <h3 className= "name">{props.name}</h3>
                <div className="status">
                    <h4 className={props.online ? "status-online" : "status-offline"}></h4>
                    <h4 className="status-text">{props.online ? "online" : "offline"}</h4>
                </div>
            </div>   
        </div>
    );
}


export default Contact;