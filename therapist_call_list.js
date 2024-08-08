function loadlist(){
 const listType = sessionStorage.getItem('listType');
 const listView = document.querySelector('.list-view');
 const htmlList = [
  (therapistNum) => {
   string = `<div class="list-item">
     <div class="details">
      <a href="videocall.html">
      <img src=
      "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
       alt="${therapistNum}">
       </a>
     </div>
     <div class="details">
      <h2>Therapist ${therapistNum}</h2>
      <h4>Charge: $--.--</h4>
      <h4>Availability: e.g. Every Friday, Weekend, etc.</h4>
     </div>
    </div>`; return string;
  },
  (soundtrackNum) => {
   string = `<div class="list-item">
     <div class="details">
      <img src=
       "https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"
       alt="Soundtrack ${soundtrackNum}">
     </div>
     <div class="details">
      <h2>Soundtrack ${soundtrackNum}</h2>
      <h4>Charge: $--.--</h4>
      <h4>Availability: e.g. Every Friday, Weekend, etc.</h4>
     </div>
    </div>`; return string;
  },
 ];
 let display = ``;
 switch (listType){
  case 'therapistList':
   for (i=1; i<6; i++){
    display += htmlList[0](i);
   } break;
  case 'sleepSounds':
   for (i=1; i<6; i++){
    display += htmlList[1](i);
   } break;
 }
 listView.innerHTML = display;
 const litem = document.getElementsByClassName('list-item');
 for (i=0;i<litem.length;i++){
  litem[i].addEventListener('click', (e) =>{
   c = e.target;
   sessionStorage.setItem('therapist', e.target.alt);
   sessionStorage.setItem('prevPage', 'therapist-sounds-list.html');
   console.log('saved:', sessionStorage.getItem('prevPage')+ ',', sessionStorage.getItem('therapist'));
  });
 }
}

