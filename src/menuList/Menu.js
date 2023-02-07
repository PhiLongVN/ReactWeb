import React from 'react';
import { MenuList } from './menuList';

function Menu() {
  return (
    <>
      {MenuList.map((val, key) => {
        return (
          <div className="menu-block" key={key}>
            <img src={val.image} alt="" />
            <span>{val.price}</span>
            <span>{val.name}</span>
            <button>Order Now</button>
          </div>
        );
      })}
    </>
  );
}
export default Menu;
