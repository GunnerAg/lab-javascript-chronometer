class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; 
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(()=>{ 
      this.currentTime=this.currentTime+1;
      callback()
    }, 1000);
  }
  getMinutes() {
    //... your code goes here
    let minutes = Math.floor((this.currentTime/60))
    return minutes
  }
  getSeconds() {
    let seconds = (this.currentTime-this.getMinutes()*60)
    return seconds
    // ... your code goes here
    
  }
  twoDigitsNumber(timeUnits) {
    return ('0' + timeUnits)
.slice(-2)
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    let min =this.twoDigitsNumber(this.getMinutes()),
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
    // ... your code goes here
  }
}
