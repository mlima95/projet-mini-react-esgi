export default class Component {

    constructor(props) {
        this.props = props;
    }

    // createElem = (type, attrbs, content, children) => {
    //     let myElement = document.createElement(type);
    //     for (const property in attrbs) {
    //         console.log(property);
    //         console.log(attrbs[property]);
    //         myElement.setAttribute(property.toString(), attrbs[property].toString())
    //     }
    //     let newContent = document.createTextNode(content);
    //     myElement.appendChild(newContent);
    //     return myElement;
    // }

    MiniReact = {
        createElem: function (type, attrbs, content) {

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

    render = (pElement, cElement) => {
        cElement.forEach(element => {
            pElement.appendChild(element)
        });
    }

}