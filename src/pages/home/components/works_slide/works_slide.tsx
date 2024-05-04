import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Works_slide.module.scss";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const WorksSlides = () => {
  const works = [
    {
      title: "Title Project",
      description: "Description for the project",
      imagebanner: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      project_url: "",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    },
    {
      title: "Title Project",
      description: "Description for the project",
      imagebanner: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      project_url: "",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    },
  ];
  return (
    <div >
      <Swiper
        className={style.container_slide}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={true}
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorksSlides;
