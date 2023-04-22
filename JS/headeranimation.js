const cabecalho = document.querySelector('header')

window.addEventListener("scroll",function(){
    const cabecalho = document.querySelector('header');
    cabecalho.classList.toggle('sticky', window.scrollY > 775);
});