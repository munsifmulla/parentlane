import React, { Component } from 'react';
import styles from './style.scss';

class UserComponent extends Component{
  render(){
    return (
      <div>
        <div className={styles['image']+" "+styles['']}></div>
        <div className={styles['image']+" "+styles['grey']}></div>
        <img src="/app/images/AAE.jpg" alt=""/>
      </div>
    )
  }
}
export default UserComponent;
