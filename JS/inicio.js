let sec1 = document.querySelector('.sec1')
let sec2 = document.querySelector('.sec2')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    sec1.style.clipPath = "circle("+ value * 1.15+ "px at 0 0)"
    sec2.style.clipPath = "circle("+ value * 0.85+ "px at 100% 100%)"
}) 

window.addEventListener("scroll",function(){
    const section = document.querySelector('div.sect');
    const alt = screen.height;

    section.classList.toggle('hidden', window.scrollY > alt);
});
/*console-carrossel*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("ativo", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "ativo";
}