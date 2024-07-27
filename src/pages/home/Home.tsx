import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";
import NavigationMenu from "./components/navigation_menu/NavigationMenu";

const Home = () => {
  return (
    <div className="home">
      <NavigationMenu />
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
