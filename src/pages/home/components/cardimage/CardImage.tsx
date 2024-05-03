import style from "./CardImage.module.scss";
const CardImage = () => {
  return (
    <div className={style.cardimage_conatiner}>
      <div className={style.cardimage_image}></div>
      <div className={style.cardimage_back}></div>
    </div>
  );
};

export default CardImage;
