import React from 'react';
import { hot } from 'react-hot-loader';

import Main from './components/Main';

const HotMain = hot(module)(Main);

const App = <HotMain />;

export default App;

