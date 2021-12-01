// language passed in url via string query
let userLang = new URLSearchParams(window.location.search).get('lang');
if (!userLang)
    // detecting user's browser language
    userLang = navigator.language.slice(0, 2);
var initPayload = 'chat ' + userLang;     
let lang = { en: "en", pt: "pt", ru: "ru", es: "es", it: "it", kk: "kk", el: "el", uz: "uz", pl: "pl" }   
var buttonText = '';
var inputText = '';

let btnText = { 
    en: "Ask your Covid-19 question",
    pt: "Faça sua pergunta Covid-19",
    ru: "Задайте свой вопрос о Covid-19",
    es: "Haz tu pregunta sobre Covid-19",
    it: "Fai la tua domanda sul Covid-19",
    kk: "Ковид-19 сұрағыңызды қойыңыз",
    el: "Κάντε την ερώτησή σας για τον Covid-19",
    uz: "Covid-19 bo'yicha savolingizni bering",
    pl: "Zadaj pytanie dotyczące Covid-19"
};   

let txtText = { 
    en: "Type your question here",
    pt: "Digite sua pergunta aqui",
    ru: "Напечатайте свой вопрос здесь",
    es: "Escribe tu pregunta aqui",
    it: "Scrivi la tua domanda qui",
    kk: "Сұрағыңызды осы жерге теріңіз",
    el: "Πληκτρολογήστε την ερώτησή σας εδώ",
    uz: "Savolingizni shu yerga yozing",
    pl: "Wpisz tu swoje pytanie"
};  

switch(userLang) {
    case lang.pt:
        buttonText = btnText.pt;
        inputText = txtText.pt;
        break;
    case lang.ru:
        buttonText = btnText.ru;
        inputText = txtText.ru;
        break;
    case lang.es:
        buttonText = btnText.es;
        inputText = txtText.es;
        break;
    case lang.it:
        buttonText = btnText.it;
        inputText = txtText.it;
        break;
    case lang.kk:
        buttonText = btnText.kk;
        inputText = txtText.kk;
        break;
    case lang.el:
        buttonText = btnText.el;
        inputText = txtText.el;
        break;
    case lang.uz:
        buttonText = btnText.uz;
        inputText = txtText.uz;
        break;
    case lang.pl:
        buttonText = btnText.pl;
        inputText = txtText.pl;
        break;
    default:
        buttonText = btnText.en;
        inputText = txtText.en;
}