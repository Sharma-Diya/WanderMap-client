import { FaSearch } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import { Nav, Form } from "react-bootstrap";
import useOnclickOutside from "react-cool-onclickoutside";

function Search({ cities , setFilteredCities }) {
  console.log('setFilteredCities:', setFilteredCities); // Check if this is being passed correctly

  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = () => setSearch(true);
  const closeSearch = () => setSearch(false);

  const ref = useOnclickOutside(() => closeSearch());

  const handleSearchInput = (e) => setSearchTerm(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent form submission on Enter
    }
  };

  useEffect(() => {
    if (!Array.isArray(cities)) {
      console.error("Cities data is not valid:", cities);
      return;
    }
  
    if (searchTerm === '') {
      setFilteredCities(cities); // Reset filtered cities if search term is empty
    } else {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())  // Case-insensitive filtering
      );
      console.log('Filtered Cities:', filtered);
      setFilteredCities(filtered); // Update filtered cities
    }
  }, [searchTerm, cities, setFilteredCities]);  // Dependency array ensures it triggers when searchTerm or cities change
  


  return (
    <Nav className="my-auto" ref={ref}>
      <Form className={search ? "searchbar fadeInWidth" : "searchbar fadeOutWidth"}>
        {search && (
          <input
            className={search ? "search-input fadeIn" : "search-input fadeOut"}
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
          />
        )}
        <div className={search ? "icon-bg fadeOut" : "icon-bg fadeIn"}>
          { !search && (
            <FaSearch
              onClick={toggle}
              className={search ? "search-icon fadeOut" : "search-icon fadeIn"}
            />
          )}
        </div>
      </Form>
    </Nav>
  );
}


export default Search;
