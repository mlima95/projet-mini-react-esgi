function render(rootElement, createObject) {
    console.log('on rentre dans render')
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
        console.log('aucun enfant')
    }

    let newContent = document.createTextNode(createObject.content);
    myElement.appendChild(newContent);

    console.log(myElement)

    //génération du DOM
    return (
        myElement.forEach(element => {
            rootElement.appendChild(element)
        })
    )

}


export const ReactDom = {
    render
}