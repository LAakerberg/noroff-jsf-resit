import { useEffect } from 'react';
import { FetchPokemon } from '../../components/Pokemon/FetchPokemon';

export function Home() {
  useEffect(() => {
    document.title = 'Pokémon Moon Website';
  }, []);

  return (
    <>
      {/* <h3>Home</h3> */}
      <div>
        <FetchPokemon />
      </div>
    </>
  );
}
