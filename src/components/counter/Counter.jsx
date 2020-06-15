import React, { Component } from 'react'; //you need this imporant wherever you use JSX  
import './Counter.css'

import CounterButton from './counter-button/CounterButton';

class Counter extends Component {

/*   constructor() {
    super(); //in JavaScript, you need to call the super method before you call the "this"
    //you can define a JavaScript object inside this.state
    this.state = {
      counter: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this); //allows you to use "this" inside incrementCounter()
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  } */

  render() {
    return (
      //This is JSX Syntax - how does this acode get converted to JavaScript? 
      //With create react app, comes Babel. it converts JSX code into JavaSCript.
      //Note: For custom componets you have to start with a capital letter name
      <div className="Counter">
        <CounterButton by={1} incrementMethod={this.incrementCounter} decrementMethod={this.decrementCounter}></CounterButton>
        <CounterButton by={5} incrementMethod={this.incrementCounter} decrementMethod={this.decrementCounter}></CounterButton>
        <CounterButton by={10} incrementMethod={this.incrementCounter} decrementMethod={this.decrementCounter}></CounterButton>
        <span className="count">{this.state.counter}</span>
        <div><button className ="reset" onClick={this.resetCounter}>Reset</button></div>
      </div>
    );
  }
  resetCounter(){
    this.setState(
         {counter: 0} // reset counter to 0
    );
  }

  //need to bind method to the class to be able to use "this" here
  incrementCounter(by) {
    //console.log(`incrementCounter in  parent: ${by}`);

    //pass in an object with the updated value
    //arrow funciton takes prevState as a parameter and gets the counter value from the prevState. This is easier to read
    this.setState(
      (prevState) => {
      return {counter: prevState.counter + by} // return the object directly
    }
    ); 
  }
  decrementCounter(by) {
    //console.log(`incrementCounter in  parent: ${by}`);

    //pass in an object with the updated value
    //arrow funciton takes prevState as a parameter and gets the counter value from the prevState. This is easier to read
    this.setState(
      (prevState) => {
      return {counter: prevState.counter - by} // return the object directly
    }
    ); 
  }
}

export default Counter;