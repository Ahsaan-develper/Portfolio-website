import AboutSection from "./_component/about";
import EducationPage from "./_component/education";
import Footer from "./_component/footer";
import Header from "./_component/header";
import ProjectShowcase from "./_component/projects";
import ServicesPage from "./_component/services";
import TechStack from "./_component/techstack";

export default function Home (){
    return (
      <div>
           <Header />
        <section id="about"><AboutSection /></section>
        <section id="education"><EducationPage /></section>
        <section id="skills"><TechStack /></section>
        <section id="work">  <ProjectShowcase /></section>
        <section id="services"> <ServicesPage /></section>
       
        <Footer />
      </div>
    )
}