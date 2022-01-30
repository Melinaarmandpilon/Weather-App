import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCityByName } from "../actions/index";
import logo from '../assets/search.svg';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log("event.target.value",event.target.value)
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    // console.log("event.target.value",event.target.value)
    dispatch(searchCityByName(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Search city"
        onChange={handleChange}
      />
      <button type="submit"><img src={logo} alt="img no found" /></button>
    </form>
  );
}
