function sayHello() {
    console.log('Xin chào các bạn');
}

let btn = document.querySelector('button');
let para = document.querySelector('p');

// Sử dụng DOM property
btn.onclick = function() {
    console.log('Xin chào các bạn 1');
}

// Sử dụng addEventListener
btn.addEventListener('click', function() {
    para.classList.toggle('red');
})