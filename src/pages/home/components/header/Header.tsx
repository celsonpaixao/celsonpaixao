import style from "./Header.module.scss";
import Logo from "../../../../assets/logo.png";
import { RiMapPin2Line } from "react-icons/ri";
import { BiSolidCircle } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import avatar from "../../../../assets/avater.jpg";
import cv from "../../../../assets/Currículo Celson.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosMenu } from "react-icons/io";

import { IoClose } from "react-icons/io5";
import SwitchLang from "../switchlang/SwitchLang";
import { useTranslation } from "react-i18next";

const Header = () => {
   const { t } = useTranslation();
  const [navshow, setnavshow] = useState(false);
  function ShowMobileNav() {
    setnavshow(!navshow);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="500">
      <div className={style.header_conatiner}>
        <div className={style.header_nav_container}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <nav className={style.header_nav_container_end}>
            <div>
              <ul>
                <li>
                  <a href="#about">{t("header_nav_tag_About")}</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href={cv}
                download="Celson Paixão Cv"
                className={style.btn_down}
              >
                DownloadCV
              </a>
            </div>
          </nav>

          <button onClick={ShowMobileNav} className={style.btn_menu}>
            <IoIosMenu />
          </button>
        </div>

        <div
          className={`${style.header_nav_container_mobile} ${
            navshow ? style.open : ""
          }`}
        >
          <button onClick={ShowMobileNav} className={style.btn_menu}>
           x
          </button>
          <nav>
            <ul>
              <li>
                <a href="#about" onClick={ShowMobileNav}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={ShowMobileNav}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" onClick={ShowMobileNav}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#work" onClick={ShowMobileNav}>
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={ShowMobileNav}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a href={cv} download="Celson Paixão Cv" className={style.btn_down}>
            DownloadCV
          </a>
        </div>

        <div className={style.header_body}>
          <SwitchLang/>
          <img src={avatar} alt="avatar" className={style.avatar_img} />
          <h1>Hi, I’m Celson 👋</h1>
          <p>
            I'm a Frontend and Mobile developer.... a developer passionate about
            creating exceptional digital experiences. With experience in
            frontend development using technologies such as React.js and
            Next.js, and also in mobile development with Flutter, React Native
            and Kotlin, I am committed to creating user-centered, accessible,
            visually attractive and responsive web and mobile applications. My
            deep passion for design and my experience in user psychology allow
            me to create digital products that not only meet users' needs, but
            also delight them. Let's work together to turn your ideas into
            digital reality!
          </p>
          <div className={style.header_buton}>
            <div>
              <div className={style.header_buton_contant}>
                <RiMapPin2Line />
                Luanda, Angola
              </div>

              <div className={style.header_buton_contant}>
                <BiSolidCircle className={style.on} />
                Available for new projects
              </div>
            </div>

            <div className={style.header_buton_contant1}>
              <a href="https://github.com/celsonpaixao" target="_blank">
                <button>
                  <FiGithub />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/celson-paix%C3%A3o-1430b2276/"
                target="_blank"
              >
                <button>
                  <FaLinkedinIn />
                </button>
              </a>
              <a href="https://www.youtube.com/@celsonpaixa0" target="_blank">
                <button>
                  <FaYoutube />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
