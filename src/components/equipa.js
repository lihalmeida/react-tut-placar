import React from 'react';
import BotaoGolo from './botaoGolo.js';

export default class Equipa extends React.Component {
    render() {
        return (
            <div className="equipa-info">
                <h1>{this.props.nome}</h1>
                <h2>{this.props.golos}</h2>
                <BotaoGolo marcarGolo={this.props.marcarGolo} />
            </div>
        );
    }
}