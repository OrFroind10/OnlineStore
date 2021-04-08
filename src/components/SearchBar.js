import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition";
import {
    Link
  } from "react-router-dom";
const SearchBar = () => {
    const Texts = [
        "Easy Shopping",
        "For everyone!"
    ]
    const [searchInput, setSearchInput] = useState()
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000
        );
        return () => clearTimeout(intervalId);
      }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }
    return (
        <div className="searchContainer">
        <form className="searchContainer">
        <h1><TextTransition
        text={ Texts[index % Texts.length] }
        springConfig={ presets.wobbly }
      /></h1>
        <input onChange={handleSearch} type="text" className="searchInput"/>
        <Link to={`/Results/${searchInput}`}>
        <input value="Search" type="submit"/>
        </Link>
        </form>
        </div>
    )
}

export default SearchBar