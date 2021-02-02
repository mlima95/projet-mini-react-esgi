import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";
import {Button} from "./src/Component/Button.js";

// let test = React.createEl('button', {
//     'id': 'testButton',
//     'class': 'btn btn-primary'
// }, "content", React.createEl('ul', {
//     'id': 'test',
//     'class': 'btn btn-primary'
// }, "testul"));
let buttonComponent1 = React.createEl('nav', {title: "item1"}, "toto")
let buttonComponent2 = React.createEl('nav', {title: "item2"}, buttonComponent1)
let buttonComponent3 = React.createEl('div', {title: "item3"}, buttonComponent2)

let buttonComponent4 = React.createEl(Button, {title: "item1"}, "toto")

//console.log(buttonComponent1);

 ReactDom.render(document.getElementById('root'), buttonComponent3)