class CountdownTimer{
  constructor({selector, targetDate}) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }
  start() {
    setInterval(() => {
      const time = this.targetDate - Date.now()
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      this.changeTime(days, hours, mins, secs);
    }, 1000)
  }
  changeTime(days, hours, mins, secs) {
    this.selector.querySelector('[data-value="days"]').textContent= days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent= secs;
  }
}
 
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
}).start();