import Image from "next/image";
import Link from "next/link";
import { BiMouse } from "react-icons/bi";
import { VscChevronRight } from "react-icons/vsc";
import { motion as m } from "framer-motion";

import Button from "../Button/Button";
import SubHeader from "../SubHeader/SubHeader";
import List from "../List/List";

export type ProjectProps = {
    title: string,
    description: string,
    siteLink?: string,
    githubLink?: string,
    captions?: string
    image: string,
    stackImages: {
        __typename: string,
        fileName: string
    }[],
    __typename?: string,
    stackNames: string[]
};

export default function Project({ 
    siteLink, 
    githubLink, 
    description, 
    title, 
    image, 
    captions, 
    stackImages, 
    stackNames }: ProjectProps): React.ReactElement {

    return (
        <div className="mb-32 md:px-4 lg:px-12 md:mx-6 bg-light overflow-hidden shadow">
            <div className="bg-light px-4">
                <SubHeader title={title}/>
                <Link href={`projects/${title}`} passHref>
                    <m.a className="group relative flex justify-center max-w-screen-2xl 2xl:w-max m-auto p-1 mb-8 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    aria-label="project case-study"
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        whileTap={{ translateY: -300, rotate: 45 }}
                        transition={{ duration: 0.6 }}>
                            <div className="absolute top-0 right-0 left-0 bottom-0 bg-purple-400 bg-opacity-90 z-10 transition duration-300 ease-in group-hover:bg-opacity-20"/>
                            <BiMouse className="absolute z-20 h-12 w-12 top-2/4 -mt-6 text-md text-light transition duration-150 ease-in group-hover:text-transparent animate-pulse" />
                            <Image src={`/images/${image}`}
                            alt={captions}
                            height={450}
                            width={900}/>
                    </m.a>
                </Link>
                <p className="text-xs italic text-dark text-center mb-8">
                    {captions}
                </p>
                <div className="flex flex-col 2xl:justify-center md:flex-row py-8 2xl:py-32">
                    <Button link={siteLink}
                    color="bg-light text-dark mb-2 md:mb-0 md:mr-4">
                        visit website
                    </Button>
                    <Button link={githubLink}
                    color="bg-offLight text-dark">
                        github repo
                    </Button>
                </div>
                <div className="bg-gradient-to-b pl-1 from-purple-400 via-purple-600 to-blue-800">
                    <h4 className="bg-light text-md text-sec uppercase my-8 2xl:my-24 pl-4">
                        project description
                    </h4>
                </div>
                <p className="text-xs text-dark py-2">
                    {description}
                </p>
                <div className="bg-gradient-to-b pl-1 from-purple-400 via-purple-600 to-blue-800">
                    <h4 className="bg-light text-md text-sec uppercase my-8 2xl:my-24 pl-4">
                        tech stack
                    </h4>
                </div>
                <List images={stackImages} names={stackNames} />
                <div className="w-max h-max my-16 bg-gradient-to-r from-purple-400 to-purple-600 p-0.5">
                    <Link href={`/projects/${title}`}>
                        <a className={`group flex items-center bg-pri w-max flex align-items whitespace-nowrap text-xxs text-light font-bold uppercase py-2 px-3 2xl:py-4 2xl:px-6 cursor-pointer transition duration-100 ease-in hover:bg-light hover:text-dark focus:outline-none focus:ring-4 focus:ring-yellow-400`}>
                            <span className="block pr-4">
                                case-study
                            </span>
                            <VscChevronRight className="text-xs transition duration-50 ease-in opacity-0 group-hover:opacity-100"
                            aria-label="top of the page"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};