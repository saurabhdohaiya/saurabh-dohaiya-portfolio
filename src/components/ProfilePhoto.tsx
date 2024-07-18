"use client"


import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import ProfilePic from "../asset/images/ProfilePic.jpeg"

function ProfilePhoto() {
    return (
        <div className="h-full w-full relative">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity:1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn",
                    }
                }}
            >
                {/*Photo*/}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity:1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        }
                    }}
                    className="w-[298px] h-[298px] md:w-[498px] md:h-[498px] mix-blend-lighten absolute">
                    <Image
                        src={ProfilePic}
                        alt={"profilePhoto"}
                        priority
                        quality={100}
                        fill
                        className={"object-contain !rounded-full"}
                    />
                </motion.div>

                {/*    Circle*/}
                <motion.svg
                    className={"w-[300px] md:w-[506px] h-[300px] md:h-[506px]"}
                    fill={"transparent"}
                    viewBox={"0 0 506 506"}
                    xmlns={"http://www.w3.org/2000/svg"}
                >
                    <motion.circle
                        cx={"253"}
                        cy="253"
                        r="265"
                        stroke={"#00ff99"}
                        strokeWidth={"6"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{
                            strokeDasharray: "24 10 0 0"
                        }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration:12,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default ProfilePhoto;