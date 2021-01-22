export default class Component {

    constructor(props) {
        this.props = props;
    }

    shouldComponentUpdate(nextProps, nextState){
        return JSON.stringify(nextProps) !== JSON.stringify(nextState);
    }

}