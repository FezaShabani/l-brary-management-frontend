import React from 'react'

function SearchBar() {
    const SearchBar = ({ onSearch }) => {
        const [query, setQuery] = useState('');
      
        const handleInputChange = (event) => {
          setQuery(event.target.value);
        };
      
        const handleSearch = () => {
            console.log('Search query:', query);
            setQuery('');
         // onSearch(query);
        };
      
        return (
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        );
      };
}

export default SearchBar