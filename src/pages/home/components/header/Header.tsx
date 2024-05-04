import style from "./Header.module.scss";
import Logo from "../../../../assets/logo.png";
import { RiMapPin2Line } from "react-icons/ri";
import { BiSolidCircle } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect } from "react";
import cv from "../../../../assets/Currículo Celson.pdf";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="500">
      <div className={style.header_conatiner}>
        <div className={style.color_blur}></div>
        <div className={style.header_nav_container}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <nav className={style.header_nav_container_end}>
            <div>
              <ul>
                <li>
                  <a href="#about">About</a>
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
              <a href={cv} download="Celson Paixão Cv">
                <button>Download CV</button>
              </a>
            </div>
          </nav>
        </div>
        <div className={style.header_body}>
          <div className={style.avatar_img}></div>
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
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
