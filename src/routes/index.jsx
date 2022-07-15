import { Routes, Route } from 'react-router-dom';
import PokemonData from '../pages/pokemondata';
import Index from '../pages/pokemonlist';

const AppRouter = () => (
 <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/pokemon/:name" element={<PokemonData />} />
 </Routes>
);

export default AppRouter;