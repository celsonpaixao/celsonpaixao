
import Footer from "../../components/footer/Footer";
import AboutMe from "../../components/aboutme/AboutMe";
import NavigationMenu from "../../components/navigation_menu/NavigationMenu";

const About = () => {
  return (
    <div className="page">
      <NavigationMenu />
      <AboutMe/>
      <Footer/>
    </div>
  );
};

export default About;
