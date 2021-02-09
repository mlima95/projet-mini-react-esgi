import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";
import {Button} from "./src/Component/Button.js";
import {NavBar} from "./src/Component/NavBar.js";

let buttonComponent1 = React.createEl('nav', {title: "item1"}, "toto")
// let buttonComponent2 = React.createEl('nav', {title: "item2"}, buttonComponent1)
// let buttonComponent3 = React.createEl('div', {title: "item3"}, buttonComponent2)

let buttonComponent5 = React.createEl(NavBar)

 ReactDom.render(document.getElementById('root'), buttonComponent1)