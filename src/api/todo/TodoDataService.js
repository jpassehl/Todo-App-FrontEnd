import axios from 'axios';
import { API_URL,JPA_API_URL } from '../../Constants';

class TodoDataService{
    retireveAllTodos(name){
        //make use of axios to make the call
        return axios.get(`${JPA_API_URL}/users/${name}/todos`); //returning a promise back
        /*The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.*/
    }
    retrieveTodo(name, id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    deleteTodo(name, id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    updateTodo(name, id, todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo) // additional  parameter here is for what should be part of the body of the request
    }
    createTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo) // additional  parameter here is for what should be part of the body of the request
    }
}
export default new TodoDataService()