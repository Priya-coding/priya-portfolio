import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import WorkExperienceStudy from "../components/WorkExperienceStudy";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/cert";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-20"></div>{/* Add a gap between Hero and AboutMe */}
      <AboutMe />
      <div className="mt-20"></div>
      <WorkExperienceStudy />
      <div className="mt-20"></div>
      <Skills />
      <div className="mt-20"></div>
      <Projects />
      <div className="mt-20"></div>
      <Certifications />
    </>
  );
}
