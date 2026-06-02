import Card from "../components/Card.tsx";

export default function About() {
    return (
        <section id="about" className="relative flex flex-col min-h-screen overflow-hidden pt-12">
            <h1 className="text-6xl font-bold text-blue-500 w-full text-center xl:ml-96 2xl:text-7xl xl:text-start 2xl:ml-112">About Me</h1>
            <div className="w-full flex flex-col justify-center gap-x-24 gap-y-6 mt-12 mx-8 lg:flex-row">
                <Card index={0} />
                <Card index={1} type="Experience"/>
            </div>
            
        </section>
    );
}