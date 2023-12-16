export const findHeroById = (heroes, id) => heroes.find(hero => hero.id === id)

export const getHeroesByOwner = (heroes, owner) => heroes.filter(hero => hero.owner == owner)

