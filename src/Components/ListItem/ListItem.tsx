import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.listItem{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.price{
  position: relative;
  top: 10px;
}
.weight{
  margin-left: 10px;
}
.radio{
  cursor:pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.radio > input { display: none; /* Прячем исходный переключатель */ }
.radio > .checkbox {
 position: relative; /* Относительное позиционирование */
 display: inline-block; /* Строчно-блочный элемент */
 width: 24px; height: 24px; /* Размеры */
 border: 1px solid #999999;
 background: #F5F5F5; /* Серый цвет фона */
 border-radius: 50%; /* Круглый переключатель */
}

/* Добавляем белую точку по центру */
.radio > input:checked + .checkbox::before { 
 content: '';
 position: absolute;
 left: 7px; top:7px;
 background: #6CA22C;
 width: 8px; height: 8px;
 border-radius: 50%;
}

.radio > input:checked + .checkbox{
  border-color: #6CA22C;
 }
`;
interface Props {
  weight: number;
  price: number;
  onCheck: (arg1: number) => void;
}

const ListItem: React.FC<Props> = ({ weight, price, onCheck }) => (
  <div className="listItem">
    <GlobalStyle></GlobalStyle>
    <label className="radio">
      <input
        onChange={() => {
          onCheck(price);
        }}
        type="radio"
        name="g"
      />
      <span className="checkbox"></span>
      <span className="weight">{weight} г</span>
    </label>
    <span className="price">{price} грн</span>
  </div>
);

export default ListItem;
