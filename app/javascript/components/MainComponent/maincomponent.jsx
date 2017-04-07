import React, { Component } from 'react';
import render from 'react-dom';
import { Router, Route} from 'react-router';
import styles from './style.scss';

import Header from '@components/HeaderComponent'
import UserComponent from '@components/UserComponent'
import HomeComponent from '@components/HomeComponent'

class MainComponent extends Component{
  render(){
    return (
        <div>
            <Header/>
            <div>
                {this.props.children}
            </div>
        </div>
    )
  }
}
export default MainComponent;
