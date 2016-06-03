import React, { Component } from 'react';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';

class ContactDetailComponent extends Component {

  constructor() {
    super();
    this.state = {
      contact: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ContactActions.getContact(this.props.params.id);
    console.log('contact detail state', this.state);
  }

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.onChange);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      contact: ContactActions.getContact(nextProps.params.id)
    });
  }

  onChange() {
    this.setState({
      contact: ContactStore.getContact(this.props.params.id)
    });
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.contact.image} width="150" />
          <h1>{this.state.contact.name}</h1>
          <h3>{this.state.contact.email}</h3>
        </div>
      </div>
    );
  }
}

export default ContactDetailComponent;
