import style from "./Skills_Slide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import _javascript from "../../../../assets/skills_images/Javascript.png";
import _typescript from "../../../../assets/skills_images/TypeScript.png";
import _react from "../../../../assets/skills_images/React.png";
import _node from "../../../../assets/skills_images/Nodejs.png";
import _sass from "../../../../assets/skills_images/Sass.png";
import _git from "../../../../assets/skills_images/Git.png";
import _github from "../../../../assets/skills_images/Github.png";
import _gitlab from "../../../../assets/skills_images/Gitlab.png";
import _bootstap from "../../../../assets/skills_images/Bootstrap.png";
import _next from "../../../../assets/skills_images/Nextjs.png";
import _nodemon from "../../../../assets/skills_images/Nodemon.png";
import _insomnia from "../../../../assets/skills_images/Insomnia.png";
import _dart from "../../../../assets/skills_images/Dart.png";
import _flutter from "../../../../assets/skills_images/Flutter.png";
import _kotlin from "../../../../assets/skills_images/Kotlin.png";
import _mongodb from "../../../../assets/skills_images/MongoDB.png";
import _postgres from "../../../../assets/skills_images/PostgreSQL.png";
import _firebase from "../../../../assets/skills_images/firebase.png";
import _yarn from "../../../../assets/skills_images/yarn.png";
import _npm from "../../../../assets/skills_images/npm.png";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Skills_Slide = () => {
  const skills1 = [
    {
      titile: "Javascript",
      image: _javascript,
    },
    {
      titile: "Typescript",
      image: _typescript,
    },
    {
      titile: "Sass",
      image: _sass,
    },
    {
      titile: "Bootstrap",
      image: _bootstap,
    },
    {
      titile: "React Js",
      image: _react,
    },
    {
      titile: "Next Js",
      image: _next,
    },
    {
      titile: "Git",
      image: _git,
    },
    {
      titile: "GitHub",
      image: _github,
    },
    {
      titile: "GitLab",
      image: _gitlab,
    },
    {
      titile: "NPM",
      image: _npm,
    },
  ];
  const skills2 = [
    {
      titile: "Kotlin",
      image: _kotlin,
    },
    {
      titile: "Dart",
      image: _dart,
    },
    {
      titile: "Flutter",
      image: _flutter,
    },
    {
      titile: "Firebase",
      image: _firebase,
    },
    {
      titile: "Postgres",
      image: _postgres,
    },
    {
      titile: "MongoDb",
      image: _mongodb,
    },
    {
      titile: "Node Js",
      image: _node,
    },
    {
      titile: "Nodemon",
      image: _nodemon,
    },
    {
      titile: "Insomnia",
      image: _insomnia,
    },
    {
      titile: "Yarn",
      image: _yarn,
    },
  ];
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className={style.container_slide}>
            {skills1.map((item, index) => (
              <div key={index} className={style.card}>
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={style.card_image}
                ></div>

                <p>{item.titile}</p>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container_slide}>
            {skills2.map((item, index) => (
              <div key={index} className={style.card}>
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={style.card_image}
                ></div>

                <p>{item.titile}</p>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Skills_Slide;
