import React from 'react';
import { General } from './components/general/General';
import { Header } from './components/header/Header';
import { AppWrapper } from './styles/App.styles';




function App() {
  return (
    <AppWrapper>
      <Header />
      <General />
    </AppWrapper>
  );
}

export default App;
