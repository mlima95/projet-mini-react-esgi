export default class Component {

    constructor(state) {
        this.state = state;
        this.state = undefined;
    }

    // optionnel si il n'y a pas de state
    // a chaque fois trigger les events
    // event catcher par reactDom
    setState(prevState, currentState) {
        if (this.shouldUpdate(prevState, currentState)) {
            console.log('je setState');
            prevState = Object.assign({}, this.prevState);
            this.state = Object.assign({}, currentState);
            console.log(prevState);
            console.log(this.state);
            this.render()
        }
    }

    // regénérer ou non prevProps undefined
    display(props) {
        //if shouldUpdate appeler
        if (this.shouldUpdate()) console.log("Je should update");
    }

    // vérification si on appel ou non la méthode render
    // il stocke l'ancien prevRender
    shouldUpdate(nextProps, nextState) {
        return JSON.stringify(nextProps) !== JSON.stringify(nextState);
    }

    render() {
        react.createEl()
    };

}