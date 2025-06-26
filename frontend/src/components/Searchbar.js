import React from "react";
import data from "./cards/data.json";
import { FaSearch } from "react-icons/fa";

function Searchbar({ onSearch }) { 
    const [searchTerm, setSearchTerm] = React.useState("");
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = () => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onSearch(filteredData);
    };
    
    return (
        <div className="searchbar-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
            />
            <button className="search-btn" onClick={handleSearch} aria-label="Search">
                <FaSearch />
            </button>
        </div>
    );
}

export default Searchbar;