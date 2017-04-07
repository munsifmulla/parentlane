import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Main from '@components/MainComponent';
import User from '@components/UserComponent';
import Home from '@components/HomeComponent';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <Route path="/user" component={User}/>
                    <Route path="/home" component={Home}/>
                </Route>
            </Router>
        );
    }
}

render(<App/>,document.querySelector('#app-container'));
