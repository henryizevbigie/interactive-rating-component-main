let form = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let container = document.querySelector('form');
let thankYou = document.querySelector('.next-container');
let p = document.querySelector('.p');

form.addEventListener('click', (e)=>{
    e.preventDefault();
    container.classList.add('hidden');
    thankYou.classList.remove('hidden');
    thankYou.style.display = 'block';
});

buttons.forEach((element, index)=>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        let target = element.innerHTML;
        p.innerHTML = `you selected ${target} out of 5`;
        
    });
});


