import React from 'react';
import News from '../News';
import { BrowserRouter as Router} from 'react-router-dom';

import PagesRouter from '../../pages/PagesRouter';

import './App.css';

function App() {
  return (
    <Router>
      <PagesRouter />
    </Router>
  );
}

export default App;
