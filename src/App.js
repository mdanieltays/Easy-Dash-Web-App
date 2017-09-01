import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Layout, Header, HeaderRow, HeaderTabs, Drawer, Content, Tab, Tabs, Snackbar, Badge, Icon, FABButton, IconButton, Card, CardTitle, CardText, CardActions, CardMenu, Checkbox, Chip, ChipContact, DataTable, TableHeader, Table, Grid, Cell, IconToggle, Navigation, Textfield, List, ListItem, ListItemContent, ListItemAction, Radio, Switch, Menu, MenuItem, ProgressBar, RadioGroup, Slider, Spinner, Tooltip   } from 'react-mdl';

import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAY-X0TfB6VPzMPlLxfqnm5h-5Df2IG3bw",
  authDomain: "my-app-b83fa.firebaseapp.com",
  databaseURL: "https://my-app-b83fa.firebaseio.com",
  projectId: "my-app-b83fa",
  storageBucket: "my-app-b83fa.appspot.com",
  messagingSenderId: "666883461153"
};
firebase.initializeApp(config);


class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h1>{this.state.speed}</h1>
        </div>


      </div>
    );
  }
}

export default App;
