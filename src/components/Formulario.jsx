import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    // refs para campos del form
    nombreGasto = React.createRef();
    totalGasto = React.createRef();

    crearGasto = e => {
        e.preventDefault();

        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            totalGasto: this.totalGasto.current.value
        }

        this.props.agregarGasto(gasto);

        e.currentTarget.reset();
    }


    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGasto} />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="number" placeholder="Ej. 300" ref={this.totalGasto} />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

// Indicamos que tipo de props se debe recibir
Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;