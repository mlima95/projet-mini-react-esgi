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
let buttonComponent1 = React.createEl('div', {title: "item1"}, "toto")
let buttonComponent2 = React.createEl('nav', {title: "item1"}, "toto")
let buttonComponent3 = React.createEl(Button, {title: "item1"}, "toto")

// let buttonComponent = React.createEl(button, {title: "item1"}, "toto");

// ReactDom.render(document.getElementById('root'), buttonComponent)
