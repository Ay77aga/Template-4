let section = document.querySelector('.skills');
let span = document.querySelectorAll('.skill span');
let sections = document.querySelectorAll('.s');
window.location.href = '#events'
window.onscroll = function() {
  if (scrollY >= section.offsetTop - 200) {
    span.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 500) {
      section.style.animation = `
      show-section 1.6s both linear`;
    }
  });
}

// Start Count Down

let countDownDate = new Date("Nov 30, 2021 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".d").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".h").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".m").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);