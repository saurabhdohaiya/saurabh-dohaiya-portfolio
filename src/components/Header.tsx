import Link from "next/link";
import MainNav from "@/components/MainNav";
import {AlarmClockMinus} from "lucide-react";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between w-full">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        SD
                        <span className={"text-accent"}>.</span>
                    </h1>
                </Link>
                <div className={"hidden xl:flex gap-8"}>
                    <MainNav/>
                    <Link href={"/contact"}>
                        <Button className={"rounded-full text-accent border-2 border-accent hover:bg-accent hover:text-white"}>Hire me</Button>
                    </Link>
                </div>
                <div className={"flex md:hidden"}>
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
}

export default Header;