import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar"

import './App.css';
import MainContainer from './containers/MainContainer';
import {withRouter} from 'react-router-dom'

class App extends React.Component {

  state = {
    user_id: 1
  }

  //pass state to main container for conditional rendering routes


  setUserId= (id) => {
    this.setState({
      user_id: id 
    }, ()=> {
      this.props.history.push("/")
    })
  }

  

  render () {
    return (
      <React.Fragment>
          <Navbar user_id={this.state.user_id} setUserId={this.setUserId} routerprops={this.props.history}/>
          <MainContainer user_id={this.state.user_id} setUserId={this.setUserId}/>
      </React.Fragment>
    );
    
  } 
}

export default withRouter (App) ;
