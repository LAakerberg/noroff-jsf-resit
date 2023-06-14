import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Routes, Route, Outlet } from 'react-router';
import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';
import { Contact } from './pages/Contact';
import { PokemonDetails } from './pages/PokemonDetails';

export function Main() {
  return (
    <main className="bg-white">
      <div>
        <h1 className="text-4xl">Main</h1>
      </div>
      <div className="py-2">
        <Outlet />
      </div>
    </main>
  );
}

export function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/details/:id" element={<PokemonDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}
