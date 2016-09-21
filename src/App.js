import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { Link } from 'react-router';

const App = ({contacts}) => (
  <div>
    <header>
      <Link to="/new">New Contact</Link>
    </header>
    <div>
      {contacts.map((contact) => {
        <p key={contact}>{contact}</p>
      })}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  contacts: state
});

export default connect(mapStateToProps)(App);
