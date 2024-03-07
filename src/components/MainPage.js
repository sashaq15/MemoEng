import React from "react";
import { useState } from "react";
import App from "../App";

const MainPage = (props) => {

    const {categoryId, setCategoryId,setCategorySelected} = props;

    const category = ['Общие слова', 'Местоимения', 'Тело', 'Внешность', 'Характер и эмоции', 'Семь и окружение', 'Одежда и обувь','Еда и напитки', 'Професии и работа', 'Дом', 'Спорт и хобби', 'Путешесвтия и отдых', 'Цвета', 'Свойства', 'Время', 'Количественные числительные', 'Порядковые числительные', 'Погода', 'Пейзаж', 'Животные', 'Растения' , 'Праздники', 'Места', 'Союзы', 'Предлоги' ];

    

    console.log(categoryId);
    return (
        <div>
            <h1>MemoEng</h1>
            <div  className="imgMemo">
                <img src="https://qpicture.ru/images/2020/06/25/istock9532.jpg" style={{'width:': '10%'}}  alt="" />   
            </div>
            <h2>Выберите категорию</h2>
            <ul className="category">
                {
                category.map((item, i) => (
                    <li onClick={() => setCategoryId((categoryId) => categoryId = (i+1))} className="categoryItem" key={i} >{item}</li>
                    )) 
                }
            </ul>
            
        </div>
    )
}

export default MainPage;