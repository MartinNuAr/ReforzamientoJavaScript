const pokemon1 = {
    'nombre' : 'Pikachu',
    'tipo'   : 'Eléctrico'
}

const pokemon2 = { ...pokemon1 }

pokemon2.nombre = 'Jolteon'

console.log(pokemon1);
console.log(pokemon2);