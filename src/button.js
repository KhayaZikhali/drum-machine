import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import flute1 from './bites/FLUTE1.mp3';
import flute2 from './bites/FLUTE2.mp3';
import flute3 from './bites/FLUTE3.mp3';
import flute4 from './bites/FLUTE4.mp3';
import saxy1 from './bites/SAXY1.mp3';
import saxy2 from './bites/SAXY2.mp3';
import saxy4 from './bites/SAXY4.mp3';
import flute5 from './bites/FLUTE5.mp3';
import {Howl , Howler} from 'howler';
// import audio clips

// create a label const for each of the sounds
const audioclips = [
  { sound : flute1 , label: "Q"},
  { sound : flute2 , label: "A"},
  { sound : flute3 , label: "Z"}
]

const audioclips2 = [
  { sound : flute4 , label: "W"},
  { sound : flute5 , label: "S"},
  { sound : saxy1 , label: "X"}
];

const audioclips3 = [  
  { sound : saxy2 , label: "E"},
  { sound : saxy4 , label: "D"}
]
  
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '  ' 
    };
  }

  SoundPlay = (src)=> {
    const sound = new Howl ({
      src
    })
    sound.play();
  } 
  
   //add eventlisteners
   
   RenderButtonandName(){
     return audioclips.map((soundObj, index) => {  
       return (
         <button class="btn btn-primary btn-xl" key ={index} onClick={() => this.SoundPlay(soundObj.sound)} onclick={()=>{this.setState(state => ({quote : "EEVRYBI"}));}}>
           {soundObj.label}
         </button>
       )
     })
   }
  
   RenderButtonandNameE(){
    return audioclips2.map((soundObj, index) => {  
      return (
        <button class="btn btn-primary btn-xl" key ={index} onClick={() => this.SoundPlay(soundObj.sound)} onclick={()=>{this.setState(state => ({quote : "EEVRYBI"}));}}>
          {soundObj.label}
        </button>
      )
    })
  }

  RenderButtonandNameR(){
    return audioclips3.map((soundObj, index) => {  
      return (
        <button class="btn btn-primary btn-xl col-md-3" key ={index} onClick={() => this.SoundPlay(soundObj.sound)} onclick={()=>{this.setState(state => ({quote : "EEVRYBI"}));}}>
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return (
      <div id="drum-machine">
        <script>
           </script>
        <div class="container-fluid" id="display">
          <h2 class="t">{this.state.quote}</h2>
        </div>
      <div className="pad cols-3">
        {/* First row of buttons in the pad */}
        <div class="well">{this.RenderButtonandName()}</div>
        <div class="well">{this.RenderButtonandNameE()}</div>
        <div class="well">{this.RenderButtonandNameR()}</div>
      </div>
      </div>
    );
  }
}
// display 
export {Pad}

         /*
         1 a
         
         
           */
      