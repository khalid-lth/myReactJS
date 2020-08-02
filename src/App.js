import React from 'react';
import Header from './component/header.jsx';
import Content from './component/content.jsx';
import Footer from './component/footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
