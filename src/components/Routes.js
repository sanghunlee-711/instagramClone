import React from'react';
import{
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LogIn from '../pages/Login/Login'
import Main from '../pages/Main/Main'

class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path = "/login" component={LogIn}/>
                    <Route exact path = "/" component ={Main}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;