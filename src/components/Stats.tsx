"use client"

import {Statistics} from "@/config/home.config";
import React from 'react';
import CountUp from "react-countup";

function Stats() {
    return (

        <section>
            <div className="container mx-auto">
                <div className={"flex flex-wrap gap-6 max-w-[80vw] max-auto md:max-w-none mx-8 my-4 md:m-0"}>
                    {Statistics.map((item,index)=> {
                        return (
                            <div
                                className={"flex-1 flex gap-4 items-center justify-center md:justify-start"}
                                key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className={"text-3xl md:text-6xl font-extrabold"}
                                />
                                <p className={`${item.description.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80` }>
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

export default Stats;