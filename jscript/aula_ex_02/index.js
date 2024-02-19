
const hello = () => {
    alert('Hello World! - CONST')
}

const carregar = () =>{
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = "manha-cropped.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18){
        // boa tarde
        foto.src = "tarde-cropped.png"
        document.body.style.background = '#b9846f'
    }else{
        // Boa noite
        foto.src = "noite-cropped.png"
        document.body.style.background = '#515154'
    }
}


