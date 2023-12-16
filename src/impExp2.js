import { findHeroById } from "./impExp"
import { getHeroesByOwner } from "./impExp"
import superHeroes from "./data/heroes"
import { owners } from "./data/heroes"

console.log(findHeroById(superHeroes, 5))
console.log(getHeroesByOwner(superHeroes, owners[0]))