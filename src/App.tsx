import Navbar from "./Navbar.tsx"
import Home from "./sections/Home.tsx";
import About from "./sections/About.tsx"
import Projects from "./sections/Projects.tsx";

export default function App() {
  return (
    <div className="bg-ink min-h-screen mb-6">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <h1 className="text-3xl font-bold text-alabaster w-full text-center">This website is in the works!</h1>
    </div>
  );
}