import { FetchPokemon } from '../../components/Pokemon/FetchPokemon';
import { useEffect } from 'react';

export function Pokemon() {
  useEffect(() => {
    document.title = 'Pokémon Moon | Find your next pokémon';
  }, []);

  return (
    <>
      <div className="fade-in">
        <FetchPokemon />
      </div>
    </>
  );
}
