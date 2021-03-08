import React from 'react';

const Price = ({amount, decimals}) => {
    return (
        <>
            $ {new Intl.NumberFormat().format(amount)}
            { decimals ? <sup>{`${decimals.toFixed(2)}`.split(".")[1]}</sup> : null }
        </>
    );
}

export default Price;