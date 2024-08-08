import React from "react";
import style from "./CardVideo.module.scss";
import { FaYoutube } from "react-icons/fa";

// Define a interface para as propriedades do componente
interface CardVideoProps {
  title: string;
  description: string;
  thumb: string;
  videourl: string;
}

const CardVideo: React.FC<CardVideoProps> = ({
  title,
  description,
  thumb,
  videourl,
}) => {
  return (
    <div className={style.card_container}>
      <img src={thumb} alt={title} className={style.card_container_thumb} />
      <h2 className={style.card_container_title}>{title}</h2>
      <p className={style.card_container_description}>{description}</p>

      <a
        href={videourl}
        target="_blank"
        rel="noopener noreferrer"
        className={style.card_container_link}
      >
        <FaYoutube className={style.card_container_icon} />
      </a>
    </div>
  );
};

export default CardVideo;
