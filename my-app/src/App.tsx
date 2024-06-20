import React from 'react';
import './styles.css';
import Counter from './Counter';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div id="content" className="background">
      <div id="main-page">
        <Counter />
      </div>
      <div id="tab1" className="tab-content">Эти ваши игры сука подзалупные</div>
      <div id="tab2" className="tab-content">Профиль твой собака ты сутулая</div>
      <Footer />
    </div>
  );
}

export default App;
