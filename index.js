const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let hours,minutes,seconds2,formatted
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {
    window.timerId = setInterval(() => { 
    if(seconds < 1) {
      timerEl.textContent = `Время вышло`;
    }else {
      hours = Math.floor(seconds / 60 / 60);
      hours = hours<10 ? `0${hours}` : hours
      minutes = Math.floor(seconds / 60) - (hours * 60);
      minutes = minutes<10 ? `0${minutes}` : minutes
      seconds2 = seconds % 60;
      seconds2 = seconds2<10 ? `0${seconds2}` : seconds2
      timerEl.textContent = `${hours}:${minutes}:${seconds2}`;
      seconds -= 1;
    }
    
   }, 1000);

};

const animateTimer = createTimerAnimator;

inputEl.addEventListener('input', () => {
  val = Number(inputEl.value.replace(/\D+/g,""))
  inputEl.value = val;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  clearInterval(window.timerId);
  createTimerAnimator(seconds);

  inputEl.value = '';
});
