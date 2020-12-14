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

//

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'ROLS OF RYCE' 
    };
  }
   //add eventlisteners  
   
   

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
            <button class="btn btn-primary btn-xl drumpad-Q" id="Q"onClick={()=>{this.setState(state => ({quote : "Trombone"}));}}
            >Q</button>
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
            <button class="btn btn-primary btn-xl" id="Z" onClick={()=>{this.setState(state => ({quote : "ALank"}));}}>Z</button>
          </div>
           <div class="container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl" onClick={()=>{this.setState(state => ({quote : "ALlsm;"}));}}>X</button>
           </div>
           <div class=" container-xxl col-md-3 text-center">
             <button class="btn btn-primary btn-xl" onClick={()=>{this.setState(state => ({quote : "SMomaiasjnks"}));}}>C</button>
           </div>
          </div>
         </div>
        </div>
       <p>
         Task for the day of tueday
         1 add a clock to ypur project 
         2 add the soundbites to each of the buttons
         3 attach the soundbites to a keypress event
         4 adjust the design to amke it more responsive to various screen sizes
       </p>
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
      