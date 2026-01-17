let btn = document.getElementById('btn');
let mess  = document.querySelector('p');
btn.addEventListener('click', () => {
    mess.classList.toggle('active');
    mess.style.backgroundColor = 'yellow';
    mess.style.color = 'red';
})

let sendbtn = document.getElementById('sendbtn');
let textarea = document.getElementById('textArea');

sendbtn.addEventListener('click', () => {
    mess.textContent = '';
    let message = textarea.value;
    mess.textContent = message;
    textarea.value = '';

})