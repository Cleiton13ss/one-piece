

const botoes= document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao,indece) => {
    botao.addEventListener("click",() =>{
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");


        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indece].classList.add("selecionado");

    }
    )
})


