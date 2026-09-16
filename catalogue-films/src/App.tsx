import { Route, Routes } from 'react-router-dom';
import { Layout } from './composants/Layout';
import { Accueil } from './pages/Accueil';
import { Connexion } from './pages/Connexion';
import { DetailFilm } from './pages/DetailFilm';
import { PageIntrouvable } from './pages/PageIntrouvable';
import { Recherche } from './pages/Recherche';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="recherche" element={<Recherche />} />
        <Route path="films/:id" element={<DetailFilm />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Route>
    </Routes>
  );
}

export default App;
