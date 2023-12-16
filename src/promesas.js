import { findHeroById } from "./impExp";
import heroes from "./data/heroes";

const getHeroByIdAsync = (heroes, id) => {
    return new Promise ( ( resolve, reject ) => {

        setTimeout( () => {

            const hero = findHeroById(heroes, id)

            hero ? resolve(hero) : reject('No se encuentra el héroe')

        }, 1000);

    });
}

getHeroByIdAsync(heroes, 2)
    .then(hero => console.log(`El héroe es: ${hero.name}`))
    .catch(console.log)


