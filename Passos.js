
function contar() {
    let ini = document.getElementById("txi")
    let fim = document.getElementById("txf")
    let passo = document.getElementById("txp")
    let res = document.getElementById("res")

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
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F47D}`
            }	
        } else {//contagem regressiva
            for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F47D}` 
            }
            res.innerHTML += `\u{1F6F8}`
        }
    }
}
