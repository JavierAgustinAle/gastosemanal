import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';

class App extends Component {

  state = {
    presupuesto: '',
    gastos: {},
    restante: ''
  }

  //Agregar gasto al state
  agregarGasto = gasto => {
    const gastos = { ...this.state.gastos }

    // agregos el gsto al state con la fecha para que no se repitan
    gastos[`gastos${Date.now()}`] = gasto;

    this.setState({
      gastos
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
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }

}

export default App;
