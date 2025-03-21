import { FaSearch } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import { Nav, Form } from "react-bootstrap";
import useOnclickOutside from "react-cool-onclickoutside";

function Search({ cities, attractions, itineraries, setFilteredResults }) { // 🔹 Added attractions & itineraries
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = () => setSearch(true);
  const closeSearch = () => setSearch(false);
  const ref = useOnclickOutside(() => closeSearch());

  const handleSearchInput = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    if (typeof setFilteredResults !== "function") {
      console.error("setFilteredResults is not a function!", setFilteredResults);
      return;
    }
  
    if (searchTerm === "") {
      setFilteredResults({ cities, attractions, itineraries });
      return;
    }
  
    const filterData = (data, key = "name") =>
      data?.filter((item) => item[key]?.toLowerCase().includes(searchTerm.toLowerCase()));
  
    const filteredResults = {
      cities: filterData(cities),
      attractions: filterData(attractions),
      itineraries: filterData(itineraries, "title"),
    };
  
    setFilteredResults(filteredResults);
  }, [searchTerm, cities, attractions, itineraries, setFilteredResults]);
  
  return (
    <Nav className="my-auto" ref={ref}>
      <Form className={search ? "searchbar fadeInWidth" : "searchbar fadeOutWidth"}>
        {search && (
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
            placeholder="Search..."
          />
        )}
        <div className="icon-bg">
          {!search && <FaSearch onClick={toggle} className="search-icon" />}
        </div>
      </Form>
    </Nav>
  );
}

export default Search;
