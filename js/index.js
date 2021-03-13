gsap.registerPlugin(ScrollTrigger);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//navigation
const nav = document.querySelector(".navigation");
const header = document.querySelector("#header");
const sectionAbout = document.querySelector("#about");
const sectionSkills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const links = document.querySelectorAll(".navigation__link");
const btnHeader = document.querySelector(".btn");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  let top = header.offsetHeight - 100;
    if(fromTop >= top){
      links.forEach(elem => elem.classList.add("sticky-text"));
      nav.classList.add("sticky");
    }else {
      links.forEach(elem => elem.classList.remove("sticky-text"));
      nav.classList.remove("sticky");
    }
})

const items = document.querySelectorAll(".navigation__list a");
 
for (const item of items) {
  item.addEventListener("click", clickHandler);
}


function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  const setTop = offsetTop-120;

  if(href === "#skills"){
    let setTopSkills;
    if(window.screen.width < 600 || window.screen.height < 800 ) {
      setTopSkills = offsetTop-40;
    }else {
      setTopSkills = offsetTop+120;
    }
    scroll({
      top: setTopSkills,
      behavior: "smooth"
    });
  }else if(href === "#portfolio"){
    let setTopPortfolio = offsetTop-20;

    scroll({
      top: setTopPortfolio,
      behavior: "smooth"
    });

  }else if(href === "#about"){
    let setTopPortfolio = offsetTop-90;

    scroll({
      top: setTopPortfolio,
      behavior: "smooth"
    });
  
  }else if(href === "#contact"){
    let setTopPortfolio = offsetTop-40;
    scroll({
      top: setTopPortfolio,
      behavior: "smooth"
    });
  
   }else {
    scroll({
      top: setTop,
      behavior: "smooth"
    });
  }
}
//btn header
btnHeader.addEventListener("click", function(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop-20,
    behavior: "smooth"
  });
})

//mobile menu 
const menuBtn = document.querySelector('.menu-btn');
const navig = document.querySelector(".navigation__list");

menuBtn.addEventListener('click', ()=>{

  menuBtn.classList.toggle('open');
  navig.classList.toggle('nav-active');

});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      navig.classList.toggle('nav-active');
  });
}

//animation page

const left = document.querySelector("#left")
const right = document.querySelector("#right")
const slash = document.querySelector("#slash")
const all = document.querySelector("#markups")
const heading = document.querySelector(".container__heading")

const tl = new TimelineMax()
  .from(slash, 0.9, {y:-600})
  .from(left, 0.9, {x:-400, opacity: 0})
  .from(right, 0.9, {x:400, opacity: 0})
  .staggerFromTo(heading, 1, {scale:0.8, opacity:0},
    {scale:1, opacity:1}, 1, "-=1");

const tl2 = new TimelineMax({delay:3, repeat: -1 })
  .to(all, 3, {y: -50})
  .to(all, 3, {y: 0})

  //section about

  let about = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: "center bottom"
    }
  });
  about.from(".about__container-image", {scale: 0.4, opacity:0, duration: 2})
       .from(".about .about__container-icons--box", {y:100, opacity:0, duration:2}, 0)
       .from(".about__container-title", {x:200, opacity:0, duration:2}, 0)
       .from(".about__container-text", {x:200, opacity:0, duration:2}, 0)
       .from(".about__container-image--border", {rotation:360, opacity:0, duration:2}, 0)
       .from(".headline-1", {y:-50, opacity:0, duration:2}, 0);

  
let skills = gsap.timeline({
  scrollTrigger: {
    trigger: '.skills',
    start: "center bottom"
  }
});

skills.from(".circle-container-element", {transform:"translate3d(0, 0, 0)", duration: 2});

let projects = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects',
    start: "center bottom"
  }
});

projects.from('.headline-2',{y:-35, opacity:0, duration:2}, 0)
        .from('.projects__item-1', {x:-35, opacity:0, duration:2}, 0)
        .from('.projects__item-2', {x:35, opacity:0, duration:2}, 0)
        .from('.projects__item-3', {x:-35, opacity:0, duration:2}, 0)
        .from('.projects__item-4', {x:35, opacity:0, duration:2}, 0); 


let contact = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: "center bottom"
  }
});

contact.from('.headline-3',{y:-50, opacity:0, duration:2})
       .from(".contact__mail", {scale: 0.4, opacity:0, duration: 2}, 0)

let footer = gsap.timeline({
  scrollTrigger: {
    trigger: '.footer',
    start: "center bottom"
  }
});

footer.from(".footer .about__container-icons--box", {y:50, opacity:0, duration:2})




       


