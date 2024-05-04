import style from "./Titlelabel.module.scss";

interface TitleLabelProps {
  text: string;
}

const TitleLabel = ({ text }: TitleLabelProps) => {
  return (
    <div className={style.titlelabel_container}>
      <div>
        <h1 className={style.text}>{text}</h1>
      </div>
    </div>
  );
};

export default TitleLabel;
