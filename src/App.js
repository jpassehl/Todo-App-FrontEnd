import React, { Component } from 'react'; //you need this imporant wherever you use JSX
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

//FirstComponent is the default export, so this one you can directly use, but all other exports need to be in {} curly braces
//import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
/* import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent'; */

//import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

//in Javascript, any JS file is called a module (App.js is am module that contains classes)
 
//In this, App is the parent component, and FirstComponent,SecondComponent, etc are the child components.
class App extends Component {
  render() {
    return (
      //This is JSX Syntax - how does this code get converted to JavaScript? 
      //With create react app, comes Babel. it converts JSX code into JavaSCript.
      //Note: For custom componets you have to start with a capital letter name
      <div className="App">
       {/*  <Counter/> */}
       <TodoApp/>
      </div>     
    );
  }
}
/** To Create a component and display it:
 * extend the Component, implement the render method, 
 * and  include the component as part of the root component
*/

/* class LearningComponents extends Component{
  render() {
    return (
      //This is JSX Syntax - how does this code get converted to JavaScript? 
      //With create react app, comes Babel. it converts JSX code into JavaSCript.
      //Note: For custom componets you have to start with a capital letter name
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
} */

export default App;