import style from "./Skills_Slide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface Skill {
  title: string;
  image: string;
}

// Component Skills_Slide
const Skills_Slide: React.FC = () => {
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

  const renderSlides = (skillsList: Skill[]) =>
    skillsList.map((item, index) => (
      <div key={index} className={style.card}>
        

        <img src={item.image} alt={item.title} className={style.card_image} />
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
