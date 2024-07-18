"use client"

import React from 'react';

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs,
    FaFigma,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiMongodb
} from "react-icons/si";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

// Resume constants
import {
    AboutMe,
    Education,
    Skills,
    Experience
} from "@/config/resume.config";


function Resume() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity:1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                }
            }}
            className={"min-h-[80vh] flex items-center justify-center py-12 md:py-0"}
        >
            <div className={"container mx-auto"}>
                <Tabs defaultValue={"experience"}
                      className={"flex flex-col md:flex-row gap-[4rem]"}
                      >
                    <TabsList className={"flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6"}>
                        <TabsTrigger value={"experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"education"}>Education</TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                        <TabsTrigger value={"aboutMe"}>About me</TabsTrigger>
                    </TabsList>
                {/*    Content*/}
                    <div className={"min-h-[70vh] w-full"}>
                        {/*Experience*/}
                        <TabsContent value={"experience"} className={"w-full"}>
                            <div className={"flex flex-col gap-8 text-center md:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{Experience.title}</h3>
                                {/*<p className={"max-w-[37.8rem] text-white/60 mx-auto md:mx-0"}>*/}
                                {/*    {Experience.description}*/}
                                {/*</p>*/}
                                <ScrollArea className={"h-25rem"}>
                                    <ul className={"grid grid-cols-1 md:grid-col-2 gap-[1.75rem]"}>
                                        {
                                            Experience.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className={"bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"}>
                                                        <span className={"text-accent"}>{item.duration}</span>
                                                        <h3 className={"text-xl max-w-[16rem] min-h-[4rem] text-center md:text-left"}> {item.position}</h3>
                                                        <div className={"flex items-center gap-3"}>
                                                            <span
                                                                className={"w-1.5 h-1.5 rounded-full bg-accent"}></span>
                                                            <p className={"text-white/60"}>{item.company}</p>
                                                        </div>
                                                        <div className={"flex items-center gap-3"}>
                                                            <ul className={"flex flex-col gap-3"}>
                                                                {
                                                                    item.description.map((point, index) => {
                                                                        return (
                                                                            <li key={index}
                                                                                className={"text-sm text-white/60 gap-3"}>
                                                                                {point}
                                                                            </li>
                                                                        );
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*Education*/}
                        <TabsContent value={"education"} className={"w-full"}>
                            <div className={"flex flex-col gap-8 text-center md:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{Education.title}</h3>
                                {/*<p className={"max-w-[37.8rem] text-white/60 mx-auto md:mx-0"}>*/}
                                {/*    {Education.description}*/}
                                {/*</p>*/}
                                <ScrollArea className={"h-25rem"}>
                                    <ul className={"grid grid-cols-1 md:grid-col-2 gap-[1.75rem]"}>
                                        {
                                            Education.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className={"bg-[#232329] h-[12rem] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"}>
                                                        <span className={"text-accent"}>{item.duration}</span>
                                                        <h3 className={"text-xl max-w-[16rem] min-h-[4rem] text-center md:text-left gap-1 mb-4"}>
                                                            {item.course}
                                                            <p className={"text-white/60"}>{item.result}</p>
                                                        </h3>
                                                        <div className={"flex items-center gap-3"}>
                                                            <span
                                                                className={"w-1.5 h-1.5 rounded-full bg-accent"}></span>
                                                            <p className={"text-white/60"}>{item.institution}</p>

                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*Skills*/}
                        <TabsContent value={"skills"} className={"w-full h-full"}>
                            <div className={"flex flex-col gap-8"}>
                                <div className={"flex flex-col gap-8 text-center md:text-left"}>
                                    <h3 className={"text-4xl font-bold"}>{Skills.title}</h3>
                                    {/*<p className={"max-w-[25rem] text-white/60 mx-auto md:mx-0"}>{Skills.description}</p>*/}
                                </div>
                                <ul className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-[2rem] gap-4"}>
                                    {Skills.skillList.map((item, index) => {
                                        return (
                                            <li key={index} className={"bg-[#232329]"}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger
                                                            className={"w-full h-[10rem] bg-[#232329] rounded-xl flex justify-center items-center group"}>
                                                            <div
                                                                className={"text-6xl group-hover:text-accent transition-all duration-300"}>{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className={"capitalize"}>{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className={"flex flex-col w-full gap-3"}>
                                    {Skills.description.map((point, index) => {
                                        return(
                                            <li className={"text-white/60 text-sm mx-auto md:mx-0"} key={index}>{point}</li>
                                        );
                                    })}
                                </div>

                            </div>
                        </TabsContent>
                        {/*AboutMe*/}
                        <TabsContent value={"aboutMe"} className={"w-full text-center md:text-left"}>
                            <div className={"flex flex-col gap-[2rem]"}>
                                <h3 className={"text-4xl font-bold"}>{AboutMe.title}</h3>
                                <p className={"text-white/60 mx-auto md:mx-0 text-base"}>{AboutMe.description}</p>
                                <ul className={"grid grid-cols-1 md:grid-cols-2 gap-y-6  mx-auto md:mx-0"}>
                                    {
                                        AboutMe.info.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className={"flex items-center justify-center md:justify-start gap-4"}>
                                                    <span className={"text-white/60"}>{item.fieldName}</span>
                                                    <span className={"text-white text-base"}>{item.fieldValue}</span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;