import React from 'react';
import './App.css'
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

function myPlay(){
  var audio = new Audio("./bites/FLUTE1.mp3");
  audio.play();
}
// create a state with text in it
// update that state when a buttton is clicked 
// render new state in div with id display 

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
        <div className="quote-box">
          <div id="display">
          {this.props.quote}
          </div>
      <div className="pad">
         {/*update the state of the quoteo on click and render the state in display*/}
        <button className="drum-pad" id="Q" onClick={this.sayHello()}>Q</button>
        <button className="drum-pad" id="W" onClick={console.log("W")}>W</button>
        <button className="drum-pad" id="E" onClick={console.log("E")}>E</button>
        <button className="drum-pad" id="A" onClick={console.log("A")}>A</button>
        <button className="drum-pad" id="S" onClick={console.log("S")}>S</button>
        <button className="drum-pad" id="Z" onClick={console.log("Z")}>Z</button>
        <button className="drum-pad" id="X" onClick={console.log("X")}>X</button>
        <button className="drum-pad" id="C" onClick={console.log("C")}>C</button>
      </div>
      </div>
    );
  }
}
// display 
export { MyComponent ,Pad}