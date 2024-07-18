"use client";

import { motion } from 'framer-motion';
import React from 'react';
import {ContactInfo} from "@/config/contact.config";

function Contact() {
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
            className={"py-6"}
        >
            <div className={"container mx-auto"}>
                <div className={"flex flex-col md:Flex-row gap-[2rem]"}>
                    <div className={"flex-1 flex items-center md:justify-between mb-8 md:mb-0"}>
                        <ul className={"flex flex-col gap-10"}>
                            {ContactInfo.map((item, index) => {
                                return (
                                    <li key={index} className={"flex items-center gap-6"}>
                                        <div className={"w-[3.25rem] h-[3.25rem] md:[4.5rem] md:[4.5rem] bg-[#27272c] text-accent rounded-md flex items-center justify-center"}>
                                            <div className={"text-[1.725rem]"}>{item.icon}</div>
                                        </div>
                                        <div className={"flex-1"}>
                                            <p className={"text-white/60 text-xs md:text-sm"}>{item.title}</p>
                                            <h3 className={"text-base md:text-xl "}>{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    );
}

export default Contact;