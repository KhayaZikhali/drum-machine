import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CiHat01 from './bites/CiHat01.mp3';
import CiHat02 from './bites/CiHat02.wav';
import CiHat03 from './bites/CiHat03.wav';
import Kick01  from './bites/Kick01.wav';
import Kick02  from './bites/Kick02.wav';
import Kick03  from './bites/Kick03.wav';
import OpHat01 from './bites/OpHat01.wav';
import OpHat02 from './bites/OpHat02.wav';
import OpHat03 from './bites/OpHat03.wav';
import {Howl , Howler} from 'howler';
// import audio clips

// create a label const for each of the sounds
// audioclips for hte first column o fbuttons

const audioclips = [
  { sound : CiHat01 , label: "Q" , name : "CiHat01"},
  { sound : CiHat02 , label: "A" , name : "CiHat02"},
  { sound : CiHat03 , label: "Z" , name : "CiHat03"},]
  
  // audioclips for the second column of buttons
  const  wsx= [
  { sound : Kick01 , label: "W" , name : "Kick01"},
  { sound : Kick02 , label: "S" , name : "Kick02"},
  { sound : Kick03 , label: "X" , name : "Kick03"},
]

//audioclips for the third column of buttons  
  const edc = [
  { sound : OpHat01 , label: "E" , name:"OpHat01"},
  { sound : OpHat02 , label: "D" , name:"OpHat02"},
  { sound : OpHat03 , label: "C" , name:"OpHat03"}
];

//add keypress handler
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: '  ' 
    };
  }

//function to play the sound from its src
  SoundPlay = (src)=> {
    const sound = new Howl ({
      src 
    })
    sound.play();
  } 

   // render a button element for the the first column of buttons   
   RenderButtonandName(){
     return audioclips.map((soundObj, index) => {
       //keyboard event listener
      document.addEventListener("keydown", (event)=>{
        if (event.key === soundObj.label.toLowerCase()){
           this.SoundPlay(soundObj.sound)
           setTimeout(function(){
            window.location.reload();
         }, 400);
           // updatet the state
           this.setState({
            instrument: soundObj.name
          })
        }
      })  
       return (
         <button className="btn btn-primary btn-xl" key ={index} onClick={() => {this.SoundPlay(soundObj.sound);
           this.setState({
             instrument : soundObj.name
           })
           setTimeout(function(){
            window.location.reload();
         }, 400);
         }}>
           {soundObj.label}
         </button>
       )
     })
   };
   

// render  buttons for the second column
   RenderSecondColumn(){
     return wsx.map((soundObj,index) => {
       // keyboard event listener
       document.addEventListener("keydown", (event)=>{
        if (event.key === soundObj.label.toLowerCase()){
           this.SoundPlay(soundObj.sound)
           console.log(event.key)
           // update the state
           this.setState({
            instrument : soundObj.name
          })
          setTimeout(function(){
            window.location.reload();
         },400);
        }
      })  
       return (
         <button className="btn btn-primary btn-xl" id="q" key ={index} onClick={() =>{this.SoundPlay(soundObj.sound);
            this.setState({
              instrument: soundObj.name
            })
            setTimeout(function(){
              window.location.reload();
           }, 400);
            }}>
           {soundObj.label}
         </button>
       )
     })
   };

   //render buttons for the third column
   RenderThirdColumn(){
     return edc.map((soundObj, index) => {  
       //keyboard event listener
       document.addEventListener("keydown", (event)=>{
        if (event.key === soundObj.label.toLowerCase()){
           this.SoundPlay(soundObj.sound)
           console.log(event.key)
           // set the state
           this.setState({
            instrument : soundObj.name
          })
          setTimeout(function(){
            window.location.reload();
         },  400);
        }
      })  
       return (
         <button className="btn btn-primary btn-xl" key={index} onClick={()=> {this.SoundPlay(soundObj.sound)
          this.setState({
            instrument: soundObj.name})
            setTimeout(function(){
              window.location.reload();
           },  400);
          }}>
           {soundObj.label}
         </button>
       )
     })
   };

  render() {
    Howler.volume(1.0)
    return (
      <div id="drum-machine">
        <script>
           </script>
        <div className="container-fluid" id="display">
          <h2 className="t">{this.state.instrument}</h2>
        </div>
      <div className="pad">
        {/* First row of buttons in the pad */}
        <div className="well">
          <div className="btn-xl">
            {this.RenderButtonandName()}
            </div>
          </div>
          {/* Second column of buttons */}
        <div className="well">
          <div className="btn-xl">
          {this.RenderSecondColumn()}
          </div>
        </div>
        {/* Third column of buttons */}
        <div className="well">
          <div className="btn-xl">
           {this.RenderThirdColumn()}
        </div>
       </div>
      </div>
     </div>
    );
  }
}

export {Pad}      