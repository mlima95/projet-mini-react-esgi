function render(rootElement, createObject) {
    console.log("first root",rootElement);
    if(typeof createObject.type === 'object')
    {
        console.log('obj')
    }
    else
    {
        let myElement = document.createElement(createObject.type);
        for (const prop in createObject.props) {
            myElement.setAttribute(prop.toString(), createObject.props[prop].toString())
        }

        if (typeof createObject.childElement === 'string') {
            let nodeText = document.createTextNode(createObject.childElement);
            myElement.appendChild(nodeText);
        }
        else if(createObject.childElement === undefined)
        {
            console.log('pas d\'enfant')
        }
        else
        {
            console.log(createObject.childElement);
            console.log(rootElement);
            render(myElement, createObject.childElement);
            // console.log(createObject.childElement)
            // createObject.childElement.forEach(element => {
            //     myElement.appendChild(childElement)
            // });
        }
        //génération du DOM
        return (
            rootElement.appendChild(myElement)
        )
    }








    // let myElement = document.createElement(createObject.type);
    // for (const property in createObject.attrbs) {
    //     myElement.setAttribute(property.toString(), createObject.attrbs[property].toString())
    // }

    // if (createObject.childElement != null && createObject.childElement != '') {
    //     if (createObject.childElement.length > 1) {
    //         createObject.childElement.forEach(element => {
    //             myElement.appendChild(element)
    //         });
    //     } else {
    //         console.log(createObject.childElement)
    //         myElement.appendChild(createObject.childElement);
    //     }
    // } else {
    // }

    // let newContent = document.createTextNode(createObject.content);
    // myElement.appendChild(newContent);

    // console.log(myElement)

    // //génération du DOM
    // return (
    //     rootElement.appendChild(myElement)
    // )
}


export const ReactDom = {
    render
}