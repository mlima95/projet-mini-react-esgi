import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";
import {ReactDom} from "../Modules/ReactDom.js";

export class Header extends Component {

    state = {
        geolocation: null
    }


    render() {
        const click = () => {
            function success(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sessionStorage.setItem('geolocation', `Latitude: ${latitude} °, Longitude: ${longitude} °`);
            }

            navigator.geolocation.getCurrentPosition(success);
            this.setState({geolocation: sessionStorage.getItem("geolocation")})
            ReactDom.render(document.getElementById('root'), React.createEl("h3", {}, this.state.geolocation));
        };

        return React.createEl(
            "header",
            {class: "blog-header py-3"},
            React.createEl(
                "div",
                {class: "row flex-nowrap justify-content-between align-items-center"},
                [
                    React.createEl(
                        "div",
                        {class: "col-4 pt-1"},
                        React.createEl(
                            "a",
                            {class: "link-secondary"},
                            'Souscrivez à un abonnement',
                        ),
                    ),
                    React.createEl(
                        "div",
                        {class: "col-4 text-center"},
                        React.createEl(
                            "a",
                            {class: "blog-header-logo text-dark", href: "/"},
                            'Le journal de Manu',
                        ),
                    ),
                    React.createEl(
                        "div",
                        {class: "col-4 d-flex justify-content-end align-items-center"},
                        React.createEl(
                            "a",
                            {class: "btn btn-sm btn-outline-secondary"},
                            'Où est ma brigitte ?',
                            [click]
                        ),
                    ),
                ]
            ),
        )
    }
}