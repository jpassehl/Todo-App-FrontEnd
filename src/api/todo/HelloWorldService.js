import axios from "axios"

/*Asynchronous Call- call the service and continue doing the process.

Asynchronous pattern is a design pattern in which the call site is not blocked while waiting for the called code to finish. 
Instead, the calling thread is notified when the reply arrives.*/

class HelloWorldService{

    executeHelloWorldService(){
        //make use of axios to make the call
        return axios.get('http://localhost:8080/hello-world'); //returning a promise back
        /*The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.*/
    }
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean'); //returning a promise back
    }
    executeHelloWorldPathVarService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`); //returning a promise back
    }

}
export default new HelloWorldService()