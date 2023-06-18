/**
 * SearchFilter component for filtering and searching Pokémon cards.
 * @param {Object} props - The component props.
 * @param {string} props.searchQuery - The current search query.
 * @param {Function} props.setSearchQuery - The function to update the search query.
 * @param {string} props.selectedFilter - The currently selected filter option.
 * @param {Function} props.setSelectedFilter - The function to update the selected filter option.
 * @param {Function} props.handleResetFilter - The function to reset the filter.
 * @param {string[]} props.filterOptions - The available filter options.
 * @returns {JSX.Element} The rendered SearchFilter component.
 */
export function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  handleResetFilter,
  filterOptions,
}) {
  return (
    <div className="flex flex-col sm:flex-row m-auto w-fit bg-orange-300 shadow-lg shadow-black/50 p-4 my-6 rounded-xl border border-black">
      <div className="flex-initial px-1">
        <div className="pb-1">Find your next Pokémon card:</div>
        <input
          className="w-full p-1 rounded-md outline outline-2 outline-slate-500 focus:outline-4"
          type="search"
          name="pokemon"
          id=""
          placeholder="Search for name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex-initial justify-center items-center">
        <div className="m-auto px-1">
          <div className="pb-1">Sort by type:</div>
          <select
            className="h-8 rounded-md outline outline-2 outline-slate-500 focus:outline-4"
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
      </div>
      <div className="flex-initial px-4 mt-2">
        <button
          className="button_style secondary"
          type="reset"
          onClick={handleResetFilter}
        >
          reset filter
        </button>
      </div>
    </div>
  );
}
