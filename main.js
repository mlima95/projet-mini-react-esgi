let ReactDom = {
    render: function (pElement, cElement) {
        cElement.forEach(element => {
            pElement.appendChild(element) 
        });
    }
}

let createElement = {
    createElem: function(type, attrbs, content, childElement) {

        let myElement = document.createElement(type);
        for (const property in attrbs) {
            myElement.setAttribute(property.toString(), attrbs[property].toString())
        }

        if(childElement != null && childElement != ''){
            if(childElement.length > 1){
                childElement.forEach(element => {
                    myElement.appendChild(element)
                });
            }
            else{
                myElement.appendChild(childElement);
            }
        }else{
            console.log('null')
        }

        let newContent = document.createTextNode(content);
        myElement.appendChild(newContent);
        return myElement;
    }
}

ReactDom.render(
        document.getElementById('root'), [
            createElement.createElem('div', {'id': '1', 'class': 'test'}, 'content', 
                createElement.createElem('div', {'id': '2', 'class': 'test'}, 'content 2',
                    createElement.createElem('ul', {'id': '2', 'class': 'test'}, 'content 3', 
                        [
                            createElement.createElem('li', {'id': '2', 'class': 'test'}, 'content 3'),
                            createElement.createElem('li', {'id': '2', 'class': 'test'}, 'content 3'),
                            createElement.createElem('li', {'id': '2', 'class': 'test'}, 'content 3')
                        ]
                    )
                )
            ), 
            createElement.createElem('div', {'id': '2', 'class': 'test'}, 'content 2'),
            createElement.createElem('a', {'id': '3', 'class': 'test', 'href': 'https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute'}, 'content 3'),
        ]
)
