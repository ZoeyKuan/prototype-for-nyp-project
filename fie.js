let booked = sessionStorage.getItem('booking');
let press = false;
const car = document.querySelector('.slider1');
const slide = document.querySelector('.slider2');
const inner = document.getElementsByClassName('inner-slider');
let prevMouse; // where it is in pixels on the document
let prevScroll; // number of pixels going to the left

if (booked != undefined){
 console.log('getting booked')
 booked = sessionStorage.getItem('booking');
 document.querySelector('.booking h4').innerHTML = booked;
}


car.addEventListener('mouseenter',(e) => {
 car.style.cursor = 'grab';
 scroller(car);
});

slide.addEventListener('mouseenter',(e) => {
 slide.style.cursor = 'grab';
 scroller(slide);
});

function scroller(car){
 car.addEventListener('mousemove', (e) => {
  if (!press) return;
  e.preventDefault();
  car.scrollLeft = e.pageX;
  diffOfNewOld = e.pageX - prevMouse;
  // if you plus then it will go in a pull direction
  car.scrollLeft = prevScroll - diffOfNewOld;
 });
 
 car.addEventListener('mousedown', (e) => {
  e.preventDefault();
  press = true;
  car.style.cursor = 'grabbing';
  prevMouse = e.pageX;
  prevScroll = car.scrollLeft;
 });
 
 car.addEventListener('mouseup', (e) => {
  press = false;
  car.style.cursor = 'grab';
 });
}

function goVideoCall(number, url){
 sessionStorage.clear();
 sessionStorage.setItem('therapist', number);
 sessionStorage.setItem('prevPage', url);
}

// unoptimized function ;(
function load(){
 const htmlList = [
  (therapistNum) => {
   string = `<div class="card">
      <a onclick="goVideoCall(${therapistNum}, 'fie.html')" href="videocall.html">
       <img src=
       "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
       alt="Your Therapist">
      </a>
      <p>Therapist ${therapistNum}</p>
     </div>`; return string;
  },
  (soundtrackNum) => {
   string = `<div class="card"><a href="#">
   <img src=
     "https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"
     alt="Your Therapist">
    </a>
    <p>Soundtrack ${soundtrackNum}</p>
   </div>`; return string;
  },
 ];
 let display = ``;
 for(cards = 0; cards < 2; cards++){
  for (i=1; i<6; i++){
   display += htmlList[cards](i);
  }
  inner[cards].innerHTML = display;
  display = ``;
 }
}
