import {appendChildren} from "./handy";

function print(){

const content = document.querySelector('#content')
content.textContent=''
const nav = document.createElement('nav')
const navButton_1 = document.createElement('button')
const contactButton = document.createElement('button')
contactButton.id= "contactButton"
const navButton_2 = document.createElement('button')

navButton_1.textContent= "Home";
navButton_2.textContent= "Menu";
contactButton.textContent= "Contact Us"
appendChildren(nav,navButton_1,navButton_2,contactButton);
appendChildren(content, nav);
}
export {print}