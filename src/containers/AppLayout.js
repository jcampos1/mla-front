import React from 'react';
import Header from './Header';

const AppLayout = (props) => (
    <>
        <Header />
        {props.children}
    </>
);

export default AppLayout;