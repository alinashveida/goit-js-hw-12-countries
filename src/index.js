import './sass/main.scss';
import cardTemplate from './templates/card.hbs';
import countriesList from './templates/countriesList.hbs'
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

// console.log(cardTemplate);

 const refs = getRefs();
refs.formInput.addEventListener('input', onInput);

function onInput(evt){
    evt.preventDefault()
    
    const inputValue = refs.formInput.value;
    console.log(inputValue)

    
    API.fetchCountries(inputValue)
   .then(checkNumberOfCounthies)
   .catch(onFetchError)
//    .finally(() => inputValue.reset())
}


function onFetchError(error){
    alert('Страна ненайдена')

}

//------------------------------///////////////////////

function renderCountryCard(country){
    console.log(country)
    const markUp = cardTemplate(country[0]);
    console.log(markUp);
    refs.card.innerHTML = markUp;

}

function renderCounthiesList(country){
     const markUpList = countriesList(country);
     refs.card.innerHTML = markUpList;
     console.log(markUpList)
}

function checkNumberOfCounthies (countries){
    if(countries.length < 10 && countries.length > 1){
        renderCounthiesList(countries);
        console.log(countries);
        console.log('1')
    }

    if(countries.length === 1){
        renderCountryCard(countries);
        console.log('2')
    }else{
        console.log('else')
    }

    
}



//---------------------------------------------------------------------
// const BASE_URL = 'https://restcountries.eu/rest/v2/name';

// const fetchCountry = country => fetch(`${BASE_URL}/${country}`).then(response => response.json());



// function fetchCountry(country){
//     fetch(`${BASE_URL}/${country}`).then((response) =>{
//     return response.json()
// })
// }

// fetchCountry(u).then(renderCountryCard).catch((error) => console.log(error))
//--------------------------------------------



// function fetchCountry(name){
//     name = "usa"
//     fetch(`https://restcountries.eu/rest/v2/name/${name}`).then((response) =>{
//     return response.json()
// })
// .then(renderCountryCard)
// .catch((error) =>{
//     console.log(error)
// });
// }
// fetchCountry();





//------------------------------notificashca
// import { info, notice } from "@pnotify/core";
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import * as Confirm from "@pnotify/confirm";
// import "@pnotify/confirm/dist/PNotifyConfirm.css";
// console.log(notice)

// function click() {
//     info({
//       title: "Button Clicked",
//       text:
//         "You have clicked the button. You may now complete the process of reading the notice.",
//       modules: new Map([
//         [
//           Confirm,
//           {
//             confirm: true,
//             buttons: [
//               {
//                 text: "Ok",
//                 primary: true,
//                 click: notice => {
//                   notice.close();
//                 }
//               }
//             ]
//           }
//         ]
//       ])
//     });
//   }

//   const a = document.querySelector('.form-btn');

//   a.addEventListener('click', click)

 





