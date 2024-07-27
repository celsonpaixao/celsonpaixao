import { useState, useEffect } from "react";
import TitleLabel from "../titlelabel/Titlelabe";
import { MdOutlineMail } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [copySuccessEmail, setCopySuccessEmail] = useState<string>("");
  const [copySuccessPhone, setCopySuccessPhone] = useState<string>("");

  const handleCopyToClipboard = (
    text: string,
    setCopySuccess: React.Dispatch<React.SetStateAction<string>>
  ) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => {
          setCopySuccess("");
        }, 1500);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className={style.footer_container} id="contact">
      <TitleLabel text={"Get in touch"} />
      <div className="container">
        <p>
          Sinta-se à vontade para entrar em contato comigo se estiver procurando
          um desenvolvedor, tiver alguma dúvida ou simplesmente quiser se
          conectar.
        </p>
        <div>
          <MdOutlineMail />
          <h3>celson2020paixao@gmail.com</h3>
          <button
            onClick={() =>
              handleCopyToClipboard(
                "celson2020paixao@gmail.com",
                setCopySuccessEmail
              )
            }
          >
            <IoCopyOutline />
          </button>
          {copySuccessEmail && (
            <span className={style.copy_success}>{copySuccessEmail}</span>
          )}
        </div>
        <div>
          <IoCallOutline />
          <h3>+244 938149766</h3>
          <button
            onClick={() =>
              handleCopyToClipboard("+244 938149766", setCopySuccessPhone)
            }
          >
            <IoCopyOutline />
          </button>
          {copySuccessPhone && (
            <span className={style.copy_success}>{copySuccessPhone}</span>
          )}
        </div>
        <p>Você também pode me encontrar nessas plataformas!</p>
        <a
        className={style.footer_container_icon}
          href="https://www.linkedin.com/in/celson-paix%C3%A3o-1430b2276/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
