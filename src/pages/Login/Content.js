import React from'react';
import {withRouter} from 'react-router-dom';
// import {Link} from 'react-router-dom';

class Content extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            id: 'id:',
            pw: 'pw:',
            button: 'button',
            disabled: true,
        }

    }


    updateId =(evt)=>{
        this.setState({id:evt.target.value})
        if(this.state.id.length >=5 && this.state.pw.length>=5 && this.state.id.includes("@")){
            this.setState({disabled : false});
        }
        else{
            this.setState({disabled : true});
        }
    }
    updatePw =(e)=>{
        this.setState({pw:e.target.value})
        if(this.state.id.length >=5 && this.state.pw.length>=5 && this.state.id.includes("@")){
            this.setState({disabled : false});
        }
        else{
            this.setState({disabled: true});
        }
    }


    LoginButton = (evt)=>{
        console.log(this.state.id)
        console.log(this.state.pw)
    }
    // goToMain = ()=>{
        
    //     this.props.history.push('/');
    // }

    render(){
        return(<article>
            <div className="login">
                <div className="loginContentWrapper">
                    <img alt ='' className="instaLogo" src="../images/logo_text.png" />
                    <input 
                    onChange ={this.updateId} 
                    className="inputId" 
                    type="text" 
                    placeholder="Phone number, username, or email"/>

                    <input 
                    onChange ={this.updatePw} 
                    className="inputPw" type="text" 
                    placeholder="Password"/>

                    <button 
                    onClick = {this.LoginButton} 
                    to='/' 
                    className="loginBtn"
                    disabled={this.state.disabled}>Log In
                    </button>
                    <div className="or">
                        <div className="slashLine"></div>
                        <span>OR</span>
                        <div className="slashLine"></div>
                    </div>
                    <div className="withFacebook">
                        <div>
                            <img alt ='' className="facebookLogo" src="../images/fblogo.png"/>
                            <span>
                                Log in with Face book
                            </span>
                        </div>
                        <a href="https://facebook.com">Forgot password?</a>
                    </div>
                </div>
            </div>
            <div className="SignUpBox">
                <span>Don't have an account?
                </span>
                &nbsp;<a href="https://facebook.com">Sign Up</a>
            </div>
            <div className="getApp">
                <div>Get the app</div>
                <div className="appLogo">
                    <img alt = '' src="../images/applelogo.png"/>
                    <img alt = '' src="../images/googlelogo.png"/>
                </div>
            </div>
    </article>
        );
    }
}

export default withRouter(Content);