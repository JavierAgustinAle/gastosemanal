import React from 'react'


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

export default Gasto;