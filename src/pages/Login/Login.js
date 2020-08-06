import React from 'react';
import Content from './Content'
import Nav from './Nav'

import './Login.scss';





class Login extends React.Component {
    render(){
        return (
        <div className ="sassWrapper">     
            <div className="mainContentWrapper">
                    <section>
                        <img alt = ""className="MainImage" src="../images/leftiamge.png" />
                    <Content />
                    </section>
                    <Nav />
            </div>
        </div>
        )
    }
}

export default Login;
