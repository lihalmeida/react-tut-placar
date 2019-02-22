import React from 'react';
import PlacarContainer from './placarContainer.js';

const dados = {
    partida: {
        estadio: 'Dragão',
        data: '19/05/2019',
        hora: '19h00'
    },
    casa: {
        nome: 'F.C.Porto'
    },
    visitante: {
        nome: 'Sporting C.P.'
    }
};

export default class App extends React.Component {
    render() {
        return (
            <PlacarContainer 
                partida={dados.partida}
                casa={dados.casa}
                visitante={dados.visitante}
            />
        );
    }
}