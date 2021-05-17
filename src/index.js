import './sass/main.scss';
import cardTemplate from './templates/card.hbs'

// console.log(cardTemplate);
const refs ={
    card: document.querySelector(".card"),
    formInput: document.querySelector(".form-input"),
    formBtn: document.querySelector(".form-btn")
}

refs.formInput.addEventListener('input', onInput);

function onInput(){
    console.log(refs.formInput.value)
}



fetchCountry(us)
   .then(renderCountryCard)
   .catch((error) => {console.log(console.error)})

function fetchCountry(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`).then((response) =>{
    return response.json()
})
}



// fetchCountry();

// function fetchCountry(){
//     fetch('https://restcountries.eu/rest/v2/name/usa').then((response) =>{
//     return response.json()
// })
// .then(renderCountryCard)
// .catch((error) =>{
//     console.log(error)
// });
// }

function renderCountryCard(country){
    const markUp = cardTemplate(country[0]);
    console.log(markUp);
    refs.card.innerHTML = markUp;
    console.log(country[0].languages)

}




