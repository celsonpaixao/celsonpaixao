import TitleLabel from "../titlelabel/Titlelabe";
import WorksSlides from "../works_slide/works_slide";
import style from "./Works.module.scss";

import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const Works = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="500">
      <div className={style.works_conatainer}>
        <TitleLabel text={"Works"} />
        <p>Some of the notable projects I have built and developed:</p>
        <div className={style.works_body}>
          <WorksSlides />
        </div>
      </div>
    </div>
  );
};

export default Works;
