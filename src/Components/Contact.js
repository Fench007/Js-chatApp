import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }
    
    render() {
    return (
        <figure>
            <div className='Contact'>
            <img className='avatar' src={this.props.avatar} alt={this.props.name}/>
                <div className='status-text'>
                    <h4 className='name'>{this.props.name}</h4>
                    <div className='status' 
                        onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline })
                        }}>
                        <p className='status-text'>{this.state.online ? 'Online' : 'Offline'}</p>
                        <p className={this.state.online ? 'status-online' : 'status-offline'}></p>
                    </div>
                </div>
            </div>
        </figure>
    )
    } 
}

export default Contact;