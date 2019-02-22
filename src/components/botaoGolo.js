import React from 'react';

export default class BotaoGolo extends React.Component {
    handleClick(e) {
        e.preventDefault();
        this.props.marcarGolo();
    }

    render() {
        return (
            <button
                onClick={this.handleClick.bind(this)}
            >
                Golo!
            </button>
        );
    }
}