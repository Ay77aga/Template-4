 // menu
 let ul_2 = document.querySelector('.ul-2');
 let links = document.querySelector('.menu');


 ul_2.addEventListener('click', () => {
   links.classList.toggle('show-ul2');
 });




 let section = document.querySelector('.skills');
 let span = document.querySelectorAll('.skill span');
 let sections = document.querySelectorAll('.s');
 // Go to top btn
 let btn = document.createElement('i');
 btn.classList = 'fa fa-arrow-up to-top'
 document.body.appendChild(btn);

 // Calc Scrolling
 let progress = document.querySelector('.progress');
 let scroll = document.querySelector('#r-discount').offsetTop;


 window.addEventListener('scroll', function() {
   // Auto Fill progress
   if (scrollY >= section.offsetTop - 200) {
     span.forEach((span) => {
       span.style.width = span.dataset.width;
     });
   }

   // Animation show Section
   sections.forEach((section) => {
     if (scrollY >= section.offsetTop - 500) {
       section.style.animation = `
      show-section 1.6s both linear`;
     }
   });
   // Scroll To to Btn
   if (scrollY >= 1000) {
     btn.classList.add('show');
   } else {
     btn.classList.remove('show');
   }
   let calc = scrollY * 100 / scroll;
   progress.style.width = `${calc}%`;

 });

 // Start Count Down

 let countDownDate = new Date("Jan 9, 2022 12:59:59").getTime();

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
   // console.log(dateDiff % (1000 * 60) / 1000)
   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

   document.querySelector(".d").innerHTML = days < 10 ? `0${days}` : days;
   document.querySelector(".h").innerHTML = hours < 10 ? `0${hours}` : hours;
   document.querySelector(".m").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
   document.querySelector(".sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

   if (dateDiff < 0) {
     clearInterval(counter);
   }
 }, 1000);

 // Go to top btn
 btn.addEventListener('click', () => {
   window.scroll({
     top: 0,
     behavior: "smooth",
   })
 });

 let inputs = document.querySelectorAll('input:not([type=submit])');
 let submits = document.querySelectorAll('[type=submit]');
 submits.forEach((submit) => {
   submit.addEventListener('click', (e) => {
     inputs.forEach(input => {
       if (input.value == '') {
         e.preventDefault();
         // console.log(true)
       }
     });
   });
 });

 // View img
 let imgs = document.querySelectorAll('img');
 let v_img = document.createElement('img');
 let view = document.createElement('div');
 view.appendChild(v_img);
 view.classList.add('view-img');

 // img viewers
 imgs.forEach((img) => {
   img.addEventListener('click', () => {
     // get src with img and add to view
     v_img.src = img.src;
     view.classList.add('v');
     document.body.appendChild(view);
   });
 });
 // remov view
 view.addEventListener('click', () => {
   view.classList.remove('v');
 });