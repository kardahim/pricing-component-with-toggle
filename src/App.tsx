import React from 'react';

// styles
import './styles/app.scss';
import bgTopImage from './assets/images/bg-top.svg';
import bgBottomImage from './assets/images/bg-bottom.svg';

// components
import Toggle from './components/Toggle';
import Card from './components/Card';

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
        <Card name='card'
          header='Basic'
          amount={199.99}
          storageSize='500 GB'
          users={2}
          sendUp={3} />
        <Card name='card card--special'
          header='Professional'
          amount={249.99}
          storageSize='1 TB'
          users={5}
          sendUp={10} />
        <Card name='card'
          header='Master'
          amount={399.99}
          storageSize='2 TB'
          users={10}
          sendUp={20} />
      </div>
      <footer className="app__footer"></footer>
    </main>
  );
}

export default App;
