/////////////////////////////////////////////////////////////

const body = document.querySelector('body');

let images_names = ['01.jpg', '02.jpg', '03.jpg', '05.jpg',
    '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
];

function shuffle(array) {
  array.sort(() => Math.random()*2 - 1);
}

shuffle(images_names);

let img_index = 0;

function showImage(path) {

  alert(path);
  const img = new Image();
  img.src = path;
  img.onload = function() {
      body.style.backgroundImage = `url(${ path })`;
  };

}

let BgTime = new Date();

// Set Background and Greeting
function setBgGreet() {
  BgTime = new Date();
  greeting.textContent = 'Good ' + getDayPart(BgTime.getHours()) + ', ';  
  changeBackgroundImage(getDayPart(BgTime.getHours()));  
}

function showImage(path) {

  const img = new Image();
  img.src = path;
  img.onload = function() {
      body.style.backgroundImage = `url(${ path })`;
  };
}

function getDayPart(currHour) {
  body.style.color = 'black';
  if (currHour >= 6 && currHour < 12) {
      return 'morning';
  } else if (currHour >= 12 && currHour < 18) {
      return 'day';
  } else if (currHour >= 18 && currHour < 24) {
      return 'evening';
  } else {
      return 'night';
  }
}

function isNewHour(){
  const currTime = new Date();
  const current_hour = currTime.getHours();
  if (BgTime.getHours() == current_hour) {
      return false;
  } else if (BgTime.getHours() == 'undefined') {
    BgTime = currTime;
     return true;
  } else if (BgTime.getHours() != current_hour) {
    BgTime = currTime;
    return true;  
  }
}

function tryChangeBg(){
   if (isNewHour()) {
      changeBackgroundImage(getDayPart(BgTime));
    }
}

setInterval(tryChangeBg, 1000);

let PseudoTimeHour = BgTime.getHours();

function changeBackgroundImage(day_part) {
  img_index %= images_names.length;
  const images_path = 'assets/images/' + day_part + '/';
  const full_img_path = images_path + images_names[img_index];
  showImage(full_img_path);
  img_index++;
}

function nextBackground() {

  PseudoTimeHour++;
  if(PseudoTimeHour > 24) PseudoTimeHour -= 24;
  day_part = getDayPart(PseudoTimeHour);
  changeBackgroundImage(day_part);
}

const next_img = document.getElementById('change_image');
next_img.addEventListener('click', nextBackground);

setBgGreet();