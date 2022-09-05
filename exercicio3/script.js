/*const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
    nome: "Charmander",
    tipo: "fogo",
    nível: 7
}

pokemon1.ataque = [];
pokemon1.ataque.push({ 
    ataque: " Chuva infernal " ,
    Dano:  45  ,
    Tipo: " Fogo" ,
    Percentual:  80 });


pokemon2 = {...pokemon1.ataque}
pokemon2.ataque.push({
     ataque: " chicote de folha " ,
     Dano: 75  ,
     Tipo: " Água ",
     Precisão:  97});

console.log(pokemon1);
console.log(pokemon2);*/


const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}; 
const pokemon2 = {
    ...pokemon1 ,
    nome: "Squirtle" ,
    tipo: "Água" ,
}
pokemon1.ataques = []

pokemon1.ataques.push({nome: "Investida" , dano: 40 , tipo: "Normal" , precisao: 100})

pokemon2.ataques = [...pokemon1.ataques]

pokemon1.ataques.push({nome: "Folha Navalha" , dano: 45 , tipo: "Grama" , precisao: 100})

pokemon2.ataques.push({nome: "Jato de Água" , dano: 40 , tipo: "Água" , precisao: 100})

console.log("Pokemon 1:" , pokemon1)
console.log("Pokemon 2:" , pokemon2)
