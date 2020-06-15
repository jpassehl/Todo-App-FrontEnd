import React, { Component } from 'react'
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService' 


class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }
    onSubmit(values) {
        console.log(values);
        console.log(this.state)
        let username = AuthenticationService.getLoggedInUser();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        //if its a new todo
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo).then(() => this.props.history.push(`/todos`)) //if sucessfull redirect user to the todos page
        }
        //else it is an existing todo
        else {
            TodoDataService.updateTodo(username, this.state.id,todo).then(() => this.props.history.push(`/todos`)) //if sucessfull redirect user to the todos page
        }
    }
    validate(values){
        let errors = {}
        //console.log(values)
        if(!values.description){
            errors.description = 'Please Enter a description';
        }
        else if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters in Description'
        }
        
        if(!moment(values.targetDate).isValid){
            errors.targetDate = 'Enter a valid targetDate'
        }
        return errors;
    }
    componentDidMount(){
/*         console.log("beginning of did mount:")
        console.log(this.state); */

        //if creating a new todo - we do not want to call the service 
        if(this.state.id === -1){
            return
        }

        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.retrieveTodo(username,this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
        //.then(response => console.log(moment(response.data.targetDate).format('YYYY-MM-DD')))
       //console.log(this.state);
    }
    render() {
/*         let description = this.state.description;
        let targetDate = this.state.targetDate; */
        let {description,targetDate} = this.state; //this is called desctructering in JavaScript
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
{/*                     <Formik initialValues={{description:description, targetDate:targetDate}}> //since key and value are the same you dont have to do this*/}
                        <Formik 
                        enableReinitialize
                        initialValues={this.state} 
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange = {false} /* These values make it so the validation is only done upon clicking the save button */
                        validateOnBlur = {false}>
                        {
                            (props)=>(
                                <Form>
                                    <ErrorMessage name="description" component ="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component ="div" className="alert alert-warning"/>
                                    <fieldset className= "form-group"> 
                                        <label>Description</label>
                                        <Field className = "form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className= "form-group"> 
                                        <label>Target Date</label>
                                        <Field className = "form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className ="btn-success" type="submit"> Save </button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;