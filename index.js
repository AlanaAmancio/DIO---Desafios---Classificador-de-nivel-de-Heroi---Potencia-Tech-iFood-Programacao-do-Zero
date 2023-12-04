let nomeHeroi = "Frida"
let xp = 10001

let ferro = (xp <= 1000) 
let bronze = (xp >= 1001 && xp <= 2000)
let prata = (xp >= 2001 && xp <= 5000)
let ouro = (xp >= 5001 && xp <= 7000)
let platina = (xp >= 7001 && xp <= 8000)
let ascendente = (xp >= 8001 && xp <= 9000)
let imortal = (xp >= 9001 && xp <= 10000)
let radiante = (xp >= 10001)

let resultado = (xp = ferro || bronze || prata || ouro ||platina ||ascendente || imortal || radiante)

 switch (resultado) {
    case (resultado = ferro) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel ferro.`)
    break;

    case (resultado = bronze) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel bronze.`)
    break;

    case (resultado = prata) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel prata.`)
    break;

    case (resultado = ouro) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel ouro.`)
    break;

    case (resultado = platina) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel platina.`)
    break;

    case (resultado= ascendente) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel ascendente.`)
    break;

    case (resultado = imortal) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel imortal.`)
    break;

    case (resultado = radiante) :
        console.log(`O heroi de nome ${nomeHeroi} está no nivel radiante.`)
    break;

    default:
    console.log("Nível inexistente")


 }
