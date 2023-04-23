
window.addEventListener("scroll",function(){
    const cabecalho = document.querySelector('header');
    var alt = screen.height;
    alt = alt * 1.40 

    cabecalho.classList.toggle('sticky', window.scrollY > alt);
});