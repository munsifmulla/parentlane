import React, { Component } from 'react';
import styles from './style.scss';

class HeaderComponent extends Component{
  render(){
    return (
      <div className={styles['header']}>
          <div className={styles['logo'] +" "+ " main-container"}>
              <a href="/">
                  <img className={styles['logo']} src="/app/images/header/logo-icon.png" alt="ParentLane"/>
                  <img className={styles['text']} src="/app/images/header/logo-text.png" alt="ParentLane"/>
              </a>
          </div>
      </div>
    )
  }
}
export default HeaderComponent;
