const en = document.querySelectorAll('.en');
const it = document.querySelectorAll('.it');
const flagIt = document.querySelector('header>img:last-of-type');
const flagEn = document.querySelector('header>img:first-of-type');
let languauges = [
  {
    flag:flagEn, spans : en,active : false
  },
  {
    flag:flagIt, spans : it,active : false
  }
];

function addEvents(){
  languauges.forEach(language => {
    language.flag.addEventListener('click', e =>{
      let display = (language.active)?'none':'inline';
      for (let i = 0; i < language.spans.length; i++) {
        language.spans[i].style.display=display;
      }

      language.flag.style.opacity = (language.active) ? '.3':'1';
      language.active = !language.active;
    });
  });
}

function init(){
  addEvents();
}

init();
