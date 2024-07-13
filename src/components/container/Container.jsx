import React from 'react';

const Container = ({ children }) => {
    return (
        <section className='px-6 my-4'>
            {children}
        </section>
    );
};

export default Container;