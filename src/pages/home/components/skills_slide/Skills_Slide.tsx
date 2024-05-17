import style from "./Skills_Slide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Importação das imagens
import javascript from "@assets/skills_images/javasrecipt.png";
import typescript from "@assets/skills_images/typescript.png";
import react from "@assets/skills_images/reactjs.png";
import node from "@assets/skills_images/nodejs.png";
import sass from "@assets/skills_images/sass.png";
import git from "@assets/skills_images/git.png";
import github from "@assets/skills_images/github.png";
import gitlab from "@assets/skills_images/gitlab.png";
import bootstrap from "@assets/skills_images/bootstrap.png";
import insomnia from "@assets/skills_images/insomnia.png";
import dart from "@assets/skills_images/dart.png";
import flutter from "@assets/skills_images/flutter.png";
import kotlin from "@assets/skills_images/kotlin.png";
import mongodb from "@assets/skills_images/mongodb.png";
import postgres from "@assets/skills_images/PostgreSQL.png";
import firebase from "@assets/skills_images/firebase.png";
import yarn from "@assets/skills_images/yarn.png";
import npm from "@assets/skills_images/npm.png";

interface Skill {
  title: string;
  image: string;
}

// Component Skills_Slide
const Skills_Slide: React.FC = () => {
  const skills: Skill[] = [
    { title: "Javascript", image: javascript },
    { title: "Typescript", image: typescript },
    { title: "React Js", image: react },
    { title: "Node Js", image: node },
    { title: "Sass", image: sass },
    { title: "Bootstrap", image: bootstrap },
    { title: "Git", image: git },
    { title: "GitHub", image: github },
    { title: "GitLab", image: gitlab },
    { title: "NPM", image: npm },
    { title: "Kotlin", image: kotlin },
    { title: "Dart", image: dart },
    { title: "Flutter", image: flutter },
    { title: "Firebase", image: firebase },
    { title: "Postgres", image: postgres },
    { title: "MongoDb", image: mongodb },
    { title: "Insomnia", image: insomnia },
    { title: "Yarn", image: yarn },
  ];

  const renderSlides = (skillsList: Skill[]) =>
    skillsList.map((item, index) => (
      <div key={index} className={style.card}>
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className={style.card_image}
        ></div>
        <p>{item.title}</p>
      </div>
    ));

  return (
    <div>
      {/* Swiper para desktop */}
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.slide}
      >
        <SwiperSlide>
          <div className={style.container_slide}>
            {renderSlides(skills.slice(0, 9))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container_slide}>
            {renderSlides(skills.slice(9))}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Swiper para celular */}
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.slide_celular}
      >
        {skills
          .reduce((result: Skill[][], item, index) => {
            const chunkIndex = Math.floor(index / 4);
            if (!result[chunkIndex]) {
              result[chunkIndex] = []; // start a new chunk
            }
            result[chunkIndex].push(item);
            return result;
          }, [])
          .map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className={style.container_slide}>{renderSlides(chunk)}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Skills_Slide;
