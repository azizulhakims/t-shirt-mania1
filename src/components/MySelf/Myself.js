import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ring}) => {
    return (
        <div>
            <small>Hosue: {house}</small>
            <h4>Myself</h4>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;