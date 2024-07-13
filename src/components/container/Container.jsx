import React from 'react';

const Container = ({ children }) => {
    return (
        <section className='px-4 md:px-6 my-4'>
            {children}
        </section>
    );
};

export default Container;