import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { DarkModeProvider } from './context/darkModeContext.js'
import { useState } from 'react';
function App() {
 
  return (
    <DarkModeProvider>
      <div>
        <Navbar/>
       
        <News />
      </div>
    </DarkModeProvider>
  );
}

export default App;



