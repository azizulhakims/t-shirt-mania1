import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';


export const RingContext = createContext('Matir Ring')
export const MoneyContext = createContext(555);

const Grandpa = () => {

    const [land, setLand] = useState(1);

    const [money, setMoney] = useState(555);

    const house = 7;
    const ring = 'diamond ring'
    return (
        <RingContext.Provider value={[land, setLand]}>
           <MoneyContext.Provider value={[money, setMoney]}>
           <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
           </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;