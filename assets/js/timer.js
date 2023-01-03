function updateTimeDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimeDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function  countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    updateTimeDisplay(minutes)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if ( seconds <= 0) {
      seconds = 3
      --minutes
    }

    updateTimeDisplay(minutes, String(seconds -1))
    
    // Recursion
    countdown()
  }, 1000)
}