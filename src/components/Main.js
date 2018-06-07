import React from 'react';
import ImportSync from './ImportSync';
import ImportAsync from './ImportAsyncWrapper';

const Main = () => (
    <div>
        <h1>Main module</h1>
        <ImportSync />
        <ImportAsync />
    </div>
);

export default Main;