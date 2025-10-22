import wall  from  "./img/wall.jpg"
export function contact(contact){
    const content = document.querySelector('#content')
    contact.classList.add('theme1')
    if (!contact.hasChildNodes()){
    const header = document.createElement('h1')
    header.classList.add('centeredText')
    header.textContent = "Contact Us"
    const text = document.createElement('p')
    text.textContent = 'We are at Rasht, Golsar, 9th avenue.\ntel: 013-3347-1429';
    text.classList.add('contact_text')
    const figure = document.createElement('figure')
    const figureC = document.createElement('figcaption')
    figureC.innerHTML= 'Photo by <a href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Cagle</a> on <a href="https://unsplash.com/photos/a-woman-sitting-at-a-table-looking-at-her-cell-phone-eL4xIEuHzzk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>\n'
    const img = document.createElement('img')
    img.src= wall;
    img.id="wall"

    figure.append(img,figureC)
     contact.append(header,text ,figure)
     content.appendChild(contact)
    }
}


