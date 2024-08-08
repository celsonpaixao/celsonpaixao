import { useEffect } from "react";
import TitleLabel from "../titlelabel/Titlelabe";
import style from "./Skills.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

interface Skill {
  title: string;
  image: string;
}
const Skills = () => {
  const skills: Skill[] = [
    {
      title: "Javascript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    },
    {
      title: "Typescript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    },
    {
      title: "React Js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png",
    },
    {
      title: "Node Js",
      image:
        "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    },
    {
      title: "Sass",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    {
      title: "Bootstrap",
      image:
        "https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png",
    },
    {
      title: "Git",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    },
    {
      title: "GitHub",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      title: "GitLab",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    },
    {
      title: "Kotlin",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
    },
    {
      title: "Dart",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dart_logo.png/768px-Dart_logo.png",
    },
    {
      title: "Flutter",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png",
    },
    {
      title: "Firebase",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/1200px-Firebase_icon.svg.png",
    },
    {
      title: "Postgres",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
    },
    {
      title: "MongoDb",
      image:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.skills_container} id="skills">
      <div className="container">
        <TitleLabel text={"Ferramentas e Tecnologias"} />
        <p className={style.skills_container_P}>
      {""}
        </p>
        <div className={style.skills_contant_body}>
          {skills.map((skil, index) => (
            <div key={index} className={style.skills_contant_body_item}>
              <img src={skil.image} alt={skil.title} />
              <p>{skil.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
