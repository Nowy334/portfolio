gsap.registerPlugin(ScrollTrigger);
//navigation
const nav = document.querySelector(".navigation");
const header = document.querySelector("#header");
const sectionAbout = document.querySelector("#about");
const sectionSkills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const links = document.querySelectorAll(".navigation__link");


window.addEventListener("scroll", () => {
  let top = header.offsetHeight - 100;
  let fromTop = window.scrollY;
  
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
    let setTopSkills = offsetTop+120;
    scroll({
      top: setTopSkills,
      behavior: "smooth"
    });
  }else if(href === "#portfolio"){
    let setTopPortfolio = offsetTop-60;

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
       .from(".about__container-icons--box", {y:100, opacity:0, duration:2}, 0)
       .from(".about__container-title", {x:200, opacity:0, duration:2}, 0)
       .from(".about__container-text", {x:200, opacity:0, duration:2}, 0)
       .from(".about__container-image--border", {rotation:360, opacity:0, duration:2}, 0)
       .from(".headline-1", {y:-200, opacity:0, duration:2}, 0);

  
let skills = gsap.timeline({
  scrollTrigger: {
    trigger: '.skills',
    start: "center bottom"
  }
});
skills.from(".circle-container-element", {transform:"translate3d(0, 0, 0)", duration: 2})



       


