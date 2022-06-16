
// nav bar active page

const activepage = window.location.pathname;
const navlinks = document.querySelectorAll('nav ul div a').
forEach(link =>{
    if(link.href.includes(`${activepage}`)){
        link.classList.add(`active`);
    }
});

// dropdown menu 

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', ()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option=>{
        option.addEventListener('click', ()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option=>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

// basket logo toggle
let Basket = document.querySelector(".flex-basket");
function basketshow(){
    Basket.classList.toggle("hide")
}