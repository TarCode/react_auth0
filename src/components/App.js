import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';


export default class AppComponent extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('hXryApiXOTYlnwPHJDlEgBoFTB8B7WzQ', 'tarcode.eu.auth0.com');
  }

  render() {
    return (
      <div>
        <Header lock={ this.lock }/>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9}>
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
