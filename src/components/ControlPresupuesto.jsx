import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default ControlPresupuesto;