import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// create the class for the power button

class MyComponent extends React.Component {
  //logic 
  //result
    render () {
    return (
    <h1> Rain or shine </h1>      
    )
 }
}

// create a state with text in it
// update that state when a buttton is clicked 
// render new state in div with id display 
//use bootstrap grid to align the buttons


// use bootstrap
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ' ' 
    };
  }

  sayHello() {
    this.setState({
      quote: "acne"
    });
  }

  render() {
    return (
      <div className="pad">
        {/* First row of buttons in the pad */}
       <div class="container">
        <div class="row">
          <div class=" container-xxl col-md-3 text-center">
            <button class="btn btn-primary btn-xl">Q</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">W</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">E</button>
          </div>
          </div>
        </div>
        {/* Second row of buttons in the pad */}
        <div>
        <div class="row this" >
          <div class=" container-xxl col-md-3 text-center">
            <button class="btn btn-primary btn-xl">Q</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">W</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">E</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
// display 
export { MyComponent ,Pad}



         /*update the state of the quoteo on click and render the state in display
           use bootstrap grid to align items and use fa fas to add symbols in class
           add well class the buttons
      
           Create 3 wells for each row of buttons
           create a div within each well for a button
           create buttons for 
         */
      