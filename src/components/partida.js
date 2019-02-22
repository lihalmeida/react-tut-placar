import React from 'react';

export default class Partida extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.estadio}</h4>
                <div>
                    <span>{this.props.data}</span>
                    <span>-</span>
                    <span>{this.props.hora}</span>
                </div>
            </div>
        );
    }
}