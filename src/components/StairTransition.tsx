"use client";

import React from 'react';
import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import Stair from "@/components/Stair";

function StairTransition() {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className={"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"}>
                    <Stair/>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default StairTransition;