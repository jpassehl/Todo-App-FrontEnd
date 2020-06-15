import React, { Component } from 'react' //you need this imporant wherever you use JSX
import  {Link} from 'react-router-dom' //for react-router-dom
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService'

class HeaderComponent extends Component {
    render() {
        const userLoggedIn = AuthenticationService.isUserLoggedin();
        //console.log(userLoggedIn);
        //console.log('test');

        return (
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "https://courses.in28minutes.com/" className ="navbar-brand">in28mintues</a></div>
                    <ul className = "navbar-nav">
                        {userLoggedIn && <li><Link className= "nav-link" to ="/welcome/Jacqueline">Home</Link></li>}
                        {userLoggedIn && <li><Link className= "nav-link" to ="/todos">Todos</Link></li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        {!userLoggedIn && <li><Link className= "nav-link" to ="/login">Login</Link></li>}
                        {userLoggedIn && <li><Link className= "nav-link" to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
} 
/*To ensure that header menus are updated whenever the router is called we need to wrap HeaderComponent with a call to withRouter()*/
export default withRouter(HeaderComponent);