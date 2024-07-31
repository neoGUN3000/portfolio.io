
let nav_buttons = document.getElementsByClassName('navigation-btn');
let nav_buttonsArr = Array.from(nav_buttons);

let pages = document.querySelectorAll('.page');
let pagesArr = Array.from(pages);

let heading = document.querySelectorAll('.heading');




// ______________CLICK__BTN__SCROLL___TO__PAGE___

for(let i = 0; i < nav_buttonsArr.length; i++){
  nav_buttonsArr[i].addEventListener('click', () => {
    pagesArr[i].scrollIntoView({ behavior: 'smooth'});
  });
}

pagesArr.forEach(page => {
  page.addEventListener('mouseover', () => { 
   if(page =  true){
    
    
   }else{
    alert('doesn work');
   }
  });
  console.log(page);
});



for (let i = 0; i < pagesArr.length; i++) {
  pagesArr[i].addEventListener('mouseover', () =>{
      nav_buttonsArr[i].classList.add('gggg');
  });
  nav_buttonsArr[i].classList.remove('gggg');
}


// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__



let get_started = document.getElementById('get_started').addEventListener('click', () => {
  pages[1].scrollIntoView({ behavior: 'smooth'});
})


