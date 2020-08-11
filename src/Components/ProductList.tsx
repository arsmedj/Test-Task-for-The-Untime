import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
const ListContainer = styled.div`
  min-width: 200px;
  height: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const AddButton = styled.button`
  font-weight: 700;
  color: white;
  padding: 5px 24px;
  border: 1px solid #6ca22c;
  border-radius: 3px;
  background: #6ca22c;
  transition: 0.2s;
  white-space: nowrap;
  &:hover {
    transition: 0.2s;
    background: rgb(53, 167, 110);
  }
  &:active {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
  }
`;
const AddContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-top: 15px;
  white-space: nowrap;
`;
const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
let items = [
  { weight: 500, price: 500 },
  { weight: 100, price: 150 },
  { weight: 50, price: 90 },
];
function ProductList() {
  const [currentItemPrice, setCurrentItemPrice] = useState(0);
  return (
    <ListContainer>
      <ListTitle>
        <span>Тип</span>
        <span>Цiна</span>
      </ListTitle>
      {items.map((item) => {
        return (
          <ListItem
            weight={item.weight}
            onCheck={setCurrentItemPrice}
            price={item.price}
          ></ListItem>
        );
      })}
      <AddContainer>
        <p>{currentItemPrice} грн</p>
        <AddButton>До кошика</AddButton>
      </AddContainer>
    </ListContainer>
  );
}

export default ProductList;
