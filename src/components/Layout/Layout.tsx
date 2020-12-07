import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <main className="flex flex-col justify-between">
            <nav className="">
                <div className="h-1 w-full bg-gradient-to-r from-green-400 via-blue-400 to-pink-400"/>
                <div className="flex items-center py-6 px-12">
                    <div className="flex items-center p-2 bg-pri mr-4 cursor-pointer">
                        <Link href="/" >
                            <Image
                            src="/images/k.svg"
                            alt="logo of the letter k"
                            height={28}
                            width={28} />
                        </Link>
                    </div>
                    <span className="hidden sm:inline-block text-xs text-pri font-bold">
                        Kieran Roberts
                    </span>
                    <ul className="flex ml-auto font-bold capitalize">
                        <li className="flex-auto">
                            <Link href="#projects" passHref>
                                <a className="group block relative text-xxs text-green-400 py-2 px-4 md:py-3 md:px-6 border-2 border-pri overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-pri hover:text-light">
                                    projects
                                    <RiComputerLine className="absolute top-0 left-0 text-xl text-gray-400 text-opacity-30 transition duration-150 ease-in group-hover:text-white group-hover:text-opacity-20" />
                                </a>
                            </Link>
                        </li>
                        <li className="flex-auto ml-4 ml:mx-8">
                            <Link href="#projects" passHref>
                                <a className="group block relative text-xxs text-green-400 py-2 px-4 md:py-3 md:px-6 border-2 border-pri overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-pri hover:text-light">
                                    about
                                    <CgProfile className="absolute top-0 left-0 text-xl text-gray-400 text-opacity-30 transition duration-150 ease-in  group-hover:text-white group-hover:text-opacity-20"/>
                                </a>
                            </Link>
                        </li>
                        <li className="flex-auto ml-4 ml:mx-8">
                            <Link href="#projects" passHref>
                                <a className="group block relative text-xxs text-green-400 py-2 px-4 md:py-3 md:px-6 border-2 border-pri overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-pri hover:text-light">
                                    contact me
                                    <AiOutlinePhone className="absolute top-0 left-0 text-xl text-gray-400 text-opacity-30 transition duration-150 ease-in  group-hover:text-white group-hover:text-opacity-20" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
            <footer className="text-center bg-dark text-light p-4">
                <ul className="flex flex-col items-center">
                    <li className="mb-4">
                        <a href="https://github.com/kieran6roberts"  
                        className="text-lg">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                        className="text-lg">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
                <p className="capitalize text-sm text-pri">
                    created and designed by Kieran Roberts.
                </p>
                <span className="text-xxs text-gray-400">
                    kieran6roberts@gmail.com
                </span>
            </footer>
        </main>
    )
};