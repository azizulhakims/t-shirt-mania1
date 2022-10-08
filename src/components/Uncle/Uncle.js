import React from 'react';
import { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [land, setLand] = useContext(RingContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <p><small>house:{house}</small></p>
            <h4>Uncle</h4>
            <button onClick={() => setLand(land-1)}>Decrease</button>
            <p><small>Money {money}</small></p>
        </div>
    );
};

export default Uncle;