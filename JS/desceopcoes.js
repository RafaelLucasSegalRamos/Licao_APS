const linkhome = document.getElementById('casa');
const opcoes = document.querySelector('.options');

linkhome.onmouseenter = function(){
    const cabecalho = document.querySelector('header');

    opcoes.classList.toggle('active');
    cabecalho.classList.toggle('opdown')
}
linkhome.onmouseleave = function(){
    opcoes.classList.toggle('active');
    cabecalho.classList.toggle('opdown')
}