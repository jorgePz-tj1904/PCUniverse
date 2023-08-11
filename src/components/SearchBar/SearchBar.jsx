import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import style from './SearchBar.module.css'

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    dispatch(getByName(newName)); // Enviar la acción con el nuevo nombre
  };

  return (
    <div className={style.navbarSearch}>
      <input
        type="text"
        placeholder="...Buscar"
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default SearchBar;
