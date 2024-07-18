"use client"


import {Links} from "@/config/routes/links";
import Link from "next/link";
import {usePathname} from "next/navigation";

function MainNav() {
    const pathname = usePathname();

    return (
        <nav className={"flex gap-8 justify-between items-center"}>
            {
                Links.map((link, index) => {
                    return <Link href={link.path} key={index} className={`${
                        link.path === pathname && "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                })
            }
        </nav>
    );
}

export default MainNav;