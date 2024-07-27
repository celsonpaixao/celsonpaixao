import style from "./Header.module.scss";
import { RiMapPin2Line } from "react-icons/ri";
import { BiSolidCircle } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useEffect } from "react";
import avatar from "../../../../assets/avater.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// import { IoClose } from "react-icons/io5";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.header_conatiner} id="home">
      <div className="container">
        <div className={style.header_body}>
          <img src={avatar} alt="avatar" className={style.avatar_img} />
          <h1>
            Olá...!
            <br /> Meu nome é Celson 👋
          </h1>
          <p>
            Sou desenvolvedor Frontend e Mobile, apaixonado por criar
            experiências digitais incríveis. 🌟
            <br /> Com expertise em React.js e Next.js para frontend, e Flutter,
            React Native e Kotlin para mobile, me dedico a construir aplicações
            web e móveis que sejam centradas no usuário, acessíveis e
            visualmente atraentes. 🚀 Minha paixão por design e conhecimento em
            psicologia do usuário me permitem criar produtos que não apenas
            atendem, mas encantam os usuários. 💡✨
            <br />
            Vamos transformar suas ideias em uma realidade digital inesquecível!
            🌐🚀
          </p>
          <div className={style.header_buton}>
            <div>
              <div className={style.header_buton_contant}>
                <RiMapPin2Line />
                Luanda, Angola
              </div>

              <div className={style.header_buton_contant}>
                <BiSolidCircle className={style.on} />
                Disponível para novos projetos
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
