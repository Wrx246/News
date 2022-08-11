import React from 'react';
import { General } from './components/general/General';
import { Health } from './components/general/Health';
import { Life } from './components/general/Life';
import { Technology } from './components/general/Technology';
import { Header } from './components/header/Header';
import { AppWrapper } from './styles/App.styles';




function App() {
  return (
    <AppWrapper>
      <Header />
      <General />
      <Technology />
      <Health />
      <Life />
    </AppWrapper>
  );
}

export default App;
