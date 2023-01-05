//EcmaScript - 2015 - ES6 Modules
//default import
import Controls from "./controls.js";
// named import
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()
// refactoring: changing code to make it more understandable.
// make the code more performat
// Without changing its functionality 

Events({ controls, timer, sound })