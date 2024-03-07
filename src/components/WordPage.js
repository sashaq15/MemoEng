import React from "react";
import { useState,useEffect } from "react";
import App from "../App";

const WordPage = (props) => {

    const {data, id, inputValue, setInputValue, handleClick, handleClickPrev} = props;
   

    return (
        <div className="wordPage">
            <div className="progressBar" style={{'width': `${data.engWords? Math.round((id/data.engWords.length) * 100): null}%`}}></div>
            <h1>Введите перевод слова на русский:</h1>
            <h2>{data.engWords ? data.engWords[id] : null}</h2>
            <input 
                type="text" 
                name="inputValue"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="button" onClick={() => handleClick()}>
                Next Word
            </button>
            <button className="button" onClick={() => handleClickPrev() }>
                Prev Word
            </button>
            <a href="./">
            <button className="button button__return">
                Return to categories
            </button>
            </a>

        </div>
    )
}

export default WordPage;