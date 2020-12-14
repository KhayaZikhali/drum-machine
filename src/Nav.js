import React from 'react';
import './App.css'
// create a navbar here with a toggle button mid right to the whole thing

var now = new Date()
function Nav(){
      return (
          <nav>
              <h1 className="title">Drum Machine</h1>
              <time>
                  {console.log(now.toUTCString())}
              </time>
          </nav >

      )
  }

  export {Nav}