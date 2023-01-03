//EcmaScript - 2015 - ES6 Modules
import "./controls.js"
import "./timer.js"
//DOM
// Document Object Model
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
console.log(minutes)
let timerTimeOut

// refactoring: changing code to make it more understandable.
// make the code more performat
// Without changing its functionality 
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
});

// Event-drive
// imperative programming
// callback
buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut) 
})

buttonStop.addEventListener('click', () => {
  resetControls()
  resetTimer()
  console.log(minutes)
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', () => {
  let newMinutes = prompt('How many minutes do you want to set?')
  if (!newMinutes) {
    resetTimer()
    return
  }
  minutes = newMinutes
  updateTimeDisplay(minutes, 0)
})