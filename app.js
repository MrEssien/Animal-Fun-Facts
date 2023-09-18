import { animals } from './animals';
import react from 'react'
import { createRoot } from 'react-dom/client' ;

const container = document.getElementById("app");
const root =createRoot(container);

const title = '';

const background = <img className= 'background' alt='ocean' src='/images/ocean.jpg'/>;

function displayFact(t) {
  const animal = t.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
   const funFact = animals[animal].facts[index] ;

   const pe = document.getElementById("fact");
   pe.innerHTML = funFact;
}

const images = [];
for(const animal in animals) {
  const image = (
    <img
    onClick = {displayFact}
    key = {animal}
    className = 'animal'
    alt = {animal}
    src = {animals[animal].image}
    aria-label = {animal}
    role = 'button'
    />
  );

  images.push(image);
}

const showBackground = true ;

const animalFacts = ( 
  <div> 
   <h1>{title === ''? 'Click an animal for a fun fact!' : title}</h1>;
  {showBackground && background}
<p id="fact"></p>
<div className = 'animals'>{images}</div>
</div>);
root.render(animalFacts);