
let nav_buttons = document.getElementsByClassName('.navigation-btn');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');
// называть множиство множиством 



// _____mouse___on____HEADING____





// ______________CLICK__BTN__SCROLL___TO__PAGE___

for(let i = 0; i < nav_buttons.length; i++){
  nav_buttons[i].addEventListener('click', scrollIntoViewport);
}
// window.addEventListener('DOMContentLoaded', scrollIntoViewport());

function  scrollIntoViewport(){
for(let i = 0; i < nav_buttons.length; i++)
    if(nav_buttons[i].checked){
       
      pages[i].scrollIntoView({ behavior: 'smooth' });
      
    }
}
// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__




let get_started = document.getElementById('get_started').addEventListener('click', () => {
  pages[1].scrollIntoView({ behavior: 'smooth'});
})


