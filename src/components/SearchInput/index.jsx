import { Component } from "react";
import "./styles.css";

export class SearchInput extends Component {
    render() {
        const {handleChange, searchValue} = this.props;
        return (<input type="search"
        placeholder="Search 🔎"
        onChange={handleChange}
        value={searchValue}
        ></input>);
    };
}