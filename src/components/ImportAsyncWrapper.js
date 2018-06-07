import React from 'react';
import loadable from 'loadable-components';

const ImportAsync = loadable(() => import(/* webpackChunkName: "async-component" */ './ImportAsync'));

export default ImportAsync;