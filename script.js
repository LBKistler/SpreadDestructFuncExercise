// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];

// 1b
function seeDinos (a, ...b){
    console.log( a);
    console.log(b);
  }
  seeDinos(...jPDinos);

// OR
// seeDinos(`Velociraptors`,`Tyrannosaurus Rex`,`Dilophosaurus`);

  console.log(`======`);

// 2a
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};

// 2b
function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
  }

// OR
// seeCharacters = ({ellieSattler}) => console.log(ellieSattler);

  seeCharacters(jPCharacters);

  console.log(`======`);

// BONUS
// 3a
const jurassicParkMovies = [
{
    one: `Jurassic Park`, 
    two: `The Lost World: Jurassic Park`, 
    three: `Jurassic Park III`
}, 
{
    four: `Jurassic World`, 
    five: `Jurassic World: Fallen Kingdom`, 
    six: `Jurassic World: Dominion`
}
];

// 3b
// OR
/*
const [{one, two, three}, {four, five, six}] = jurassicParkMovies;
const allMovies = [one, two, three, four, five, six];
console.log(allMovies);
 
seeJPMovies = (y) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
*/

// OR
/*
seeJPMovies = ({one, two, three, four}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six); 
}
seeJPMovies(jurassicParkMovies);
*/

function seeJPMovies ([{one, two, three}, {four, five, six}])
{
 console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
 console.log(six);
}
seeJPMovies(jurassicParkMovies);