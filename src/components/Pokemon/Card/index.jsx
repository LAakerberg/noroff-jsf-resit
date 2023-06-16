import { useState, useEffect } from 'react';
import { filterPokemon, paginatePokemon } from '../Filtered';
import { Link } from 'react-router-dom';
import { SearchFilter } from '../Search';

export function PokemonCard({ pokemon }) {
  return (
    <div
      key={pokemon.id}
      className="w-64 rounded-lg outline outline-1 p-2 bg-orange-200 hover:bg-orange-300 hover:outline-2 hover:z-10 hover:-translate-y-2 shadow-md shadow-gray-600/60 hover:shadow-lg hover:shadow-gray-700/100 transition-all"
    >
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
        <div className="py-4 m-auto">
          <Link
            to={`/pokemon/details/${pokemon.id}`}
            className="button_style primary"
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
    <>
      <div className="">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          handleResetFilter={handleResetFilter}
          filterOptions={filterOptions}
        />
      </div>
      <div className="">
        <div className=" grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl::grid-cols-5 4xl:grid-cols-6 pt-4 gap-6">
          {paginatedPokemon?.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>

        {renderStatusMessage() && (
          <div className="flex justify-center mt-4 bg-red-300 border border-red-700 w-1/2 m-auto text-center">
            {renderStatusMessage()}
          </div>
        )}

        <div className="flex justify-center mt-5">
          <div className="flex-initial">
            {' '}
            <button
              className="bg-blue-500 text-white px-4 py-2 mr-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </div>
          <div className="flex-initial">
            <div className="">
              {currentPage} of {totalPages}
            </div>
          </div>
          <div className="flex-initial">
            {' '}
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-2"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
