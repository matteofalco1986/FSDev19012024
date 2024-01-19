import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Player from './components/Player';
import { HomePage } from './components/HomePage';
import { AlbumPage } from './components/AlbumPage';
import { SearchPage } from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Sidebar />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/:albumId' element={<AlbumPage />} />
      </Routes>
      <Player />
      
    </BrowserRouter>
  );
}

export default App;
