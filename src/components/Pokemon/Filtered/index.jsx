/**
 * Filters an array of Pokémon based on the selected filter and search query.
 * @param {Object[]} pokemon - The array of Pokémon to filter.
 * @param {string} selectedFilter - The selected filter option.
 * @param {string} searchQuery - The search query.
 * @returns {Object[]} The filtered array of Pokémon.
 */
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

/**
 * Paginates an array of Pokémon based on the current page and page size.
 * @param {Object[]} filteredPokemon - The array of filtered Pokémon.
 * @param {number} currentPage - The current page number.
 * @param {number} pageSize - The number of Pokémon to display per page.
 * @returns {Object[]} The paginated array of Pokémon.
 */
export function paginatePokemon(filteredPokemon, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredPokemon?.slice(startIndex, endIndex);
}
