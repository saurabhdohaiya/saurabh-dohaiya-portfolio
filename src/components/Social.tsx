import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import {Introduction} from "@/config/home.config";

type Props = {
    containerStyles?: string,
    iconStyles: string,
}

const socials = [
    {icon: <FaGithub/>, path:Introduction.github},
    {icon: <FaLinkedinIn/>, path:Introduction.linkedin},
]



const Social = ({containerStyles, iconStyles}: Props) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
            })}
        </div>
    );
}

export default Social;