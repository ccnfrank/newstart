

const user = document.querySelector('#user');
const btn = document.querySelector('#btn');
const resp = document.querySelector('.resp');


function fn() {

    resp.textContent = user.value;

};


btn.addEventListener('click', fn);



var ccc = '154612134546543';

const arr = Array.from(ccc, Number);
console.log(arr);




