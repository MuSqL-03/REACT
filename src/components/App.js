// fichier components/App.js
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Search from './Search/Search';
import List from './List/List';
import Layout from './Layout/Layout';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Layout permet de partager une navigation commune */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Route pour la page d'accueil */}
          <Route path="about" element={<About />} /> {/* Route pour la page About */}
          <Route path="search" element={<Search />} /> {/* Route pour la recherche */}
          <Route path="list/:data" element={<List />} /> {/* Route dynamique pour la liste */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
