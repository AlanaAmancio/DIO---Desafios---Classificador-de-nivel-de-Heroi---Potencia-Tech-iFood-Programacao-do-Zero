let xp = 10001
let nomeHeroi = "frida"


let ferro = (xp <= 1000) 
let bronze = (xp >= 1001 && xp <= 2000)
let prata = (xp >=2001 && xp <= 5000)
let ouro = (xp >= 5001 && xp <= 7000)
let platina = (xp >= 7001 && xp <= 8000)
let ascendente = (xp >= 8001 && xp <= 9000)
let imortal = (xp >= 9001 && xp <= 10000)
let radiante = (xp >= 10001)


if (xp = ferro) {
console.log(`O heroi de nome ${nomeHeroi} está no nivel ferro.`)
}
else if (xp = bronze){
console.log(`O heroi de nome ${nomeHeroi} está no nivel bronze.`)
}
else if (xp = prata){
console.log(`O heroi de nome ${nomeHeroi} está no nivel prata.`)
}
else if (xp = ouro){
console.log(`O heroi de nome ${nomeHeroi} está no nivel ouro.`)
}
else if (xp = platina){
console.log(`O heroi de nome ${nomeHeroi} está no nivel platina.`)

}
else if (xp = ascendente){
console.log(`O heroi de nome ${nomeHeroi} está no nivel ascendente.`)
}
else if (xp = imortal){
console.log(`O heroi de nome ${nomeHeroi} está no nivel imortal.`)
}
else if (xp = radiante){
console.log(`O heroi de nome ${nomeHeroi} está no nivel radiante.`)
}
else if (xp !== ferro && bronze && prata && ouro && platina && ascendente && imortal && radiante) 
{
    console.log(`Nível inexistente.`)
}






