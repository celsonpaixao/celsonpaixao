import style from "./Titlelabel.module.scss";

interface ITitleLabel {
  text: string;
}

const TitleLabel = ({ text }: ITitleLabel) => {
  return (
    <div className={style.titlelabel_container}>
      <div>
        <h1 className={style.text}>{text}</h1>
      </div>
    </div>
  );
};

export default TitleLabel;
