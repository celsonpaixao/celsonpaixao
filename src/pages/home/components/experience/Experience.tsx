import style from "./Exprerience.module.scss";
import mamboologo from "../../../../assets/experience_image/mamboologo.png";
import TitleLabel from "../titlelabel/Titlelabe";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

interface ExperienceType {
  image: string;
  title: string;
  nivel: string;
  competence: string[];
  type_local: string;
  start: string;
  End: string;
}

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const experiences: ExperienceType[] = [
    {
      image: mamboologo,
      title: "Desenvolvedor Front-End & Mobile",
      nivel: "Júnior",
      competence: [
        "Desenvolvedor de aplicações web com React.js e Next.js",
        "Desenvolvedor de aplicações móveis (Android) com Flutter/Dart",
      ],
      type_local: "Presencial",
      start: "2024-03-04",
      End: "2024-09-04",
    },
  ];

  return (
    <div className={style.experience_container} id="experience">
      <TitleLabel text="Experiências" />
      <div className="container">
        <p className={style.experience_container_P}>{""}</p>
        <div className={style.experience_body}>
          {experiences.map((item) => (
            <div className={style.experience_card}>
              <div className={style.experience_card_image}>
                <img src={item.image} alt="Logo" />
              </div>
              <div>
                <h1>{item.title}</h1>
                <ul>
                  {item.competence.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h1>
                  {item.nivel} - {item.type_local}
                </h1>
                <h3>Início: {item.start}</h3>
                <h3>Fim: {item.End}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
