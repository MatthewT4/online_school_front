import React from 'react';

const Ant = () => {
    let search = window.location.search
    return (
        <div>
            <p>{search}</p>
        </div>
    );
};

export default Ant;