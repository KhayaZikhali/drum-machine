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

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      quote: 'ROLS OF RYCE' 
    };
  }
   
  handleClick() {
    this.setState(state => ({
      quote : ""
    }));
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div class="container-fluid" id="display">
          <h2 class="t">{this.state.quote}</h2>
        </div>
      <div className="pad">
        {/* First row of buttons in the pad */}
       <div class="container">
        <div class="row">
          <div class=" container-xxl col-md-3 text-center">
            <button class="btn btn-primary btn-xl drumpad-Q" id="Q"onClick={()=>{this.setState(state => ({quote : "Trombone"}));}}>Q</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl drumpad-W" id="W" onClick={()=>{this.setState(state => ({quote : "Snare"}));}}>W</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl drumpad-E" id="E" onClick={()=>{this.setState(state => ({quote : "PCWORLD"}));}}>E</button>
          </div>
          </div>
        </div>

        {/* Second row of buttons in the pad */}
        <div class="container">
        <div class="row this" >
          <div class=" container-xxl col-md-3 text-center">
            <button class="btn btn-primary btn-xl drumpad-A" id="A" onClick={()=>{this.setState(state => ({quote : "EEVRYBI"}));}}>A</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl drumpad-S" id="S" onClick={()=>{this.setState(state => ({quote : "LKMLKM"}));}}>S</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl drumpad-D" id="D" onClick={()=>{this.setState(state => ({quote : "LKNKNNNKL"}));}}>D</button>
          </div>
        </div>
        </div>

        {/* Third row of buttons in the pad */}
        <div class="container">
        <div class="row this" >
          <div class=" container-xxl col-md-3 text-center">
            <button class="btn btn-primary btn-xl">Z</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">X</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl">C</button>
          </div>
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
      