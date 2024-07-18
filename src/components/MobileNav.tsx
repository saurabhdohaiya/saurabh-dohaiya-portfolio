"use client"

import React from 'react';
import {Links} from "../config/routes/links";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { CiMenuFries } from 'react-icons/ci';
import Link from "next/link"; // Adjust the import based on your setup


function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className={"flex justify-center items-center"}>
                <CiMenuFries className={"text-[2rem] text-accent"}/>
            </SheetTrigger>
            <SheetContent className={"flex flex-col"}>
                <div className={"mt-32 flex mb-40 text-center text-2xl justify-center"}>
                    <Link href={"/"} className={"flex items-center justify-center"}>
                        <h1>SD</h1>
                        <span className={"text-accent"}>.</span>
                    </Link>
                </div>
                <nav className={"flex flex-col justify-center items-center gap-2"}>
                    {Links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={"capitalize font-medium hover:text-accent transition-all"}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;