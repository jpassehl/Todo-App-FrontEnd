import React, { Component } from 'react' //you need this imporant wherever you use JSX
import AuthenticationService from './AuthenticationService'


class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

            username: 'Jacqueline',
            password: '',
            loginFailed: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    render() {
        return (
            <div>
                <h1> Login </h1>
                <div className ="container">
                {this.state.loginFailed ? <div className="alert alert-warning"> 'Invalid Credential'</div> : ''}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                &nbsp;Password : <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                &nbsp;<button className= "btn btn-success" onClick={this.loginClicked}>Login </button>
                </div>
            </div>
        )
    }
    //Event Handlers

    //generic event handler fo any input element
    handleInputChange(event) {
        this.setState(
            {
                //username: event.target.value
                [event.target.name]: event.target.value
            }
        )
    }
    /* //whenever username's value changes, update the state.
    passwordChange(event){
            console.log(event.target.value);
            this.setState({password: event.target.value})
        } */

    loginClicked() {
        // only valid conditions = in28mintues, dummy
        if (this.state.username === 'Jacqueline' && this.state.password === 'dummy') {
            //console.log('Sucessful');

            //put something in session storage
            AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);

            //redirect to welcome page w/ router:
            this.props.history.push(`/welcome/${this.state.username}`)

            //this.setState({loginFailed:false})
        }
        else {
            //console.log('Failed');
            this.setState({ loginFailed: true })
        }
        console.log(this.state)
    }
}

export default LoginComponent;