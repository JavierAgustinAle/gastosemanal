import React from 'react';

//Helper
import { revisarPresupuesto } from '../helper/helper';

const Restante = (props) => {
    const presupuesto = props.presupuesto;
    const restante = props.restante;

    return (
        // Llamo al metodo que me devuelve un tipo de clase dependiendo cuanto se haya gastado del presupuesto
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {props.restante}
        </div>
    )
}

export default Restante;