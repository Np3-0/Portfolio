"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import eosus from "/eosus.png"
import tavio from "/tavio.png"
import pitk from "/pitk.png"
import walkmini from "/walkmini.png"

export default function ScrollHorizontal() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Move from first item centered to last item centered
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

    return (
        <>
            <section id="projects" className="flex h-[10vh] flex-col items-center justify-end pb-20 text-center w-full">
                <h1 className="font-bold text-6xl text-center text-blue-500">Projects</h1>
            </section>

            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 flex h-screen w-full items-center justify-start overflow-hidden">
                    <motion.div
                        className="flex gap-10 items-center pl-[calc(50vw-200px)] pr-6 will-change-transform max-sm:gap-3.75 max-sm:pl-[calc(50vw-140px)]"
                        style={{ x }}
                    >
                        {items.map((item) => (
                            <div
                                className="shrink-0 w-100 h-125 rounded-xl relative overflow-hidden bg-cover bg-center max-sm:w-70 max-sm:h-87.5 hover:cursor-pointer hover:scale-[1.05] transition-transform duration-300"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >

                            <div
                                className="absolute inset-0 mix-blend-multiply"
                                style={{ background: `linear-gradient(to bottom, transparent 40%, ${item.color})` }}
                            />

                                <div className="absolute bottom-7.5 left-7.5 z-10">
                                    <h2 className="text-alabaster font-bold m-0 text-2xl">{item.label}</h2>
                                </div>
                            </div>
                        ))}
                        
                    </motion.div>
                </div>
            </div>
        </>
    )
}

const items = [
    { color: "#902D41", label: "Eosus", image: eosus },
    { color: "#2364AA", label: "Tavio", image: tavio },
    { color: "#F5D23A", label: "Please Impress the King", image: pitk },
    { color: "#AA2AAA", label: "Walk-Mini", image: walkmini },
]

const ITEM_WIDTH = 400
const GAP = 30
