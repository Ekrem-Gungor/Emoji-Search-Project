const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search-box"
      placeholder="Emoji ara..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
