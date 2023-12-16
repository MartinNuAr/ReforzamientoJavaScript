const person = {
    name: 'Kirby',
    power: 'Ability copy'
}

const createHero = ({ name, power }) => ({ id: 1, ...person })

console.log( createHero( person ) )





