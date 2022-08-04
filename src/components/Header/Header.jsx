import { useState } from "react";
import Button from "../Button/Button";
import "./header.css";

const menuItems = [
  'Главная',
  'Технология',
  'График полетов',
  'Гарантии',
  'О компании',
  'Контакты'
];

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo-wrapper has-corners">
          <div className="border-corner border-corner-1" />
          <div className="border-corner border-corner-2" />
          <div className="border-corner border-corner-3" />
          <div className="border-corner border-corner-4" />
        </div>
        <ul className={menuVisible ? "menu menu-visible" : "menu"}>
          {menuItems.map(menuItem => <Button label={menuItem} key={menuItem} />)}
          <div className={menuVisible ? "border-corner border-corner-1" : "border-corner border-corner-1 hidden"} />
          <div className={menuVisible ? "border-corner border-corner-3" : "border-corner border-corner-3 hidden"} />
        </ul>
        <div className="burger-button" onClick={() => setMenuVisible(!menuVisible)}>☰</div>
      </header>
    </div>
  )
}
