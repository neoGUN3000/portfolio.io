let nav_buttons = document.getElementsByName('navigation-btn');
let nav_buttonsArr = Array.from(nav_buttons);

let pages = document.querySelectorAll('.page');
let pagesArr = Array.from(pages);

let heading = document.querySelectorAll('.heading');




// ______________CLICK__BTN__SCROLL___TO__PAGE___

for(let i = 0; i < nav_buttonsArr.length; i++){
  nav_buttonsArr[i].addEventListener('click', () => {
    pagesArr[i].scrollIntoView({ behavior: 'smooth'});
    pagesArr[i].classList.add('gggg');
  });
  
}





// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__



let get_started = document.getElementById('get_started').addEventListener('click', () => {
  pages[1].scrollIntoView({ behavior: 'smooth'});
 
  
})

let allPages = pagesArr[0].getBoundingClientRect();
console.log(allPages);