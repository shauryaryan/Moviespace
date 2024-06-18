import React, { useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../styles/Search.css';

function Search({ setSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query) {
            try {
                const request = await axios.get(requests.fetchSearchResults(query)); // Correct usage
                console.log('Search Results:', request.data.results); // Log the results for debugging
                setSearchResults(request.data.results);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;



