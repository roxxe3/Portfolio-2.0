import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import TechStack from "./Tech";
import Contact from "./Contact";
import About from "./About";
export default function App() {
  return (
    <div className="pt-6.5">
      <Header />
      <Hero />
      <Title title="My Development Workflow" />
      <Steps />
      <Title title="Some featured projects" />
      <div id="projects">
        <Project
          title="Project Name"
          number="1"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
        <Project
          title="Project Name"
          number="2"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
        <Project
          title="Project Name"
          number="3"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
      </div>
      <Title title="Skills & Technologies" />

      <TechStack />
      <Title title="About Me" />
      <About />
      <Contact />
    </div>
  );
}
