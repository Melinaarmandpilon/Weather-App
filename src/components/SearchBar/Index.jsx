import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCityByName } from "../../actions";
import logo from "../../assets/search.svg";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); //estado del input

  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Search for a city"
        onChange={handleChange}
      />
      {/* <select>
        <option>Es posible que quieras:</option>
        <option>Detectar mi ubicación</option>
        <option>Encuentra rápidamente tu ubicación en el mapa:</option>
      </select> */}
      <button type="submit">
        <img src={logo} alt="img no found" />
      </button>
    </form>
  );
}
