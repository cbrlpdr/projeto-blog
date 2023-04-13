import { Component } from 'react';
import './styles.css';
import P from 'prop-types';

export class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return <button onClick={onClick}>{text}</button>;
    }
}

Button.propTypes = {
    text: P.string,
    onClick: P.func.isRequired,
};
