const verificar = () =>{

    var fundo = window.document.getElementById('fundo')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('Erro: Verifique os dados')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""

        var img = document.createElement('img')

        if (fsex[0].checked){
            genero = "Homem"
            if(idade < 10){
                img.setAttribute('src', '/aula_ex_03/images/menino-cropped.webp')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', '/aula_ex_03/images/h_adulto-cropped.webp')
            }
            else if (idade < 65){
                //adulto
                img.setAttribute('src', '/aula_ex_03/images/h_adulto-cropped.webp')
            }
            else {
                //idoso
                img.setAttribute('src', '/aula_ex_03/images/idoso-cropped.webp')
            }
        }
        else
        {
            genero = "Mulher"
            if(idade < 10){
                img.setAttribute('src', '/aula_ex_03/images/menina-cropped.webp')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', '/aula_ex_03/images/mulher-cropped.webp')
            }
            else if (idade < 65){
                //adulto
                img.setAttribute('src', '/aula_ex_03/images/mulher-cropped.webp')
            }
            else {
                //idoso
                img.setAttribute('src', '/aula_ex_03/images/idosa-cropped.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi Escolhido ${genero} com ${idade} anos! <br>`
        res.appendChild(img)
        
           
    }

    fundo.innerHTML = `<p>Estamos no ano de ${ano} !</p>`
    
}

