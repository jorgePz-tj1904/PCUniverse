import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import style from './SearchBar.module.css'
const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(name));
  };
//searchh
  return (
    <div className={style.navbarSearch}>
      <input
        type="text"
        placeholder="...Buscar"
        onChange={(e) => handleInputChange(e)}
      />
      <button className={style.navbarButton} type="submit" onClick={(e) => handleSubmit(e)}>
      <i class='bx bx-search-alt'></i>
      </button>
    </div>
  );
};

export default SearchBar;