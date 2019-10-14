import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: false,
        };
    }
    render() {
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <h3 className= "name">{this.props.name}</h3>
                    <div className="status">
                        <h4 className={this.props.online ? "status-online" : "status-offline"}></h4>
                        <h4 className="status-text">{this.props.online ? "online" : "offline"}</h4>
                        <span className={this.state.favorite ? 'is-favorite' : ''}
                        onClick={event => {
                            const newStatus = !this.state.status;
                            this.setState({ status: newStatus });
                        }}
                        >
                        </span>
                    </div>
            </div>   

        )
    };
}

export default Contact;