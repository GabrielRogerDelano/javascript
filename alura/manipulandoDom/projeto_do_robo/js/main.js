const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click" , (evento) => {
        ManipulaDados(evento.target.outerText, evento.target.parentNode)
    })
})

function ManipulaDados(operacao, controle){
    const peca = controle.querySelector('.controle-contador')

    if(operacao == "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}