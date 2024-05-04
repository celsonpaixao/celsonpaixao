import style from "./Exprerience.module.scss";
import mamboologo from "../../../../assets/experience_image/mamboologo.png";
import TitleLabel from "../titlelabel/Titlelabe";

import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  const experiences = [
    {
      image: mamboologo,
      title: "FrontEnd & Mobile Developer",
      nivel: "Intern",
      competence: [
        "Web application developer with ReactJs and NextJs",
        "Mobile application developer (Android) with Flutter/Dart",
      ],
      type_local: "Present",
      start: "04 March 2024",
      End: "04 Setember 2024",
    },
  ];
  return (
    <div
      className="container"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className={style.experience_container}>
        <TitleLabel text={"Experience"} />

        <p>Here is a quick summary of my most recent experiences:</p>
        <div className={style.experience_body}>
          {experiences.map((item, index) => (
            <div className={style.experience_card} key={index}>
              <div className={style.experience_card_image}>
                <div style={{ background: `url(${item.image})` }}></div>
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
                <h3>Start: {item.start}</h3>
                <h3>End: {item.End}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
