
const hello = () => {
    alert('Hello World! - CONST')
}

const carregar = () =>{
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    var hora = 23

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = "/aula_ex_02/images/manha-cropped.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18){
        // boa tarde
        foto.src = "/aula_ex_02/images/tarde-cropped.png"
        document.body.style.background = '#b9846f'
    }else{
        // Boa noite
        foto.src = "/aula_ex_02/images/noite-cropped.png"
        document.body.style.background = '#515154'
    }
}


