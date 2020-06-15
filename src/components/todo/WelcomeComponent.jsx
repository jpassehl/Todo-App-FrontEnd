import React, { Component } from 'react' //you need this imporant wherever you use JSX
import { Link } from 'react-router-dom' //for react-router-dom
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSucessfulResponse = this.handleSucessfulResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
        this.state={
            welcomeMessage : '',
            errorMessage: ''
        }
    }

    render() {
        /* props.match.params.name - will match with whatever is in "name" in the Route path (see 
          <AuthenticatedRoute path ="/welcome/:name" component={WelcomeComponent}/> inside TodoApp.jsx)
         Note: if you do a href- it refreshes the whole page, but if you use Link to="" it will only refresh that speicifc component in the page
        */
        return (
            <>
                <h1> Welcome! </h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick = {this.retrieveWelcomeMessage} className ="btn btn-success"> Get Welcome Message</button>
                </div>
                <div className="container">
                  {this.state.welcomeMessage!=='' ? <div className="alert alert-success"> Server Welcome Message:  {this.state.welcomeMessage}</div>: ''}
                  {this.state.errorMessage !=='' ? <div className="alert alert-danger"> Server Error Message: {this.state.errorMessage}</div>: ''}
                </div>
            </>
        )
    }
    //client to the hello world service
    retrieveWelcomeMessage(){

/*         HelloWorldService.executeHelloWorldBeanService()
        //if request suceededs
        .then(Response=>this.handleSucessfulResponse(Response)) */

        HelloWorldService.executeHelloWorldPathVarService(this.props.match.params.name)
        //if request suceededs
        .then(response=>this.handleSucessfulResponse(response))
        //if request fails
        .catch(error=> this.handleErrorResponse(error))

    }
    handleSucessfulResponse(response){
        console.log(response);
        this.setState({
            welcomeMessage: response.data.message,
            errorMessage: ''
        })
    }
    handleErrorResponse(error){
        console.log(error.response);
        this.setState({
            errorMessage: error.response.data.message,
            welcomeMessage: ''
        })
    }
}

export default WelcomeComponent;