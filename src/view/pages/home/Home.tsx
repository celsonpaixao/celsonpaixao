import Header from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Works from "../../components/works/Works";
import Footer from "../../components/footer/Footer";
import NavigationMenu from "../../components/navigation_menu/NavigationMenu";
import QuicklyNavigation from "../../components/quickly_navigation/Quickly_Navigation";

const Home = () => {
  return (
    <div className="page">
      <NavigationMenu />
      <Header />
      <QuicklyNavigation/>
      <Footer/>
      {/* <Skills />
      <Experience />
      <Works /> */}
     
    </div>
  );
};

export default Home;
