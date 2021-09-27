import React, {Component} from "react";
import ContactItem from "./contactItem/ContactItem";

class Contacts extends Component {
    render() {
        return (
            <ul>
                <ContactItem />
            </ul>
        );
    }
}

export default Contacts;