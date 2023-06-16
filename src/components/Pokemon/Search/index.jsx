export function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  handleResetFilter,
  filterOptions,
}) {
  return (
    <div className="flex flex-col sm:flex-row m-auto w-fit bg-orange-300 p-4 my-6 rounded-xl border border-black">
      <div className="flex-initial px-1">
        <div>Find your next pokemon card</div>
        <input
          className="w-64 p-1 rounded-md outline outline-2 outline-blue-500 focus:outline-4"
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
          <div>Sort by type:</div>
          <select
            className="h-8 rounded-md border-2 border-blue-500"
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
