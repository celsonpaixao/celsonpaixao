import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <div>
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
