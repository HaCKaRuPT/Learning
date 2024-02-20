
let res = document.getElementById('res')
let tabu = document.getElementById('seltab')

const calcular = () => {
    res.innerHTML =""
    var valor = Number(document.getElementById('txtnum').value) 

    tabu.innerHTML=''

    for(let c = 1; c <= 10; c ++){
        
        let conta = c * valor
        let item = document.createElement('option')
        item.text = `${valor} X ${c} = ${conta}`
        tabu.appendChild(item)

        /* res.innerHTML += `${valor} X ${c} = ${conta} <br>` */
    }
}