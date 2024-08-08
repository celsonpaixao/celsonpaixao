import Logo from "../../../assets/logo_upscayl_4x_realesrgan-x4plus.png";
import cv from "../../../assets/Currículo Celson.pdf";
import style from "./NavigationMenu.module.scss";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

function NavigationMenu() {
  const [navshow, setnavshow] = useState(false);
  function ShowMobileNav() {
    setnavshow(!navshow);
  }

  const items: MenuProps["items"] = [
    {
      label: <Link to="/about">Sobre Mim</Link>,
      key: "0",
    },
    {
      label: <Link to="/stacks">Stacks/Habilidades</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/experiences">Experiência</Link>,
      key: "3",
    },
    {
      label: <Link to="/work">Projetos</Link>,
      key: "4",
    },
  ];
  return (
    <div className={style.header_nav_container}>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className={style.logo} />
        </Link>
      </div>
      <div>
        <nav className={style.header_nav_container_end}>
          <div>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Sobre
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Link to="/comunity">Comunidades</Link>
              </li>
              <li>
                <Link to="/contLinkct">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <a href={cv} download="Celson Paixão Cv" className={style.btn_down}>
              Baixar CV
            </a>
          </div>
        </nav>
      </div>

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
              <Link to="/" onClick={ShowMobileNav}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={ShowMobileNav}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/stacks" onClick={ShowMobileNav}>
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="/experiences" onClick={ShowMobileNav}>
                Experiência
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={ShowMobileNav}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={ShowMobileNav}>
                Contato
              </Link>
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
