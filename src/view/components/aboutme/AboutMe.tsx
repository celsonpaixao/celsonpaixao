import { useEffect } from "react";
import style from "./AboutMe.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import CardImage from "../cardimage/CardImage";


const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.about_container} id="about">
    
      <div className="container">
        <div className={style.about_body}>
          <div className={style.about_image}>
            <CardImage />
          </div>
          <div className={style.about_info}>
            <h1>Curioso sobre mim? Aqui está um resumo:</h1>
            <p>
              Minha jornada começou em 2021, ainda no ensino médio, quando
              comecei a estudar programação. Desde então, venho crescendo e
              evoluindo, enfrentando novos desafios e aprendendo as tecnologias
              mais recentes. Com experiência em React.js, Next.js, Flutter,
              React Native e Kotlin, meu foco é transformar ideias em produtos
              digitais incríveis. A experiência do usuário é minha prioridade, e
              estou comprometido em criar aplicações web e móveis que sejam
              centradas no usuário, visualmente atraentes e altamente
              funcionais. 🚀
            </p>
            <p>
              Busco aprender e evoluir diariamente, aceitando novos desafios e
              descobrindo coisas novas a cada dia. Adoro estudar psicologia do
              usuário e criar experiências valiosas para todos os tipos de
              usuários. 💡
            </p>
            <h3>Alguns detalhes rápidos sobre mim:</h3>
            <ul>
              <li>Formação técnica em TI</li>
              <li>Desenvolvedor Mobile</li>
              <li>Desenvolvedor Frontend</li>
            </ul>
            <p>
              E para finalizar, estou disponível para trabalhos freelance, então
              sinta-se à vontade para entrar em contato e dizer olá! Prometo que
              não morderei 😉😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
