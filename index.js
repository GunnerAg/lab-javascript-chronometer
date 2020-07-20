const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  console.log('calling')
  printMinutes();
  ptintSeconds();

  // ... your code goes here
}

function printMinutes() {
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  // ... your code goes here
}

function printSeconds() {
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn start'
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.innerText ='SPLIT'
  btnRight.className ='btn split'
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerText ='START'
  btnLeft.className ='btn start'
  // ... your code goes here
}

function setResetBtn() {
  btnRight.innerText ='RESET'
  btnRight.className ='btn reset'
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  chronometer.startClick(printTime)
  if(btnLeft.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
  }
  else{
    setStartBtn()
    setResetBtn()

  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.classList.contains('reset')){
    chronometer.
  }
});
