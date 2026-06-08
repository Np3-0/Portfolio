import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import XButton from "../assets/icons/XButton.tsx";
import ProjectInfo from "../info/ProjectInfo.ts";
import videoBG from "../assets/video/sprite-animation.gif";

interface ProjectPopupProps {
    handleProjectDisplay: (isOpen: boolean, projectId: number) => void;
    id: number;
    bg?: string;
}

const cycleDuration = 2500;

export default function ProjectPopup({ handleProjectDisplay, id, bg }: ProjectPopupProps) {
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
            <div
                className="rounded-lg px-8 pt-10 pb-8 shadow-2xl relative w-300 lg:w-350 min-h-100 overflow-hidden"
                style={{ backgroundColor: ProjectInfo[id].colors[0] }}
            >
                {/* Video background for pitk */}
                {bg === "video" && (
                    <img
                        src={videoBG}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                )}

                <div className="absolute inset-0 bg-black/40 z-0" />

                <div
                    className="absolute top-4 right-4 cursor-pointer z-20"
                    onClick={() => handleProjectDisplay(false, id)}
                >
                    <XButton className="text-red-500" />
                </div>

                {/* ALL CONTENT MUST BE INSIDE THIS */}
                <div className="relative z-10 w-full h-full flex flex-col justify-start items-start">

                    <h1
                        className="text-5xl w-full text-center font-bold mb-4 ml-4"
                        style={{ color: ProjectInfo[id].colors[1] }}
                    >
                        {ProjectInfo[id].title}
                    </h1>

                    <p
                        className="w-full text-center text-xl font-semibold mt-4"
                        style={{ color: ProjectInfo[id].colors[2] }}
                    >
                        {ProjectInfo[id].statement}
                    </p>

                    <div className="w-full mt-6 flex flex-col lg:flex-row items-start gap-4">

                        <div className="w-full">
                            <h2
                                className="text-xl ml-4 font-semibold"
                                style={{ color: ProjectInfo[id].colors[2] }}
                            >
                                Tech Stack:
                            </h2>

                            {ProjectInfo[id].skills?.map((skill, index) => (
                                <p
                                    key={index}
                                    className="inline-flex items-center text-white text-xl font-medium px-6 py-3 rounded-full m-4"
                                    style={{ backgroundColor: ProjectInfo[id].colors[1] }}
                                >
                                    {skill}
                                </p>
                            ))}

                            <div className="w-full my-4">
                                <h2
                                    className="text-xl ml-4 my-4 font-semibold"
                                    style={{ color: ProjectInfo[id].colors[2] }}
                                >
                                    {ProjectInfo[id].design}
                                </h2>

                                <h2
                                    className="text-xl ml-4 my-4 font-semibold"
                                    style={{ color: ProjectInfo[id].colors[2] }}
                                >
                                    {ProjectInfo[id].debug}
                                </h2>
                            </div>
                        </div>

                        {/* IMAGE CAROUSEL */}
                        <div className="w-full flex justify-center items-center">
                            <div className="relative w-full max-w-md lg:max-w-lg">
                                <div className="relative overflow-hidden rounded-4xl border border-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur">
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

                                {ProjectInfo[id].image_captions[imageIndex] !== "N/A" && (
                                    <p
                                        className="text-lg font-medium mt-3 text-center px-2"
                                        style={{ color: ProjectInfo[id].colors[2] }}
                                    >
                                        {ProjectInfo[id].image_captions[imageIndex]}
                                    </p>
                                )}
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