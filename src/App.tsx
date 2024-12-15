import type { Component } from 'solid-js';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Legend } from './components/Legend';
import { ValueTable } from './components/ValueTable';
import './App.css';

const App: Component = () => {
  return (
    <>
      <Header />
      <main class="font-inconsolata select-none">
        <ValueTable />
        <Legend />
      </main>
      <Footer />
    </>
  );
};

export default App;
