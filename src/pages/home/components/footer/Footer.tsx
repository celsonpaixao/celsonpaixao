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
    <div
      id="contact"
      className="container"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className={style.footer_container}>
        <TitleLabel text={"Get in touch"} />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          designer or a developer, have a query, or simply want to connect.
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
        <p>You may also find me on these platforms!</p>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
