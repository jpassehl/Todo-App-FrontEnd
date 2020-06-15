

import React, { Component } from 'react' //you need this imporant wherever you use JSX
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService' 
import moment from 'moment'

/*React has a pre-defined lifecycle for every component, when its intilzied the constructor is the first thing called. Whenever somthing in the component changes,
Whenver a state in the component changes and the view needs to be udated, the render() method will be called*/

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                //initally set this to empty
/*               { id: 1, description: 'Do Laundry', done: false, targetDate: new Date() },
                { id: 2, description: 'Get Packages', done: false, targetDate: new Date() },
                { id: 3, description: 'Make Dinner', done: false, targetDate: new Date() } */
            ],
            message: ''
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }
    /*called when the component is loaded for the first time and shown on the browser. Called immediately afer it is mounted ( ouputting the
    virtual representation of a component into the browser). Typically it is best practice not to the inital API call directly in the contructor, because
    if you do then the state will not be initalized until the API call is completed.*/
    componentDidMount(){
      console.log('componentDidMount');
      this.refreshTodos();

    }
    deleteTodoClicked(id) {
        console.log('delete '+ id);
        let username = AuthenticationService.getLoggedInUser();
        //console.log(id+ " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState(
                        {
                            message: `Delete of todo ${id} was sucessful`
                        }
                    )
                    this.refreshTodos();
                }
            )
    }
    updateTodoClicked(id) {
        console.log('update '+ id);
        this.props.history.push(`/todos/${id}`)
    }
    addTodoClicked(){
        //console.log('create todo');
        this.props.history.push(`/todos/-1`)
    }
    refreshTodos(){
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.retireveAllTodos(username)
        .then(
            response =>{
                //]console.log(response);
                this.setState({todos: response.data})
            }
        )
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th> Update </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Curly braces below indicate that this chunck of code should repeat */}
                            {
                                /* loop over todos, and do the following code for them. arrow function shows how each element is shown*/
                                this.state.todos.map(
                                    todo =>
                                        <tr key = {todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() =>this.updateTodoClicked (todo.id)}>Update</button></td> 
{/*                                             <td><button className="btn btn-warning" onclick={this.deleteTodoClicked}>Delete</button></td> needs to be an arrow function in order to pass a param*/} 
                                            <td><button className="btn btn-warning" onClick={() =>this.deleteTodoClicked (todo.id)}>Delete</button></td> 
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className = "row" >
                        <button className = "btn btn-success" onClick={this.addTodoClicked}>Add </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;