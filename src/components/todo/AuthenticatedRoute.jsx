import React, { Component } from 'react' //you need this imporant wherever you use JSX
import {Route,Redirect} from 'react-router-dom' //for react-router-dom
import AuthenticationService from './AuthenticationService'

class AuthenticatedRoute extends Component{

    render() {
    /* if user is logged in, redirect them to the route. Otherwise, redirect them to the login page. */
        if(AuthenticationService.isUserLoggedin()){
            //the spread syntax (...) allows you to pass the same parameters, instead of indivually defining the properties
            return <Route{...this.props}/>
            /*
              properties:
              
              <Route path = "/logout" component={LogoutComponent}/>
              <Route path ="/welcome/:name" component={WelcomeComponent}/>
              <Route path ="/todos" component={ListTodosComponent}/>
            */
        }
        else{
            return <Redirect to="/login"/>
        }
    }
}
export default AuthenticatedRoute;