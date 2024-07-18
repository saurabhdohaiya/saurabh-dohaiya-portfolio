"use client"

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import React from "react";

type Props = {
    children?: React.ReactNode;
}

function PageTransition({children}: Props) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{opacity: 1}}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay:0.2,
                            ease: "easeInOut",
                            duration:0.4
                        }
                    }}
                    className="h-screen w-screen fixed top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;