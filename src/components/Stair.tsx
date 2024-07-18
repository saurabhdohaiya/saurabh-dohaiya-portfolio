import React from 'react';
import {motion} from 'framer-motion';

function Stair() {
    const totalSteps = 6;
    const stairAnimation = {
        initial: {
            top: "0%"
        },
        animate: {
            top: "100%"
        },
        exit: {
            top: ["100%", "0%"],
        }
    };

    const reverseIndex = (index:number) => {
        return totalSteps - index - 1;
    }

    return (
        <>
            {[...Array(totalSteps)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="size-full bg-white relative"
                    />
                );
            })}
        </>
    );
}

export default Stair;