import style from "./Region.module.css"
import { useState } from "react";

export function SearchInput({handleChange}) {


    const [inputName, setInputName] = useState('');

    function handleInputName(name){
      setInputName(name)
      handleChange(name)
    }

    return (
        <div className={style.inputContainer}>
            <label htmlFor="inputName" >Country Name </label>
            <input id="inputName" value={inputName} onChange={(ev) => handleInputName(ev.target.value)} type="text" name="inputName" required/> 
        </div>
    )
}