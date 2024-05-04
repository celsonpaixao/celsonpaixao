import { useEffect } from "react";
import Skills_Slide from "../skills_slide/Skills_Slide";
import TitleLabel from "../titlelabel/Titlelabe";
import style from "./Skills.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div
      className="container"
      id="skills"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className={style.skills_container}>
        <TitleLabel text={"Skills"} />
        <div className={style.skills_contant}>
          <p>
            The skills, tools, and technologies I'm really good at for
            development:
          </p>
        </div>
        <Skills_Slide />
      </div>
    </div>
  );
};

export default Skills;
