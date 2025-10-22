import {appendChildren} from "./handy";

function print(){

const content = document.querySelector('#content')
content.textContent=''
const nav = document.createElement('nav')
const navButton_1 = document.createElement('button')
const menuButton = document.createElement('button')
menuButton.id= "menuButton"
const navButton_3 = document.createElement('button')

navButton_1.textContent= "Home";
menuButton.textContent= "Menu";
navButton_3.textContent= "Contact Us"
appendChildren(nav,navButton_1,menuButton,navButton_3);
appendChildren(content, nav);
}
export {print}