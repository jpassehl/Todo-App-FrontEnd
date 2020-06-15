import React, { Component } from 'react' //you need this imporant wherever you use JSX
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' //for react-router-dom
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import TodoComponent from './TodoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    {/* Switch ensures only one of the Route paths is matched */}
                    <Switch>
                    <Route path = "/" exact component={LoginComponent}/>
                    <Route path = "/login" component={LoginComponent}/>
                    <AuthenticatedRoute path = "/logout" component={LogoutComponent}/>
                    <AuthenticatedRoute path ="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path ="/todos/:id" component={TodoComponent}/>
                    <AuthenticatedRoute path ="/todos" component={ListTodosComponent}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
{/*                <LoginComponent/>
               <WelcomeComponent/> */}
            </div>
        )
    }
}

// function showInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div> Invalid Credentials </div>
//     }
//}

export default TodoApp;