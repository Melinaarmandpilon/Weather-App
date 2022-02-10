import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCityByName } from "../../actions";
import logo from "../../assets/search.svg";
import styles from "./Styles.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); //estado del input

  const handleChange = (event) => {
    // console.log("event.target.value", event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(searchCityByName(input));
      setInput("");
    } else {
      alert("please insert a valid city"); 
    }
  };

  return (
    <form onSubmit={handleSubmit}
    className={styles.search}
    >
      <input
      className={styles.searchInput}
        type="text"
        value={input}
        placeholder="Search for a city"
        onChange={handleChange}
      />
      <button type="submit"
      className={styles.searchButton}
      >
        <img src={logo} width="30px" height="30px" alt="img no found" />
      </button>
    </form>
  );
}
