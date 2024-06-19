import React, { useState, useEffect } from 'react';
import './styles.css';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('main-page');

  const handleMainButtonClick = () => {
    setCounter(counter + 1);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const mainButton = document.getElementById('main-button');
    const counterDisplay = document.getElementById('counter');

    if (mainButton && counterDisplay) {
      mainButton.classList.add('clicked');
      counterDisplay.classList.add('animate-counter');
      setTimeout(() => {
        mainButton.classList.remove('clicked');
        counterDisplay.classList.remove('animate-counter');
      }, 200);
    }
  }, [counter]);

  return (
    <div id="content" className="background">
      <div id="main-page" style={{ display: activeTab === 'main-page' ? 'block' : 'none' }}>
        <div id="counter">{counter}</div>
        <button id="main-button" onClick={handleMainButtonClick}>
          Loot
        </button>
      </div>
      <div id="tab1" className="tab-content" style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
        Эти ваши игры сука подзалупные
      </div>
      <div id="tab2" className="tab-content" style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
        Профиль твой собака ты сутулая
      </div>
      <footer>
        <button className="tab-button" onClick={() => handleTabClick('main-page')}>
          Click
        </button>
        <button className="tab-button" onClick={() => handleTabClick('tab1')}>
          Games
        </button>
        <button className="tab-button" onClick={() => handleTabClick('tab2')}>
          Profile
        </button>
      </footer>
    </div>
  );
};

export default App;
