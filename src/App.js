import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

const App = ({contacts}) => (
  <div>
    {contacts.map((contact) => {
      <p key={contact}>{contact}</p>
    })}
  </div>
);

const mapStateToProps = (state) => ({
  contacts: state
});

export default connect(mapStateToProps)(App);
