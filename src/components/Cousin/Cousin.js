import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <p><small>house:{house}</small></p>
            <h4>Cousin</h4>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;