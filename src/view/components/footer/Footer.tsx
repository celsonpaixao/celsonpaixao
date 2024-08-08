import { useState, useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import style from "./Footer.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const date = new Date();
  const year = date.getFullYear();
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
    <div className="container">
      <div className={style.footer_container}>
        <div className={style.footer_container_body_1}>
          <div>
            <MdOutlineMail />
            <p>celson2020paixao@gmail.com</p>
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
          <div className={style.footer_divider}></div>
          <div>
            <IoCallOutline />
            <p>+244 938149766</p>
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
        </div>

        <p>©{year}celsonpaixao</p>
      </div>
    </div>
  );
};

export default Footer;
