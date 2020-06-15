import React, { Component } from 'react'; //you need this imporant wherever you use JSX


//Class Component - have a few additional features ontop of function components.
//If you want something from this module to be available to other modules you have to export it
class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
        First  Component
        </div>
      );
    }
  }

  export default FirstComponent; //best practice with multiple components, its very clear which one is the default component
  