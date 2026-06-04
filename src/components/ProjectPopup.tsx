import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import XButton from "../assets/icons/XButton.tsx";
import ProjectInfo from "../info/ProjectInfo.ts";

interface ProjectPopupProps {
    handleProjectDisplay: (isOpen: boolean, projectId: number) => void;
    id: number;
}

const cycleDuration = 2500;

export default function ProjectPopup({ handleProjectDisplay, id }: ProjectPopupProps) {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
    const interval = window.setInterval(() => {
        setImageIndex((prev) => (prev + 1) % ProjectInfo[id].images.length);
    }, cycleDuration);

    return () => {
        window.clearInterval(interval);
        setImageIndex(0); 
    };
}, [id]);

    return (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-lg px-8 pt-10 pb-8 shadow-2xl relative w-350 min-h-250" style={{ backgroundColor: ProjectInfo[id].colors[0] }}>
                <div className="absolute top-4 right-4 cursor-pointer" onClick={() => handleProjectDisplay(false, id)}>
                    <XButton className="hover:text-red-500 transition-colors" />
                </div>

                <div className="w-full h-full flex flex-col justify-start items-start">
                    <h1 className="text-5xl w-full text-center font-bold mb-4 ml-4" style={{ color: ProjectInfo[id].colors[1] }}>
                        {ProjectInfo[id].title}
                    </h1>
                    <p className="w-full text-center text-xl font-semibold mt-4" style={{ color: ProjectInfo[id].colors[2] }}>
                        {ProjectInfo[id].statement}
                    </p>

                    <div className="w-full mt-6 flex flex-col lg:flex-row items-start gap-4">
                        <div className="w-full">
                            <h2 className="text-xl ml-4 font-semibold" style={{ color: ProjectInfo[id].colors[2] }}>
                                Tech Stack:
                            </h2>
                            {ProjectInfo[id].skills?.map((skill, index) => (
                                <p key={index} className="inline-flex items-center text-alabaster text-xl font-medium px-6 py-3 rounded-full m-4" style={{ backgroundColor: ProjectInfo[id].colors[1] }}>
                                    {skill}
                                </p>
                            ))}

                            <div className="w-full my-4">
                                <h2 className="text-xl ml-4 my-4 font-semibold" style={{ color: ProjectInfo[id].colors[2] }}>
                                    {ProjectInfo[id].design}
                                </h2>
                                <h2 className="text-xl ml-4 my-4 font-semibold" style={{ color: ProjectInfo[id].colors[2] }}>
                                    {ProjectInfo[id].debug}
                                </h2>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                            <div className="relative w-full max-w-md lg:max-w-lg">
                                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-dusk via-lavender-gray to-alabaster opacity-70 blur-2xl" />
                                <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-prussian/80 p-3 shadow-2xl shadow-black/40 backdrop-blur">
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10" />
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.img
                                            key={ProjectInfo[id].images[imageIndex]}
                                            src={ProjectInfo[id].images[imageIndex]}
                                            alt={`Hero preview ${imageIndex + 1}`}
                                            className="relative z-10 h-105 w-full rounded-3xl object-cover object-center"
                                            initial={{ x: "100%", opacity: 0, rotateY: -72, filter: "blur(8px)" }}
                                            animate={{ x: 0, opacity: 1, rotateY: 0, filter: "blur(0px)" }}
                                            exit={{ x: "-100%", opacity: 0, rotateY: 72, filter: "blur(8px)" }}
                                            transition={{ duration: 0.55, ease: [0.22, 0.5, 0.36, 1] }}
                                            style={{ transformOrigin: "50% 50% -12px" }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        className="mt-4 px-6 py-3 text-white font-bold rounded-full ml-4 hover:cursor-pointer hover:scale-[1.05] transition-transform duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ProjectInfo[id].link}
                        style={{ backgroundColor: ProjectInfo[id].colors[1] }}
                    >
                        View Project!
                    </a>
                </div>
            </div>
        </div>
    );
}