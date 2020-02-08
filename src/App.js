import React from 'react';
import './assets/css/App.scss';
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <Main greet={'I am Main'} />
    </div>
  );
}

export default App;
