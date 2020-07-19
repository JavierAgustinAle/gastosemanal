import React, { Component } from 'react'

// Components
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends Component {
    render() {
        return (
            <div>
                <Presupuesto
                    presupuesto={this.props.presupuesto}
                />
                <Restante
                    restante={this.props.restante}
                    presupuesto={this.props.presupuesto}
                />
            </div>
        )
    }
}

export default ControlPresupuesto;