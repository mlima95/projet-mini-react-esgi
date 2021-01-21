export default class Component {

    constructor() {
        console.log('casse toi Mathieu Robert 🖕🏻')
    }

    render = (pElement, cElement) => {
        cElement.forEach(element => {
            pElement.appendChild(element)
        });
    }

    createElem = (type, attrbs, content, children) => {
        let myElement = document.createElement(type);
        for (const property in attrbs) {
            console.log(property);
            console.log(attrbs[property]);
            myElement.setAttribute(property.toString(), attrbs[property].toString())
        }
        let newContent = document.createTextNode(content);
        myElement.appendChild(newContent);
        return myElement;
    }

}