import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Works_slide.module.scss";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaGithub, FaYoutube } from "react-icons/fa";
const WorksSlides = () => {
  const works = [
    {
      title: "📱 Apartaments App with Flutter",
      description: "Description for the project",
      imagebanner: "https://github.com/celsonpaixao/youtube-flutter/blob/main/apartament_app/8.jpg?raw=true",
      youtube: "https://youtu.be/aKN8mQuDmEM?si=KGa0K1RBPwgWyijl",
      project_url:
        "https://github.com/celsonpaixao/youtube-flutter/tree/main/apartament_app",
      tags: ["Flutter", "Dart", "Android", "MVC"],
    },
    {
      title: "📱Ui App Notes with Flutter",
      description: "Description for the project",
      imagebanner: "https://raw.githubusercontent.com/celsonpaixao/notes-app-ui/main/assets/images/9.jpg",
      youtube: "",
      project_url: "https://github.com/celsonpaixao/notes-app-ui",
      tags: ["Flutter", "Dart", "Android", "MVC"],
    },
    {
      title: "📱Ui App Mangas with Flutter",
      description: "Description for the project",
      imagebanner: "https://github.com/celsonpaixao/youtube-flutter/blob/main/aplicativo_de_manga/ThumbnailTamplate.jpg?raw=true",
      youtube: "https://www.youtube.com/watch?v=LqJf1OC70U8&t=6s",
      project_url:
        "https://github.com/celsonpaixao/youtube-flutter/tree/main/aplicativo_de_manga",
      tags: ["Flutter", "Dart", "Android", "MVC"],
    },
  ];
  return (
    <div>
      <Swiper
        className={style.container_slide}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        navigation={true}
        spaceBetween={50}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {works.map((item) => (
          <SwiperSlide>
            <div className={style.card}>
              <div>
                <div
                  className={style.project_image}
                  style={{ backgroundImage: `url(${item.imagebanner})` }}
                ></div>
              </div>
              <div className={style.project_info}>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <ul>
                  {item.tags.map((t) => (
                    <li>{t}</li>
                  ))}
                </ul>
                <div className={style.work_links}>
                  <a href={item.youtube} target="_black">
                    <FaYoutube />
                  </a>
                  <a href={item.project_url} target="_black">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorksSlides;
