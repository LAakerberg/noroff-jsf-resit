import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Pokémon Moon Website';
  }, []);

  return (
    <>
      <h3>Home</h3>
    </>
  );
}
