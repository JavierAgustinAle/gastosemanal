import React from 'react';
import PropTypes from 'prop-types';


const Gasto = (props) => {
    return (
        <li className="gastos">
            <p>
                {props.gasto.nombreGasto}
                <span className="gasto">
                    $ {props.gasto.totalGasto}
                </span>
            </p>
        </li>
    )
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;