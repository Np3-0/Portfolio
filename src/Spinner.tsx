import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const text = ["Software Development", "Web Development", "Cybersecurity", "Engineering"];
const cycleDuration = 1500;

export default function Spinner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setIndex((previousIndex) => (previousIndex + 1) % text.length);
        }, cycleDuration);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="mt-8 h-[1.4em] overflow-hidden text-2xl font-semibold leading-[1.4] text-alabaster lg:mx-0 md:text-5xl" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
                <motion.p
                    key={text[index]}
                    className="mx-auto max-w-lg lg:mx-0"
                    initial={{ y: "100%", opacity: 0, rotateX: -72, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, rotateX: 72, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 0.5, 0.36, 1] }}
                    style={{ transformOrigin: "50% 50% -12px" }}
                >
                    {text[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}