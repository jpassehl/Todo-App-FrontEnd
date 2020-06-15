import React, { Component } from 'react' //you need this imporant wherever you use JSX

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
            </div>
            </>
        )
    }
} 

export default LogoutComponent;