import React from 'react';
import PropTypes from 'prop-types';

const Presupuesto = (props) => {
    return (
        <div className="alert alert-primary">
            Presupuesto: $ {props.presupuesto}
        </div>
    )
}

Presupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;