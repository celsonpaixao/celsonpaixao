import Skills_Slide from "../skills_slide/Skills_Slide";
import TitleLabel from "../titlelabel/Titlelabe";
import style from "./Skills.module.scss";
const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className={style.skills_container}>
      <TitleLabel text={"Skills"} />
       <div className={style.skills_contant}>
      
        <p>
          The skills, tools, and technologies I'm really good at for
          development:
        </p>
       </div>
        <Skills_Slide/>
      </div>
    </div>
  );
};

export default Skills;
