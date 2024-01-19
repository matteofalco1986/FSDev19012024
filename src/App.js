import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Sidebar />
      </header>

    </BrowserRouter>
  );
}

export default App;
