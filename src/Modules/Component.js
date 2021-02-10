export default class Component {

    constructor(props) {
        this.props = props;
        this.state = {};
        this.oldState = undefined;
        this.oldProps = undefined;
        this.previewRender = undefined;
    }

    // optionnel si il n'y a pas de state
    setState(currentState) {
        //console.log(currentState);
        this.oldState = Object.assign({}, this.state);
        this.state = Object.assign({}, this.state, currentState);
    }

    // // regénérer ou non prevProps undefined
    display(props) {
        this.oldProps = Object.assign({}, this.props);
        this.props = props;
        //if shouldUpdate appeler
        //console.log('this.shouldUpdate() : ' + this.shouldUpdate(this.oldProps, this.props, this.oldState, this.state))
        if (this.shouldUpdate(this.oldProps, this.props, this.oldState, this.state)) {
            this.previewRender = this.render();
        }
        return this.previewRender;
    }

    // // vérification si on appel ou non la méthode render
    // // il stocke l'ancien prevRender
    shouldUpdate(prevProps, nextProps, prevState, nextState) {
        return (JSON.stringify(prevState) !== JSON.stringify(nextState)) || (JSON.stringify(prevProps) !== JSON.stringify(nextProps));
    }

    render() {
        throw new Error("Abstract method");
    };

}