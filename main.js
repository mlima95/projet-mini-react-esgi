import Component from './src/modules/Component.js'

class Button extends Component {
    render() {
        return (
            document.getElementById('root'), [
                MiniReact.createElem('div', {'id': '1', 'class': 'test'}, 'content'),
                MiniReact.createElem('div'),
            ]
        );
    }
}

console.log(Component)


// let ReactDom = {
//     render: function (pElement, cElement) {
//         cElement.forEach(element => {
//             pElement.appendChild(element)
//         });
//     }
// }
//
// let MiniReact = {
//     createElem: function(type, attrbs, content) {
//
//         let myElement = document.createElement(type);
//         for (const property in attrbs) {
//             console.log(property);
//             console.log(attrbs[property]);
//             myElement.setAttribute(property.toString(), attrbs[property].toString())
//         }
//         let newContent = document.createTextNode(content);
//         myElement.appendChild(newContent);
//         return myElement;
//     }
// }
//
// ReactDom.render(
//     document.getElementById('root'), [
//         MiniReact.createElem('div', {'id': '1', 'class': 'test'}, 'content'),
//         MiniReact.createElem('div'),
//     ]
// )