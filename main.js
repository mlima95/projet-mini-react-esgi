let ReactDom = {
    render: function (pElement, cElement) {
        cElement.forEach(element => {
            pElement.appendChild(element) 
        });
    }
}

let createComponent = {
    createElem: function(type, attrbs, content) {

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

ReactDom.render(
        document.getElementById('root'), [
            createComponent.createElem('div', {'id': '1', 'class': 'test'}, 'content'), 
            createComponent.createElem('div'),
        ]
)