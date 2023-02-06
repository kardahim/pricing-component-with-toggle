import React from 'react';

// styles
import './styles/app.scss';
import bgTopImage from './assets/images/bg-top.svg';
import bgBottomImage from './assets/images/bg-bottom.svg';
import Toggle from './components/Toggle';

function App() {
  return (
    <main className="app">
      <img
        src={bgTopImage}
        alt="background top"
        className="app__image app__image--top"
      />
      <img
        src={bgBottomImage}
        alt="background bottom"
        className="app__image app__image--bottom"
      />
      <h1 className="app__header">Our Pricing</h1>
      <div className="app__toggle">
        <span>Annualy</span>
        <Toggle />
        <span>Monthly</span>
      </div>
      <div className="app__cards">
        {/* TODO: add three cards components */}
      </div>
      <footer className="app__footer"></footer>
    </main>
  );
}

export default App;
