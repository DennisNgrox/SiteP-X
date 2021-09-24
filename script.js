
const central = document.getElementById('central');
const central2 = document.getElementById('central2');

central.onclick = () => {
    window.location = 'https://salestelecom.net.br/central_assinante_web/';
}

central2.onclick = () => {
    window.location = 'https://salestelecom.net.br/central_assinante_web/';
}
/* ScroollRevel: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 600,
    reset: true
}); 

scrollReveal.reveal(
    `.imagems-cel img, .textos-props h1,
    .imagems-cel-two, .textos-props-two h1, 
    .imagems-cel-tree, .textos-props-tree h1,
    .imagems-cel-for
    `,  { interval: 50})


