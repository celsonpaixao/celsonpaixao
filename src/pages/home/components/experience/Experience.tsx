import style from "./Exprerience.module.scss";

import TitleLabel from "../titlelabel/Titlelabe";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceTimeLine from "../experiece_timeline";


const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.experience_container} id="experience">
      <TitleLabel text="Experiências" />
      <div className="container">
        <p className={style.experience_container_P}>{""}</p>
        <ExperienceTimeLine />
        {/* <div className={style.experience_body}>
         
          {experience_datas.map((item) => (
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
                {item.atual ? <h3 className={style.atual_atext}>Onde estou atualmente...</h3> : <h3>Fim: {item.End}</h3>}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
