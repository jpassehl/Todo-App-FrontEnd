import React, { Component } from 'react'; //you need this imporant wherever you use JSX  
import PropTypes from 'prop-types';
import './CounterButton.css'


//Function Component - much simpler than a class component.
class CounterButton extends Component {

    /*whenever you want your component to have state:
     1. You have to define the inital state via a constructor
     2. In specific methods, we need to update the state (in incrementCounter())*/
  
     constructor(){
       super(); //in JavaScript, you need to call the super method before you call the "this"
       //you can define a JavaScript object inside this.state
/*        this.state = {
         counter: 0
       }
       this.incrementCounter = this.incrementCounter.bind(this); //allows you to use "this" inside incrementCounter()
       this.decrementCounter = this.decrementCounter.bind(this); //allows you to use "this" inside incrementCounter() */
     }
     
    render() {
      return (
        <div className="Counter">
          <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by}</button>
          <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by}</button>
    {/*       <span className="count">{this.state.counter}</span> */}
        </div>
      );
    }
    //need to bind method to the class to be able to use "this" here
/*     incrementCounter () {
      //console.log('incrementCounter');
      
      //this.state.counter++; --> Need to use setState() instead, dont mutate state directly
  
      //pass in an object with the updated value
      this.setState(
        (prevState) => {
        return {counter: prevState.counter + this.props.by}
        }
      );
      this.props.incrementMethod(this.props.by); //from the props that are passed in get the incrment method
    }
    decrementCounter () {
      //console.log('incrementCounter');
      
      //this.state.counter++; --> Need to use setState() instead, dont mutate state directly
  
      //pass in an object with the updated value
      this.setState(
        (prevState) => {
        return {counter: prevState.counter - this.props.by}
        }
      );
      this.props.decrementMethod(this.props.by); //from the props that are passed in get the incrment method
    } */
  }

  //set default for a property
CounterButton.defaultProps = {
    by: 1
  }
  //do a type constraint on a property being passed in
  CounterButton.propTypes = {
    by: PropTypes.number
  }

  export default CounterButton;