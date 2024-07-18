"use client";

import React, {useState} from 'react';
import {Projects} from "@/config/work.config";
import { motion } from 'framer-motion';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

function Work() {
    const [project, setProject] = useState(Projects[0]);

    const handleSlideChange = (swiper: { activeIndex: any; }) => {
        const currentIndex = swiper.activeIndex;
        setProject(Projects[currentIndex]);
    }
    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition:{
                    delay:2.4,
                    duration:0.4,
                    ease: "easeIn",
                }
            }}
            className={"min-h-[80vh] flex flex-col justify-center py-12 md:p-0"}
        >
            <div className={"container mx-auto"}>
                <div className={"flex flex-col md:flex-row md:gap-8"}>
                    <div className={"w-full md:w-[50%] md:h-[30rem] flex flex-col md:justify-between order-2 md:order-none" }>
                        <div>
                            {/*Project Number*/}
                            <div className={"text-8xl leading-none font-extrabold text-transparent text-outline"}>
                                {project.num}
                            </div>
                            {/*Category*/}
                            <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"}>
                                {project.category} project
                            </h2>
                            {/*Description*/}
                            <p className={" text-white/60"}>{project.description}</p>
                            {/*Tech stack*/}
                            <ul className={"flex gap-4"}>
                                {project.technologies.map((item, index) => {
                                    return(
                                        <li key={index} className={"text-xl text-accent"}>
                                            {item.name}
                                        {/*    remove the last commap*/}
                                            {index !== project.technologies.length - 1 && ", "}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/*border*/}
                            <div className={"border-b border-white/20 mb-4 pb-2"}></div>
                            {/*buttons*/}
                            <div className={"flex items-center gap-4"}>
                                {/*live project button*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className={"w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group"}>
                                                <BsArrowUpRight className={"text-white text-3xl group-hover:text-accent"} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*{Github link*!/*/}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className={"w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group"}>
                                                <BsGithub className={"text-white text-3xl group-hover:text-accent"} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full md:w-[50%]"}>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className={"md:h-[32.5rem] mb-12"}
                            onSlideChange={handleSlideChange}
                        >
                            {
                                Projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className={"w-full"}>
                                            <div className={"h-[28.75rem] relative group flex justify-center items-center bg-pink-50/20"}>
                                                {/*/overlay*/}
                                                <div className={"absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"}></div>
                                                {/*/Image*/}
                                                <div className={"relative w-full h-full"}>
                                                    <Image 
                                                        src={project.image} 
                                                        fill 
                                                        className={"object-cover"} 
                                                        alt={project.title}/>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        {/*    Slider Buttons*/}
                            <WorkSliderBtns
                                containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_1.375rem)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"}
                                btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[1.375rem] w-[2.45rem] flex justify-center items-center transition-all" }
                                iconsStyles={""}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;