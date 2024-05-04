import TitleLabel from "../titlelabel/Titlelabe";
import WorksSlides from "../works_slide/works_slide";
import style from "./Works.module.scss";
const Works = () => {
  return (
    <div className="container">
      <div className={style.works_conatainer}>
      <TitleLabel text={"Works"} />
      <p>Some of the notable projects I have built and developed:</p>
      <div className={style.works_body}>
        <WorksSlides/>
      </div>
      </div>
     
    </div>
  );
};

export default Works;
