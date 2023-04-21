const linkhome = document.getElementById('casa');
const opcoes = document.querySelector('.options');

linkhome.onmouseenter = function(){
    opcoes.classList.toggle('active');
}
linkhome.onmouseleave = function(){
    opcoes.classList.toggle('active');
}