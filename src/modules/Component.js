export default class Component {

    constructor(state) {
        this.state = state;
        this.state = undefined;
    }

    // optionnel si il n'y a pas de state
    // setState(prevState, currentState) {
    //     if(this.shouldUpdate(prevState, currentState)){
    //         prevState = Object.assign({}, this.prevState);
    //         this.state = Object.assign({}, currentState);
    //     }
    // }

    // // regénérer ou non prevProps undefined
    // display(props) {
    //     //if shouldUpdate appeler
    //     if (this.shouldUpdate()) console.log("Je should update");
    // }

    // // vérification si on appel ou non la méthode render
    // // il stocke l'ancien prevRender
    // shouldUpdate(nextProps, nextState) {
    //     return JSON.stringify(nextProps) !== JSON.stringify(nextState);
    // }

    render() {
        React.createEl()
    };

}