import React from 'react';
import './ReservedAmount.scss'

function ReservedAmount(props) {
    return (
        <div className="reserved-amount"onClick={() => {props.setBuffer(props.value)}}>
            {props.value}$
        </div>
    );
}
export default ReservedAmount;