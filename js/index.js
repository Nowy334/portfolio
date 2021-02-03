//navigation
const nav = document.querySelector(".navigation");
const header = document.querySelector("#header");
const links = document.querySelectorAll(".navigation__link");

window.addEventListener("scroll", () => {
  let top = header.offsetHeight;
  
  if(window.scrollY >= top){
    links.forEach(elem => elem.classList.add("sticky-text"));
    nav.classList.add("sticky");
  }else {
    links.forEach(elem => elem.classList.remove("sticky-text"));
    nav.classList.remove("sticky");
  }
})


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



