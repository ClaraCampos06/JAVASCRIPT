function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.backgroundImage = 'linear-gradient(to top, rgb(255, 157, 0), rgb(152, 222, 245))'
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.backgroundImage = 'linear-gradient(to top, rgb(66, 22, 133), rgb(255, 107, 22))'
} else {
    img.src = 'noite.png'
    document.body.style.backgroundImage = 'linear-gradient(to top, rgb(9, 15, 40), rgb(58, 128, 151))'
}
}