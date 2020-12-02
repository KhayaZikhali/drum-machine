import './App.css';
import {Nav} from './Nav.js';
import {MyComponent, Pad} from './power.js';

function App() {
  return (
    <div>
     <Nav /> 
     <div id="drum-elements" ></div>
     <MyComponent />
    <Pad />
    </div>
  )
}

export default App;