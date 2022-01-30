import React from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav>
      <h1>Weather-App</h1>
      <SearchBar />
      <h1>Mi ubicación</h1>
    </nav>
  );
}
