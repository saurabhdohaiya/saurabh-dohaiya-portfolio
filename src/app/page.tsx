import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import ProfilePhoto from "@/components/ProfilePhoto";
import Stats from "@/components/Stats";


const Home = () => {
    return (
        <section className="h-full">
            <div className={"container mx-auto h-full"}>
                <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-[3.5rem]">
                    <div className="text-center md:text-left  order-2 md:order-none">
                        <span className={"text-base"}>Software Developer</span>
                        <h1 className={"h2 mb-6"}>
                            Hello I'm
                            <br/>
                            <span className={"text-accent"}>
                                Saurabh Dohaiya
                            </span>
                        </h1>
                        <p className={"max-w-[500px] mb-9 text-white/80"}>
                            Description about me
                        </p>
                    {/*    Btns and socials*/}
                        <div className={"flex flex-col md:flex-row items-center gap-8"}>
                            <Button
                                variant={"outline"}
                                size={"lg"}
                                className={"rounded-full text-accent border-2 border-accent hover:bg-accent hover:text-white gap-2"}
                            >
                                <span>Download CV</span>
                                <FiDownload className={"text-xl"}/>
                            </Button>
                            <div className={"mb-8 md:mb-0"}>
                                <Social
                                    containerStyles={"flex gap-6"}
                                    iconStyles={"h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"order-1 md:order-none mb-8 md:mb-0"} >
                        <ProfilePhoto/>
                    </div>
                </div>
            </div>

            <Stats/>
        </section>
    );
}

export default Home;