import "./styles.css";
import {home} from "./home.js"
import {menu} from "./menu.js"
import {contact} from "./contact.js"
let nav_actions= {home,menu,contact }
const header = document.querySelector('header')
const nav = document.createElement('nav')
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');


homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact Us";

homeButton.dataset.action = "home";
menuButton.dataset.action = "menu";
contactButton.dataset.action = "contact";

const menuC = document.createElement('div');
const homeC = document.createElement('div');
const contactC = document.createElement('div');

menuC.id = 'menuC';
homeC.id = 'homeC';
contactC.id = 'contactC';
const pages= [homeC,menuC,contactC]


const bttns=[homeButton,menuButton,contactButton]

nav.append(...bttns);
header.append(nav)
nav.addEventListener('click', (e)=> {
        if (e.target.matches('button')){
            const btn = e.target;
            // console.log(btn) // <button>menu<button>
            const key = btn.dataset.action
            const func = nav_actions[key];
            for (let i = 0; i < bttns.length; i++) {
                if (bttns[i].dataset.action !==key){
                    bttns[i].id =  ''
                    removepage(pages[i])
                }
                else{
                    bttns[i].id = key
                    func(pages[i])
                }
            }
        }
    })

homeButton.click()

function removepage(page){
    const content = document.querySelector('#content')
    page.classList.remove('theme1')
    if(page.hasChildNodes()){
        page.replaceChildren()
        if (content.contains(page)){
        content.removeChild(page)}
    }
}
