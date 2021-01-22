function createElem(type, attrbs, content, childElement) {

    let myElement = document.createElement(type);
    for (const property in attrbs) {
        myElement.setAttribute(property.toString(), attrbs[property].toString())
    }

    if (childElement != null && childElement != '') {
        if (childElement.length > 1) {
            childElement.forEach(element => {
                myElement.appendChild(element)
            });
        } else {
            myElement.appendChild(childElement);
        }
    } else {
        console.log('null')
    }

    let newContent = document.createTextNode(content);
    myElement.appendChild(newContent);
    return myElement;
}

export const React = {
    createElem,
    render: function (pElement, cElement) {
        cElement.forEach(element => {
            pElement.appendChild(element)
        });
    }
}
