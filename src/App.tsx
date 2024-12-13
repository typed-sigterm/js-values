import type { Component } from 'solid-js';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ValueTable } from './components/ValueTable';
import './App.css';

const App: Component = () => {
  return (
    <>
      <Header />
      <ValueTable />
      <Footer />
    </>
  );
};

export default App;
