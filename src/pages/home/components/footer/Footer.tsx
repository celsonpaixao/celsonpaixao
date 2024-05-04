import TitleLabel from "../titlelabel/Titlelabe";
import { MdOutlineMail } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.scss"
const Footer = () => {
  return (
    <div id="contact" className="container">
      <div className={style.footer_container}>
        <TitleLabel text={"Get in touch"} />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          designer or a developer, have a query, or simply want to connect.
        </p>
        <div>
          <MdOutlineMail />
          <h3>celson2020fernando@gmail.com</h3>
          <button>
            <IoCopyOutline />
          </button>
        </div>
        <div>
          <IoCallOutline />
          <h3>+244 938149766</h3>
          <button>
            <IoCopyOutline />
          </button>
        </div>
        <p>You may also find me on these platforms!</p>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
