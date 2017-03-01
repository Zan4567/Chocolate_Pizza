"use strict"

var changeCheck = function(event) {
  console.log('changeCheck');
  if(this.className === 'i_unchk') {
    this.className = 'i_chk';
  }
  else if(this.className === 'i_chk') {
    this.className = 'i_unchk';
  }
}

var els = document.getElementsByTagName('li');
// console.log(els);

for(var x of els) {
  // console.log('event listener added');
  x.addEventListener('click', changeCheck);
}
