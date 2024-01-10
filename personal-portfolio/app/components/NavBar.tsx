"use client"
import React, {useState} from "react";
import Link from "next/link"
import NavLink from "./NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";
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
    <nav className="bg-opacity-100 bg-[#121212] fixed top-0 left-0 right-0 z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
            <Link href={"/"} className="text-lg md:text-4xl text-white font-semibold p-2">
                Muhammad Raqib
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navBarOpen ? (
                        <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" onClick={()=>{setNavBarOpen(true)}}><Bars3Icon className="h-5 w-5"/></button>
                    ) : (<button className="flex items-center px-3 py-2 border" onClick={()=>{setNavBarOpen(false)}}><XMarkIcon className="h-5 w-5"/></button>)
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
        {navBarOpen ? <MenuOverLay links={navLinks}/> : null}
    </nav>
)
}

export default NavBar