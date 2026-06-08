import Navbar from "./Navbar.tsx"
import Home from "./sections/Home.tsx";
import About from "./sections/About.tsx"
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";

export default function App() {
  return (
    <div className="bg-ink min-h-screen mb-6">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}