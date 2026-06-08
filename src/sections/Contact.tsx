import resume from "../assets/docs/resume.pdf";
import EmailIcon from "../assets/icons/EmailIcon.tsx";
import PhoneIcon from "../assets/icons/PhoneIcon.tsx";
import LinkedIn from "../assets/icons/linkedin.svg";

export default function Contact() {
    return (
        <>
            <section id="contact" className="w-full flex flex-col items-center justify-start pt-12">
                <h1 className="font-bold text-6xl text-center text-blue-500 mb-8">Contact</h1>
                <div className="w-full max-w-4xl px-6 py-8 bg-gray-800 rounded-lg mb-12">
                    <h2 className="font-bold text-2xl text-blue-500 mb-4">Contact Info:</h2>
                    <div className="flex items-center mb-4">
                        <EmailIcon />
                        <p className="text-alabaster text-lg ml-4"><a href="mailto:nathanobrien.njo@gnail.com" className="text-blue-500 hover:underline font-semibold">
                            nathanobrien.njo@gnail.com
                        </a></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <PhoneIcon />
                        <p className="text-alabaster text-lg ml-4"><a href="tel:+1234567890" className="text-blue-500 hover:underline font-semibold">
                            +1 (973) 865-0530
                        </a></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src={LinkedIn} alt="LinkedIn" className="size-6 text-white" />
                        <p className="text-alabaster text-lg ml-4"><a href="https://www.linkedin.com/in/nathan-o-brien-40b508341/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
                            Nathan O'Brien
                        </a></p>
                    </div>
                </div>
                <iframe src={resume} className="w-4xl h-screen" title="Resume"/>
            </section>
        </>
    );
}