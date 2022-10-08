import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [land, setLand] = useContext(RingContext)
    return (
        <div>
            <p><small>{land}</small></p>
            <button onClick={() => setLand(land +1)}>Increase</button>
            <h4>Friend</h4>
        </div>
    );
};

export default Friend;