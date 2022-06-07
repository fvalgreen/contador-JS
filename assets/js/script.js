var currentNumberHTML = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
  currentNumber += 1;
  currentNumberHTML.innerHTML = currentNumber;

  if(currentNumber < 0) {
    currentNumberHTML.style.color = 'red';
  }else {
    currentNumberHTML.style.color = 'black';
  }
}

function decrement() {
  currentNumber -= 1;
  currentNumberHTML.innerHTML = currentNumber;
  
  if(currentNumber < 0) {
    currentNumberHTML.style.color = 'red';
  }else {
    currentNumberHTML.style.color = 'black';
  }
}

if(currentNumber < 0) {
  currentNumberHTML.style.color = 'red';
}else {
  currentNumberHTML.style.color = 'black';
}