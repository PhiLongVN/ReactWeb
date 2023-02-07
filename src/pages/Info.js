import React from 'react';
import '../style/pages/Info.scss';
import Menu from '../menuList/Menu';

function Info() {
  return (
    <div className="menu">
      <h2>Choose your favored Pizza</h2>
      <span>RIGHT HERE</span>

      <div className="menu-list">
        <Menu/>
      </div>
    </div>
  );
}
export default Info;
