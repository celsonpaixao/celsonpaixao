import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";
import style from "./Home.module.scss"

const Home = () => {
  return (
    <div className={style.home_container}>
      <div className={style.color_blur1}></div>
      <div className={style.color_blur2}></div>
      <div className={style.color_blur3}></div>
      <div className={style.color_blur4}></div>
      <div className={style.color_blur5}></div>
      <div className={style.color_blur6}></div>
      <div className={style.color_blur7}></div>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
