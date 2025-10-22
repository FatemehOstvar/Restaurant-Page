import "./styles.css";
import {print as home} from "./home.js"
import {print as menu} from "./menu.js"
import {print as contact} from "./contact.js"

home()

const container  = document.createElement('nav')
for (let i = 0; i < 3; i++) {
    container .addEventListener('click', (e)=> {
        if (e.target.matches('button')){
            console.log(1)
              const buttonName = e.target.textContent.trim().toLowerCase();
              if (typeof window[buttonName]==='function'){
                  window[buttonName]()
              }
              else{
                  console.warn(`no function found named ${buttonName}`)
              }
              buttonName()
        }
    })
}

