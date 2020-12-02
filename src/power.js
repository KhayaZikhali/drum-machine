import React from 'react';
import './App.css'
import './bites'
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
// update that state when a butttonis clicked 
// render new state in div with id display 

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      quote: ' ' 
    };
  }
  sayHello() {
    this.setState({
      quote: this.id
    });
  }

  render() {
    return (
        <div className="quote-box">
          <div id="display">
            {this.state.quote}
          </div>
      <div className="pad">
        <button className="drum-pad" id="Q" onClick={()=> myPlay()}>Q</button>
        <button className="drum-pad" id="W">W</button>
        <button className="drum-pad" id="E">E</button>
        <button className="drum-pad" id="A">A</button>
        <button className="drum-pad" id="S">S</button>
        <button className="drum-pad" id="Z">Z</button>
        <button className="drum-pad" id="X">X</button>
        <button className="drum-pad" id="C">C</button>
      </div>
      </div>
    );
  }
}

// display 

export { MyComponent ,Pad}