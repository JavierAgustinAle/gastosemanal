import React, { Component } from 'react'
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

export default Listado;