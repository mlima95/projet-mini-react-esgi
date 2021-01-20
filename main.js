let ReactDom = {
    render: function (pElement, cElement) {
        cElement.forEach(element => {
            pElement.appendChild(element) 
        });
    }
}

let createComponent = {
    createElem: function(type) {

        let myElement = document.createElement(type);
        let newContent = document.createTextNode('test');
        myElement.appendChild(newContent);
        return myElement;
    }
}

ReactDom.render(
        document.getElementById('root'), [
            createComponent.createElem('div'), 
            createComponent.createElem('div'),
        ]
)