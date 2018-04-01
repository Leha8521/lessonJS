let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.circle'),
    oneHeart = document.querySelector('.circle');

box.style.backgroundColor = 'green';
btn[2].style.borderRadius = '50%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'orange';
circle[2].style.backgroundColor = 'green';


let div = document.createElement('div');
let text = document.createTextNode('Тут я был');

div.classList.add('black');

 document.body.appendChild(div);

// document.body.insertBefore(div, circle[1]);

//document.body.removeChild(circle[1]);
document.body.replaceChild(circle[2], circle[0]);

div.textContent = 'Hello world'

