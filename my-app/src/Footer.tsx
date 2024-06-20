import React from 'react';

const Footer: React.FC = () => {
  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetTab = event.currentTarget.getAttribute('data-tab');
    document.querySelectorAll<HTMLElement>('#content > div').forEach(tab => {
      if (tab instanceof HTMLElement) {
        tab.style.display = tab.id === targetTab ? 'block' : 'none';
      }
    });
  };

  return (
    <footer>
      <button className="tab-button" data-tab="main-page" onClick={handleTabClick}>Click</button>
      <button className="tab-button" data-tab="tab1" onClick={handleTabClick}>Games</button>
      <button className="tab-button" data-tab="tab2" onClick={handleTabClick}>Profile</button>
    </footer>
  );
}

export default Footer;