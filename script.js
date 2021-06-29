const baseurl = 'https://api.nasa.gov/planetary/apod';
const key = 'hpSt2ml4aHqn4rALidNaK6eu1a9CVx9tFBTimxP2';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');

fetch(`${baseurl}?api_key=${key}`) //first paramater is seperated by '?' any others after will be seperated by '&'
    .then(response => response.json())
    .then(json => displayImage(json));



function displayImage(data){
    console.log(data);

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = data.hdurl;

    let title= document.createElement('h1');
    title.className = 'card-title';
    title.innerText = data.title;
    title.style = 'font-family: space-age;';

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = data.date;
    date.style.fontFamily = 'kiona-regular';

    let expl = document.createElement('p');
    expl.innerText = data.explanation;
    expl.style.fontFamily = 'kiona-regular';

    moreInfoBtn.style.fontFamily = 'kiona-regular';

    modalBody.innerText = data.title;
    modalTitle.style.fontFamily = 'sapce-age';

    
    card.insertBefore(img, cardBody);
    cardBody.insertBefore(title, moreInfoBtn);
    cardBody.insertBefore(date, moreInfoBtn);
    modalBody.appendChild(expl);

    moreInfoBtn.style.fontFamily = 'kiona-regular';






}