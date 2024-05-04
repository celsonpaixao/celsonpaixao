import style from "./Titlelabel.module.scss"
const TitleLabel = ({ text }) => {
  return (
    <div className={style.titlelabel_container}>
      <div>
        <h1 className={style.text}>{text}</h1>
      </div>
    </div>
  );
};

export default TitleLabel;
