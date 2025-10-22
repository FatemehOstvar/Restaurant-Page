import homeImg from './img/home.jpg';

export function home(home){
    const content = document.querySelector('#content')
    home.classList.add('theme1')
    if (!home.hasChildNodes()){
    const header = document.createElement('h1')
    header.classList.add('centeredText')
    header.textContent = "Welcome To OLC ! Your Vegan Restaurant"
    const img = document.createElement('img')
    img.src= homeImg;
    img.id="frontPage"

     home.append(header,img)
     content.appendChild(home)
    }
}

