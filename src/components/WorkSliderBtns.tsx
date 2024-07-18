"use client";

import {useSwiper} from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

import React from 'react';

type Props = {
    containerStyles: string,
    btnStyles: string,
    iconsStyles: string
};

function WorkSliderBtns({containerStyles, btnStyles, iconsStyles}: Props) {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={()=> swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    );
}

export default WorkSliderBtns;