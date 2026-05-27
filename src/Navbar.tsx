export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center">
                        <a href="/"><span className="text-blue-500 font-bold text-2xl">NO.</span></a>
                    </div>
                    <div className="block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-semibold text-lg">About</a>
                            <a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-semibold text-lg">Projects</a>
                            <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-semibold text-lg">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}