'use client'

import { navLink } from "./data";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";
import floor from '@public/assets/images/download.jpg';
import Image from 'next/image';


const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen((prev)=>!prev)
  };

  return (
    <div className="w-full flex items-center justify-between p-3 bg-black fixed top-0 z-10">
      <MdMenu
        className="absolute top-2 left-2 text-white sm:visible lg:hidden"
        size={30}
        onClick={handleOpen}
      />
      <Image
          width="fill"
          alt="3rdfloor digital"
          src={floor}
          className="profileImg w-32 h-32 rounded-full"
        />
      {
        !open ? 
        (<ul className="flex lg:flex-row sm:flex-col">
        {
            navLink.map((item, id) => (
                <Link className="navlink mx-5 my-5 hover:text-orange-500 active:text-orange-500 text-white capitalize text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 cursor-pointer" 
                key={id} to={item.path} spy={true} smooth={true} offset={50} duration={500} >
                  {item.title}
                </Link>
            ))
        }
      </ul>):
        ('')
      }
    </div>
  )
}

export default Nav
