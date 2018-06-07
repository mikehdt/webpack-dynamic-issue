import React from 'react';
import loadable from 'loadable-components';

const ImportAsyncWrapper = loadable(() => import(/* webpackChunkName: "async-component" */ './ImportAsync'));

export default ImportAsyncWrapper;