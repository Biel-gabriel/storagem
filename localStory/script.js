let user = document.querySelector("#user")
let btn = document.querySelector("#btn")
let welcome = document.querySelector("#welcome")

/* 1 - Salvar LocalStory */
/* localstory.setItem("username", "Gabriel") */

function pegarnome() {
    localStorage.setItem("username", user.value)
   let username = localStorage.getItem("username")

    welcome.innerHTML = `Olá ${username}, Seja Bem-Vindo!`
}

function pegarValorLocal() {
    let username = localStorage.getItem("username")
    
    welcome.innerHTML = `Olá ${username}, Seja Bem-Vindo!`
}

pegarValorLocal();
btn.addEventListener("click", pegarnome) 