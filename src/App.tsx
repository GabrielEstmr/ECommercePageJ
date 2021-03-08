import React from 'react';
import 'dotenv/config';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';

import HomePage from './pages/HomePage/index';


const App: React.FC = () => (
  <>
    <HomePage></HomePage>
    <GlobalStyle />
  </>
);

export default App;