import { useState, useEffect } from 'react';
import { filterPokemon, paginatePokemon } from '../Filtered';
import { Link } from 'react-router-dom';

export function PokemonCard({ pokemon }) {
  return (
    <div key={pokemon.id} className="w-60">
      <div>
        <h4 className="font-bold">{pokemon.name}</h4>
      </div>
      <div>
        <img
          src={pokemon.images.large}
          alt="hello"
          className="w-full object-cover object-top border border-or-500"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <p className="font-bold">Type: {pokemon.types}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="m-auto">
          <Link
            to={`/pokemon/details/${pokemon.id}`}
            className="bg-red-300 p-2 rounded-lg outline outline-1 outline-red-900 uppercase"
          >
            View more{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Cards({ value }) {
  const pokemon = value;

  const filterOptions = [
    'All',
    'Colorless',
    'Darkness',
    'Dragon',
    'Fairy',
    'Fighting',
    'Fire',
    'Grass',
    'Lightning',
    'Metal',
    'Psychic',
    'Water',
  ];
  const defaultFilter = 'All';
  const pageSize = 12;

  const [selectedFilter, setSelectedFilter] = useState(defaultFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleResetFilter = () => {
    setSelectedFilter(defaultFilter);
    setSearchQuery('');
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredPokemon = filterPokemon(
    pokemon.data,
    selectedFilter,
    searchQuery
  );
  const paginatedPokemon = paginatePokemon(
    filteredPokemon,
    currentPage,
    pageSize
  );
  const totalPages = Math.ceil(filteredPokemon?.length / pageSize);

  /*   const filteredPokemon = filterPokemon();
  const paginatedPokemon = paginatePokemon(filteredPokemon);
  const totalPages = Math.ceil(filteredPokemon?.length / pageSize); */

  const renderStatusMessage = () => {
    if (searchQuery && filteredPokemon && filteredPokemon.length === 0) {
      return <p>No matching Pokémon found.</p>;
    }
    return null;
  };

  return (
    <div className="">
      <div className="flex flex-cols m-auto w-4/5 bg-yellow-500 p-4 border border-black">
        <div className="flex-1">
          <input
            className="w-64 p-1 rounded-md outline outline-2 outline-blue-500"
            type="search"
            name="pokemon"
            id=""
            placeholder="Search for your pokemon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="bg-yellow-300 p-2 rounded-lg outline outline-1 outline-red-900 uppercase"
            type="reset"
            onClick={handleResetFilter}
          >
            reset filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 pt-4">
        {paginatedPokemon?.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>

      {renderStatusMessage() && (
        <div className="flex justify-center mt-4 bg-red-300 border border-red-700 w-1/2 m-auto text-center">
          {renderStatusMessage()}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span> of <span>{totalPages}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
