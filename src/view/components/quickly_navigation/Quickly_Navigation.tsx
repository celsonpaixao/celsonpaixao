import { Link } from "react-router-dom";
import Quickly_navigation_Data from "../../../data/quickly_navigation_data";
import style from "./Quickly_Navigation.module.scss";

function QuicklyNavigation() {
  return (
    <div className={style.quickly_navigation_container}>
      {Quickly_navigation_Data.map((item, index) => (
        <Link
          to={item.router}
          key={index}
          className={style.quickly_navigation_card_image}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div className={style.overlay}></div>
          <p className={style.quickly_navigation_card_text}>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default QuicklyNavigation;
