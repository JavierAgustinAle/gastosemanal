import React from 'react';
import PropTypes from 'prop-types';

//Helper
import { revisarPresupuesto } from '../helper/helper';

const Restante = (props) => {
    const presupuesto = props.presupuesto;
    const restante = props.restante;
    if (restante < 0) {
        alert('Ya ha gastado el total del presupuesto!')
    }
    return (
        // Llamo al metodo que me devuelve un tipo de clase dependiendo cuanto se haya gastado del presupuesto
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {props.restante}
        </div>
    )
}

Restante.propType = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default Restante;