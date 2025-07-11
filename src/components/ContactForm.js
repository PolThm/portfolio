import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class ContactForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://pol-thomas.com/sendMail.php",
      data: this.state
    }).then((response)=> {
      if (response.data.status === 'success') {
        this.closeModalContact();
        this.resetForm();
      } else if (response.data.status === 'fail'){
        toast.error("Oops, message not sent...");
      }
    })
  }

  resetForm() {
    this.setState({name: '', email: '', message: ''})
  }

  closeModalContact = () => {
    this.props.sendSuccessNotification();
    this.props.closeModalContact(true);
  };

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  render() {
    return(
      <div className="contactForm">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="name-mail">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name}
                     onChange={this.onNameChange.bind(this)}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                     value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-secondary btnContactForm">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
