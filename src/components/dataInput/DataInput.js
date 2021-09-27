import React, {Component} from "react";
import style from "./DataInput.module.css";
import shortid from 'shortid';

class DataInput extends Component {
    loginInputId = shortid.generate();

    render() {
        return (
            <form className={style.form}>
                <label htmlFor={this.loginInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={style.name}
                        id={this.loginInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required

                    />
                </label>
                <label htmlFor={this.loginInputId}>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={style.number}
                        id={this.loginInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <button type="button" className={style.btn}>Add contact</button>
            </form>
        )
    }
}

export default DataInput;