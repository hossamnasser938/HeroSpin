import SuperHeros from '../../data/SuperHeros.json';

const API_KEY = "4d5d61b6";

function generateRandom(maxLimit){
    let rand = Math.random() * maxLimit;
  
    rand = Math.floor(rand);
  
    return rand;
}

const getRandomHero = () => {
    return SuperHeros[generateRandom(SuperHeros.length - 1)].name;
};

export const fetchRandomMovie = (hero) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?t=${hero? hero: getRandomHero()}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
    });
};