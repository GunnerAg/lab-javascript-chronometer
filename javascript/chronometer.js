class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; 
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(()=>{ 
      this.currentTime=this.currentTime+1;
      }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(Number((this.currentTime/60)))
    return minutes
  }
  getSeconds() {
    let seconds = (this.currentTime-this.getMinutes()*60)
    return seconds
    // ... your code goes here
    
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
