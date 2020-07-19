import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Gasto from './Gasto';

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {
                    Object.keys(this.props.gastos).map(key => (
                        <Gasto
                            gasto={this.props.gastos[key]}
                            key={key}
                        />
                    ))
                }
            </div>
        )
    }
}

Listado.propType = {
    gasto: PropTypes.object.isRequired
}
export default Listado;