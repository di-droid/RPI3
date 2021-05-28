// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  goal = document.querySelector('.goal'),
  city = document.getElementById('city'); 

  let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    day = weekDays[today.getDay()];
    date = today.getDate();
    month = months[today.getMonth()];

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
  <br/>${day}<span>, </span>${month}<span> </span>${date}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
} 

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {    
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(e.target.innerText != ""){
      localStorage.setItem('name', e.target.innerText);
      }
      name.blur();      
    }
  } else {
    if (e.target.innerText == ""){
      name.textContent = localStorage.getItem('name');
    } 
  }
}

function hideText(e) {   
  e.target.innerText = " ";  
}

function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = '[Enter city]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function setCity(e) {  
  if (e.type === 'keypress') {    
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(e.target.innerText != ""){
        localStorage.setItem('city', e.target.innerText);
        setForecast(e.target);
        }
        city.blur();
    }
  } else {
    if (e.target.innerText == ""){
      city.textContent = localStorage.getItem('city');
    } 
  }
}

function getGoal() {
  if (localStorage.getItem('goal') === null) {
    goal.textContent = '[Enter goal]';
  } else {
    goal.textContent = localStorage.getItem('goal');
  }
}

function setGoal(e) {  
  if (e.type === 'keypress') {    
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(e.target.innerText != ""){
        localStorage.setItem('goal', e.target.innerText);
        }
        goal.blur();
    }
  } else {
    if (e.target.innerText == ""){
      goal.textContent = localStorage.getItem('goal');
    } 
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('click', hideText);
name.addEventListener('blur', getName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('click', hideText);
goal.addEventListener('blur', getGoal);
city.addEventListener('keypress', setCity);
city.addEventListener('click', hideText);
city.addEventListener('blur', getCity);

// Run
showTime();
getName();
getGoal();
getCity();