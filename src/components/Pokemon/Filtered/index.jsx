export function filterPokemon(pokemon, selectedFilter, searchQuery) {
  return pokemon?.filter((poke) => {
    const matchesFilter =
      selectedFilter === 'All' ? true : poke.types.includes(selectedFilter);
    const matchesSearch =
      poke.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poke.types.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });
}

export function paginatePokemon(filteredPokemon, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredPokemon?.slice(startIndex, endIndex);
}
