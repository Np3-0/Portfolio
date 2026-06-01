import Home from "./sections/Home.tsx";
import Navbar from "./Navbar"
import About from "./sections/About.tsx"

export default function App() {
  return (
    <div className="bg-ink min-h-screen mb-6">
        <Navbar />
        <Home />
        <About />
        <h1 className="text-3xl font-bold text-alabaster w-full text-center">This website is in the works!</h1>
    </div>
  );
}