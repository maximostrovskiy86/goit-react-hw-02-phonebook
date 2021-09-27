import React, {Component} from "react";
import style from "./App.module.css";
import DataInput from "./dataInput/DataInput";
import Contacts from "./contacts/Contacts";
import Section from "./section/Section";

class App extends Component {
    state = {
        contacts: [],
        name: '',
    }

    addUser = (e) => {

    }

    render() {
        return (
            <div className={style.app}>
                <Section title="Phonebook">
                    <DataInput/>
                </Section>
                <Section title="Contacts">
                    <Contacts/>
                </Section>
            </div>
        );
    }
}

export default App;
