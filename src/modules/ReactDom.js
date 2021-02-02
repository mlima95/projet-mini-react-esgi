function render(rootElement, createObject) {
    let myElement = document.createElement(createObject.type);
    for (const property in createObject.attrbs) {
        myElement.setAttribute(property.toString(), createObject.attrbs[property].toString())
    }

    if (createObject.childElement != null && createObject.childElement != '') {
        if (createObject.childElement.length > 1) {
            createObject.childElement.forEach(element => {
                myElement.appendChild(element)
            });
        } else {
            console.log(createObject.childElement)
            myElement.appendChild(createObject.childElement);
        }
    } else {
    }

    let newContent = document.createTextNode(createObject.content);
    myElement.appendChild(newContent);

    console.log(myElement)

    //génération du DOM
    return (
        rootElement.appendChild(myElement)
    )

}


export const ReactDom = {
    render
}