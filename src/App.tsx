import Home from "./Home";
import Navbar from "./Navbar"

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
        <Navbar />
        <Home />
        <h1 className="text-3xl font-bold text-alabaster w-full text-center">This website is in the works!</h1>
    </div>
  );
}