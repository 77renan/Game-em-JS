const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');

const jump= () => {

    personagem.classList.add('jump');

    setTimeout(() => {
    
        personagem.classList.remove('jump');

    }, 500);
}

    const loop = setInterval(()=>{

        const pipePosition = pipe.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px','');

        if(pipePosition <=90 && pipePosition >0 &&personagemPosition <75){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            personagem.style.animation = 'none';
            personagem.style.bottom = `${personagemPosition}px`;
            clearInterval(loop);
        }

    }, 10)
document.addEventListener('keydown',jump);
