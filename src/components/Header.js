import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';

export default class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      this.setState({authenticated: true});
    });
  }

  logout() {
    this.setState({authenticated: false});
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>React Contacts</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={ this.login }>Login</NavItem>
          <NavItem onClick={ this.logout }>Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
