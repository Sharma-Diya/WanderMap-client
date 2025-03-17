import { FaSearch } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import { Nav, Form } from "react-bootstrap";
import useOnclickOutside from "react-cool-onclickoutside";

function Search({ cities, setFilteredCities }) {
  console.log('setFilteredCities:', setFilteredCities); // Check if this is being passed correctly

  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = () => setSearch(true);
  const closeSearch = () => setSearch(false);

  const ref = useOnclickOutside(() => closeSearch());

  // useEffect(() => {
  //   if (searchTerm === '') {
  //     setFilteredCities(cities); // Reset the filtered cities when search is cleared
  //   } else {
  //     setFilteredCities(
  //       cities.filter((city) =>
  //         city.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   }
  // }, [searchTerm, cities, setFilteredCities]);

  const handleSearchInput = (e) => setSearchTerm(e.target.value);

  return (
    <Nav className="my-auto" ref={ref}>
      <Form className={search ? "searchbar fadeInWidth" : "searchbar fadeOutWidth"}>
        {search && (
          <input
            className={search ? "search-input fadeIn" : "search-input fadeOut"}
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
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
