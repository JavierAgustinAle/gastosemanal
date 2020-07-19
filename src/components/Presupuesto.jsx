import React from 'react'

const Presupuesto = (props) => {
    return (
        <div className="alert alert-primary">
            Presupuesto: $ {props.presupuesto}
        </div>
    )
}

export default Presupuesto;