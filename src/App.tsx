import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/general/Footer';
import { Main } from './components/general/Main';
import { Header } from './components/header/Header';
import { InfoPanel } from './components/header/InfoPanel';
import { NewsList } from './components/page/NewsList';
import { AppWrapper } from './styles/App.styles';

function App() {
  return (
    <>
    <InfoPanel />
    <AppWrapper>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to='/general' replace />} />
        <Route path='/general' element={<Main />} />
        <Route path='/:path' element={<NewsList />} />
      </Routes>
    </AppWrapper>
    <Footer />
    </>
  );
}

export default App;
