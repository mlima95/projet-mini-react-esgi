import {React} from './src/modules/React.js';
import {ReactDom} from './src/modules/ReactDom.js'
import {Button} from "./src/Component/Button.js";
import route from "./src/Component/Router.js";
import {NavBar} from "./src/Component/NavBar.js";

// let buttonComponent4 = React.createEl(Button, {title: "item1", sexe: 'femme'}, on);
// let buttonComponent5 = React.createEl(Button, {title: "page2"}, "test page 2");

// route('/', 'home', null);
// route('/page1', 'template1', buttonComponent4);
// route('/page2', 'template2', buttonComponent5);


let buttonComponent1 = React.createEl('nav', {title: "item1"}, "toto")
// let buttonComponent2 = React.createEl('nav', {title: "item2"}, buttonComponent1)
// let buttonComponent3 = React.createEl('div', {title: "item3"}, buttonComponent2
let buttonComponent5 = React.createEl(NavBar)


ReactDom.render(document.getElementById('root'), buttonComponent1)

