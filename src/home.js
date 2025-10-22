import {appendChildren} from "./handy";
function print(){

const content = document.querySelector('#content')
content.textContent=''
const nav = document.createElement('nav')
const navButton_1 = document.createElement('button')
const homeButton = document.createElement('button')
homeButton.id= "homeButton"
const navButton_3 = document.createElement('button')

homeButton.textContent= "Home";
navButton_1.textContent= "Menu";
navButton_3.textContent= "Contact Us"// change the below code and add even listeners, then choos some pics and put up your website /
appendChildren(nav,navButton_1,homeButton,navButton_3);
appendChildren(content, nav);
}

export {print}