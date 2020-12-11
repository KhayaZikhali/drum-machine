import './App.css';
import {Nav} from './Nav.js';
import {MyComponent, Pad} from './button.js';

function App() {
  return (
    <div>
     <Nav /> 
     <div id="drum-elements" ></div>
     <MyComponent />
    <Pad />
    <p>DESIGN BY KHAYA ZIKHALI</p>
    </div>
  )
}



export default App;