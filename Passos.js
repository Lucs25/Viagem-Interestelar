let ini = document.getElementById("txi")
let fim = document.getElementById("txf")
let passo = document.getElementById("txp")
let res = document.getElementById("res")
let logoutBtn =document.getElementById("logout")

logout.style.display = "none"

function contar() {
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Favor preencher todos os campos!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido!Considerando passo 1')
            p = 1
        }
        if ( i < f) {//contagem crescente
            logout.style.display = "block"
            document.getElementById("contar").style.display = "none"
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F47D}`
            }
            res.innerHTML += `\u{1F6F8}`
        } else {//contagem regressiva
            logout.style.display = "block"
            document.getElementById("contar").style.display = "none"
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F47D}` 
            }
            res.innerHTML += `\u{1F6F8}`
        }
    }
}

logoutBtn.addEventListener("click", () => {
    document.getElementById("txi").value =" ";
    document.getElementById("txf").value =" ";
    document.getElementById("txp").value =" ";
    document.getElementById("res").innerText = "Preparando para contar...";

    document.getElementById("contar").style.display = "block"
    logout.style.display = "none"
    
});

/* 
Outro método para resetar valores - lembrando de adicionar evento onclick="myFunction()" no button logout no html

function myFunction () {
    document.getElementById("txi").value ="" ;
    document.getElementById("txf").value ="";
    document.getElementById("txp").value ="";
    document.getElementById("res").innerText = "";

    logout.style.display = "none"
    document.getElementById("contar").style.display = "block"
};

contar() */


