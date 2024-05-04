import CardImage from "../cardimage/CardImage";
import TitleLabel from "../titlelabel/Titlelabe";
import style from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <div id="about" className="container">
      <div className={style.about_container}>
        <TitleLabel text={"About Me"} />

        <div className={style.about_body}>
          <div className={style.about_image}>
            <CardImage />
          </div>
          <div className={style.about_info}>
            <h1>Curious about me? Here you have it:</h1>
          
            <p>
              I started my journey in 2021, during high school, when I started
              studying programming. Since then, I have continued to grow and
              evolve, taking on new challenges and learning the latest
              technologies along the way. With experience in React.js, Next.js,
              Flutter, React Native and Kotlin, I'm focused on transforming
              ideas into incredible digital products. User experience is my
              priority, and I am committed to creating web and mobile
              applications that are user-centric, visually appealing, and highly
              functional. 
            </p>
            <p>
              I am trying to learn and evolve everyday by taking up new
              challenges and learning new things on a day to day basis. I love
              learning about user psychology and make a valuable user experience
              for all type of users.
            </p>

            <h3>Finally, some quick bits about me.</h3>
            <ul>
              <li>Technical high school in IT</li>
              <li>Mobile Developer</li>
              <li>Frontend Developer</li>
            </ul>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
