import './sass/main.scss';
import cardTemplate from './templates/card.hbs';
import countriesList from './templates/countriesList.hbs'
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

import { info, notice, alert, error} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const debounce = require('lodash.debounce');

 const refs = getRefs();
refs.formInput.addEventListener('input', debounce(() => {
    onInput();
  }, 500));

function onInput(evt){З
    const inputValue = refs.formInput.value;
    console.log(inputValue)

    API.fetchCountries(inputValue)
   .then(checkNumberOfCountries)
   .catch(onFetchError)
}

function onFetchError(){
    error({
        title: "Ошибка",
        text: "Страна не найдена",
        autoOpen: true,
        minHeight: '16px',
        maxTextHeight: null,
        animateSpeed: 'normal',
        shadow: true,
        delay: 1500
    })
    
}

function renderCountryCard(country){
    console.log(country)
    const markUp = cardTemplate(country[0]);
    refs.card.innerHTML = markUp;

}

function renderCounthiesList(country){
     const markUpList = countriesList(country);
     refs.card.innerHTML = markUpList;
}

function checkNumberOfCountries (countries){
    if(countries.length < 10 && countries.length > 1){
        clearMarkUp();
        renderCounthiesList(countries);
        console.log(countries);
    }
     else if (countries.length === 1){
        clearMarkUp();
        renderCountryCard(countries);
    }
     else if(countries.length > 10){
        clearMarkUp();
        alert({
            title: "Ошибка",
            text: "Слишком много совпадений",
            autoOpen: true,
            minHeight: '16px',
            maxTextHeight: null,
            animateSpeed: 'normal',
            shadow: true,
            delay: 1500
        })

     }
     else{
        clearMarkUp();
        onFetchError();
    }

    
}

function clearMarkUp(){
    refs.card.innerHTML = "";
}



 





