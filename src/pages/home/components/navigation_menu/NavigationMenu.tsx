import Logo from "../../../../assets/logo_upscayl_4x_realesrgan-x4plus.png";
import cv from "../../../../assets/Currículo Celson.pdf";
import style from "./NavigationMenu.module.scss";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavigationMenu() {
  const [navshow, setnavshow] = useState(false);
  function ShowMobileNav() {
    setnavshow(!navshow);
  }
  return (
    <div className={style.header_nav_container}>
      <div>
        <a href="#home">
          <img src={Logo} alt="Logo" className={style.logo} />
        </a>
      </div>
      <nav className={style.header_nav_container_end}>
        <div>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#experience">Experiência</a>
            </li>
            <li>
              <a href="#work">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <a href={cv} download="Celson Paixão Cv" className={style.btn_down}>
            Baixar CV
          </a>
        </div>
      </nav>

      <button onClick={ShowMobileNav} className={style.btn_menu}>
        <IoIosMenu />
      </button>

      <div
        className={`${style.header_nav_container_mobile} ${
          navshow ? style.open : ""
        }`}
      >
        <button onClick={ShowMobileNav} className={style.btn_menu}>
          <IoClose />
        </button>
        <nav>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about" onClick={ShowMobileNav}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" onClick={ShowMobileNav}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#experience" onClick={ShowMobileNav}>
                Experiência
              </a>
            </li>
            <li>
              <a href="#work" onClick={ShowMobileNav}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={ShowMobileNav}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a href={cv} download="Celson Paixão Cv" className={style.btn_down}>
          Baixar CV
        </a>
      </div>
    </div>
  );
}

export default NavigationMenu;
