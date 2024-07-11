/*-------navbar javascript starts here---------------*/
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*--------------css for section 1 form starts here ---------------------*/ 
 function updatePageCount(change) {
    const pageInput = document.getElementById('pages');
    const totalWords = document.getElementById('total-words');
    let pageCount = parseInt(pageInput.value, 10);

    pageCount += change;

    if (pageCount < 1) {
        pageCount = 1;
    }

    pageInput.value = pageCount;
    totalWords.textContent = pageCount * 250;
}
/*-------navbar javascript ends here---------------*/
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document .querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active=0;
let lengthItems = items.length-1;
next.onclick=function(){
    if(active + 1>lengthItems){
        active=0;
    }
    else{
        active = active +1;
    }
    reloadSlider();
}
prev.onclick=function(){
    if(active -1<0){
        active=lengthItems;
    }
    else{
        active=active-1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {
    next.click();
}, 3000);
function reloadSlider(){
    let checkLeft= items[active].offsetLeft;
    list.style.left =- checkLeft+ 'px'

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider=setInterval(()=>{next.click()},3000);
}
/*-----------automatic slider starts here----------------*/ 
/*-----------automatic slider ends here ----------------*/ 
dots.forEach((li,key) => {
    li.addEventListener('click',function(){
        active=key;
        reloadSlider();
    })
})
