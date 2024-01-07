"use client"
import React, {useState} from "react";
import Link from "next/link"
import NavLink from "./NavItem";
import { Bars3Icon,  } from "@heroicons/react/24/solid";
const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#Projects"
    },
    {
        title: "Contact",
        path: "#Contact"
    }
]
const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
            <Link href={"/"} className="text-lg md:text-4xl text-white font-semibold p-2">
                Muhammad Raqib
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    navBarOpen ? (
                        <button></button>
                    ) : (<button></button>)
                }
            </div>
            <div className="menu md:block md:w-auto hidden" id="navbar">
                <ul className="flex p-2 md:p-2 md:flex-row md:space=x=8">
                   {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
)
}

export default NavBar