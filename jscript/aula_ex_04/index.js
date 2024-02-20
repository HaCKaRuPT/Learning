
let ini = document.getElementById('inicio')
let max = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')





const contar = () => {
    if (ini.value.length == 0 || max.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "impossivel Contar: "
        window.alert('Faltam Dados!')
    } 
    else
    {
        contagem()
    }
}

const contagem = () => {
    res.innerHTML = "A Contar: "

    let i = Number(ini.value)
    let m = Number(max.value)
    let p = Number(passo.value)

    if  (p == 0){
        p = 1;
        window.alert('Impossivel contar de 0, Passo está a 1')
    }
    
    /* Contagem Crescente */
    if (i < m)
    for (let c = i; c <= m; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`	
    }

    /* Contagem Decrescente */
    else
    {
        for (let c = i; c >= m; c -= p) {
            res.innerHTML += ` ${c} \u{1F601} `	
        }
    }
    res.innerHTML += ` ... \u{1F919} Fim!`
}