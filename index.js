const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;

function alterarModal(){
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
    alterarModal()
    video.setAttribute('src', linkDoVideo);
})

botaoFecharModal.addEventListener('click', () => {
    alterarModal()
    video.setAttribute('src', '');
});