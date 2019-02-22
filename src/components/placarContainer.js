import React from 'react';
import Equipa from './equipa.js';
import Partida from './partida.js';

export default class PlacarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            golosCasa: 0,
            golosVisitante: 0
        }
    }

    marcarGoloCasa() {
        this.setState({
            golosCasa: this.state.golosCasa + 1
        });
    }

    marcarGoloVisitante() {
        this.setState({
            golosVisitante: this.state.golosVisitante + 1
        });
    }

    render() {
        return (
             <div className="global-container">
                <div className="equipa-container">
                    <h3>Casa</h3>
                    <Equipa 
                        nome={this.props.casa.nome}
                        golos={this.state.golosCasa}
                        marcarGolo={this.marcarGoloCasa.bind(this)}
                    />
                </div>
                <div className="partida-container">
                    <Partida
                        estadio={this.props.partida.estadio}
                        data={this.props.partida.data}
                        hora={this.props.partida.hora}
                    />
                </div>
                <div className="equipa-container">
                    <h3>Visitante</h3>
                    <Equipa 
                        nome={this.props.visitante.nome}
                        golos={this.state.golosVisitante}
                        marcarGolo={this.marcarGoloVisitante.bind(this)}
                    />
                </div>
             </div>
        );
    }
}