export function Cards({ value }) {
  const pokemon = value;
  console.log(pokemon.data);

  // Map all Pokémon cards and filter only those with type "grass"
  const grassPokemon = pokemon.data?.map((poke) => {
    if (poke?.types.includes('Grass')) {
      return (
        <div key={poke.id} className="w-60 border border-black">
          <div>{poke.name}</div>
          <div>
            <img
              src={poke.images.large}
              alt="hello"
              className="w-full object-cover object-top border border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <div>{poke.types}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="grid grid-cols-4 gap-4">{grassPokemon}</div>;
}
