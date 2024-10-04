/**
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//Animação da tela inicial
document.querySelector('#tela_comeco').addEventListener('click', () => {
    document.querySelector('#tela_comeco').classList.add("subir")
})

//animação do menu lateral
document.querySelector('#promocoes').addEventListener('click', () => {
    document.querySelector('#promocoes').classList.add("crescer")
    document.querySelector('#hamburguers').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})
document.querySelector('#hamburguers').addEventListener('click', () => {
    document.querySelector('#hamburguers').classList.add("crescer")
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})
document.querySelector('#acompanhamentos').addEventListener('click', () => {
    document.querySelector('#acompanhamentos').classList.add("crescer")
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburguers').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})
document.querySelector('#bebidas').addEventListener('click', () => {
    document.querySelector('#bebidas').classList.add("crescer")
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburguers').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})
document.querySelector('#sobremesas').addEventListener('click', () => {
    document.querySelector('#sobremesas').classList.add("crescer")
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburguers').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
})
