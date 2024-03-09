import React from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App = () => {
  // Since the logo and toggle functionality are removed, the ChatWindow can be displayed directly
  return (
    <div className="app-container">
      {/* ChatWindow will now always be visible without a toggle option */}
      <ChatWindow />
    </div>
  );
};

export default App;
