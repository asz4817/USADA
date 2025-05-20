import USADALogo from '../assets/USADA logo.png';
import profile from '../assets/profile.png';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import type { ReactNode, ComponentType } from "react";

type DropDownProps = {
  children: ReactNode;
  href: string;
  DropDownContent: ComponentType;
};


const DropDown = ({children, href, DropDownContent}: DropDownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div 
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}            className='relative h-fit w-fit'
        >
            <NavLink 
                to={href}
                className="relative z-50"
            >
                {children}
                <span
                    style = {{
                        transform: open ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className='absolute -bottom-2 -left-1 -right-1 bg-indigo-300 h-1 rounded-full transition-transform duration-300 ease-out'
                >
                </span>
            </NavLink>
            <AnimatePresence>
            {open && (
                <motion.div
                    initial = {{ opacity:0, y:15}}
                    animate = {{ opacity: 1, y:0}}
                    exit={{ opacity: 0, y:15}}
                    transition = {{duration: 0.3, ease:'easeOut'}}
                    className="absolute left-1/2 top-10 -translate-x-1/2 z-50"
                >
                    <div className="absolute -top-6 left-0 right-0 h-6" />
                    {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-100" /> */}
                    <DropDownContent />
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

const Navbar = () => {
    return (
    <>
        <nav className="border-b mx-auto z-50 flex-1 w-[85%] h-22">
            <div className="flex h-full items-center">

                <div className="flex justify-center md:items-stretch md:justify-start"> 
                    <NavLink 
                        to="/"
                        className="items-center mr-4" >
                        <img
                            className="h-20 w-auto"
                            src={USADALogo}
                            alt="USADA Logo"
                        />
                    </NavLink>
                </div>

                <div className='w-full flex justify-end'>
                    <div className="flex items-center w-full space-x-[4%] text-l justify-end">
                        <DropDown href="/about" DropDownContent={AboutContent}> About Us</DropDown>
                        <NavLink 
                            to="/members"
                            className="relative group inline-block"
                        >
                            Our Members
                            <span
                                className='absolute -bottom-2 -left-1 -right-1 bg-indigo-300 h-1 transform scale-x-0 group-hover:scale-x-100 rounded-full transition-transform duration-300 ease-out'
                            ></span>
                        </NavLink> 
                        
                        <DropDown href="/competitions" DropDownContent={CompetitionsContent}> Competitions </DropDown>
                        <DropDown href="/contact" DropDownContent={ContactContent}> Contact Us </DropDown>

                        <NavLink
                            to="/admin"
                            className= " "
                        > <img
                            className="h-10"
                            src={profile}
                            alt="profile"
                        /></NavLink>
                            </div>
                </div>
                
                

            </div>
        </nav>
    </>
    )
}




const AboutContent = () => {
    return <div className='p-5 min-w-max shadow-xl bg-white'>
        <NavLink
            to="/about/board-of-directors"
            className="block text-m hover:underline whitespace-nowrap"
        >
            Board of Directors
        </NavLink>
    </div>
}
const CompetitionsContent = () => {
    return <div className='p-6 min-w-max shadow-xl bg-white'>
        <div className='space-y-3 flex gap-4'>
        <div className='flex flex-col gap-1'>
            <h3 className="mb-2 font-semibold">USADA 2025</h3>
            <NavLink
                to="/competitions/registration"
                className="block text-sm hover:underline whitespace-nowrap"
            >
                Registration
            </NavLink>
            <NavLink
                to="/competitions/structure-and-logistics"
                className="block text-sm hover:underline whitespace-nowrap"
            >
                Structure & Logistics
            </NavLink>
            <NavLink
                to="/competitions/scoring-and-awards"
                className="block text-sm hover:underline whitespace-nowrap"
            >
                Scorindg & Awards
            </NavLink>
            <NavLink
                to="/competitions/travel-and-lodging"
                className="block text-sm hover:underline whitespace-nowrap"
            >
                Travel & Lodging
            </NavLink>
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className="mb-2 font-semibold">Past Competitions</h3>
                <NavLink
                    to="/competitions/usada-2023"
                    className="block text-sm hover:underline whitespace-nowrap"
                >
                    USADA 2023
                </NavLink>
                <NavLink
                    to="/competitions/usada-2024"
                    className="block text-sm hover:underline whitespace-nowrap"
                >
                    USADA 2024
                </NavLink>
        </div>
        </div>
    </div>
}
const ContactContent = () => {
    return <div className='p-5 min-w-40 flex justify-center shadow-xl bg-white'>
        <NavLink
            to="contact/donate"
            className="block text-m hover:underline whitespace-nowrap"
        >
            Donate
        </NavLink>
    </div>
}



export default Navbar
