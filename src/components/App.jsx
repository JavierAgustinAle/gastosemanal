import React, { Component } from 'react';
import '../css/App.css';

// Components
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';

// Helper
import { validarPresupuesto } from '../helper/helper'

class App extends Component {

  state = {
    presupuesto: '',
    gastos: {},
    restante: ''
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto() {
    let presupuesto = prompt('Cual es tu presupuesto?');

    let resultado = validarPresupuesto(presupuesto)
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }
  }

  //Agregar gasto al state
  agregarGasto = gasto => {
    const gastos = { ...this.state.gastos }

    // agregos el gasto al state con la fecha para que no se repitan
    gastos[`gastos${Date.now()}`] = gasto;

    this.restarPresupuesto(gasto.totalGasto);

    this.setState({
      gastos
    })
  }

  // Al crear un gasto lo restamos del restante

  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);
    let restante = this.state.restante;

    restante -= restar;
    // Restante del state le pongo como valor el resultado de la resta.
    this.setState({
      restante: restante
    })
  }

  render() {
    return (
      <>
        <div className="App container">
          <Header
            titulo='Gasto Semanal'
          />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Formulario
                  agregarGasto={this.agregarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={this.state.gastos}
                />
                <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                />
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }

}

export default App;
