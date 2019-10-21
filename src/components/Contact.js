import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        status: false
      };
  }  

  render() {
    return(
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={`pict of ${this.props.name}`}/>
        <div>
          <p className="name"> {this.props.name}</p>

          <div   onClick={event => {
              const newStatus = !this.state.status;
              this.setState({status: newStatus}); }}                   
            className="status">
                  
            <p className ="status-text">
            <div className={this.state.status ? 'status-online' : 'status-offline'}/>
            {this.state.status ? "online" : "offline"}</p>
            </div>
            
        </div>
      </div>
);
}}

export default Contact;