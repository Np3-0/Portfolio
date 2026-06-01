import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import heroImage1 from "../assets/spinner/1.svg";
import heroImage2 from "../assets/spinner/2.svg";
import heroImage3 from "../assets/spinner/3.svg";
import heroImage4 from "../assets/spinner/4.svg";
import Spinner from "../components/Spinner";

type Point = {
    x: number;
    y: number;
};

export default function Home() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseRef = useRef<Point | null>(null);
    const drawRef = useRef<(() => void) | null>(null);
    const frameRef = useRef<number | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const heroImages = [
        heroImage1,
        heroImage2,
        heroImage3,
        heroImage4,
    ];

    const cycleDuration = 1500;

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;

        if (!section || !canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        if (!context) {
            return;
        }

        const spacing = 28;
        const influenceRadius = 180;
        const baseRadius = 1.25;
        const maxRadius = 9;

        const render = () => {
            const bounds = section.getBoundingClientRect();
            const mouse = mouseRef.current;

            context.clearRect(0, 0, bounds.width, bounds.height);

            for (let y = spacing / 2; y < bounds.height; y += spacing) {
                for (let x = spacing / 2; x < bounds.width; x += spacing) {
                    const distance = mouse ? Math.hypot(mouse.x - x, mouse.y - y) : Number.POSITIVE_INFINITY;
                    const proximity = Math.max(0, 1 - distance / influenceRadius);
                    const radius = baseRadius + proximity * (maxRadius - baseRadius);
                    const alpha = 0.16 + proximity * 0.58;

                    context.beginPath();
                    context.fillStyle = `rgba(224, 225, 221, ${alpha.toFixed(3)})`;
                    context.arc(x, y, radius, 0, Math.PI * 2);
                    context.fill();
                }
            }

            frameRef.current = null;
        };

        const syncCanvasSize = () => {
            const bounds = section.getBoundingClientRect();
            const scale = window.devicePixelRatio || 1;

            canvas.width = Math.max(1, Math.round(bounds.width * scale));
            canvas.height = Math.max(1, Math.round(bounds.height * scale));
            canvas.style.width = `${bounds.width}px`;
            canvas.style.height = `${bounds.height}px`;
            context.setTransform(scale, 0, 0, scale, 0, 0);
        };

        const scheduleRender = () => {
            if (frameRef.current !== null) {
                return;
            }

            frameRef.current = window.requestAnimationFrame(render);
        };

        drawRef.current = scheduleRender;

        const resizeObserver = new ResizeObserver(() => {
            syncCanvasSize();
            scheduleRender();
        });

        syncCanvasSize();
        scheduleRender();
        resizeObserver.observe(section);

        return () => {
            resizeObserver.disconnect();

            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setImageIndex((previousIndex) => (previousIndex + 1) % heroImages.length);
        }, cycleDuration);

        return () => window.clearInterval(interval);
    }, []);

    const updateMousePosition = (event: React.PointerEvent<HTMLElement>) => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const bounds = section.getBoundingClientRect();

        mouseRef.current = {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        };

        drawRef.current?.();
    };

    const clearMousePosition = () => {
        mouseRef.current = null;
        drawRef.current?.();
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            onPointerMove={updateMousePosition}
            onPointerLeave={clearMousePosition}
            className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
            <canvas aria-hidden="true" ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">
                <div className="max-w-xl space-y-6 text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white md:text-6xl xl:text-7xl">
                        I&apos;m <span className="text-blue-600">Nate</span>
                    </h1>
                    <Spinner />
                </div>

                <div className="relative w-full max-w-md lg:max-w-lg">
                    <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-dusk via-lavender-gray to-alabaster opacity-70 blur-2xl" />
                    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-prussian/80 p-3 shadow-2xl shadow-black/40 backdrop-blur">
                        <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10" />
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.img
                                key={heroImages[imageIndex]}
                                src={heroImages[imageIndex]}
                                alt={`Hero preview ${imageIndex + 1}`}
                                className="relative z-10 h-105 w-full rounded-3xl object-cover object-center"
                                initial={{ y: "100%", opacity: 0, rotateX: -72, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                                exit={{ y: "-100%", opacity: 0, rotateX: 72, filter: "blur(8px)" }}
                                transition={{ duration: 0.55, ease: [0.22, 0.5, 0.36, 1] }}
                                style={{ transformOrigin: "50% 50% -12px" }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}