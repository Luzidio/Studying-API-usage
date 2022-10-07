const hash = 'ce707ceda2af14d2fec01170daddb6f8'
const timeStamp = '1662129130'
const apiKey = 'f9a2e06fdf062b1e59a9c970ded738c2'

const requestURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`

const main = document.querySelector('.main');
const boxSearch = document.querySelector('.bx-search');
const search = document.querySelector('.search');
const form = document.querySelector('#form');

getMovies(requestURL);
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.data.results);
      
    })
}