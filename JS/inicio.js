let sec1 = document.querySelector('.sec1')
let sec2 = document.querySelector('.sec2')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    sec1.style.clipPath = "circle("+ value * 1.15+ "px at 0 0)"
    sec2.style.clipPath = "circle("+ value * 0.85+ "px at 100% 100%)"
}) 
const section = document.querySelector('div.sect')

window.addEventListener("scroll",function(){
    const section = document.querySelector('div.sect');
    section.classList.toggle('hidden', window.scrollY > 550);
});