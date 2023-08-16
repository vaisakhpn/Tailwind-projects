import React,{ useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] items-center  py-[5px] flex justify-between mx-auto">
        <div className="text-3xl font-bold">Test Project</div>
        {
            toggle ? <AiOutlineClose  onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
            : 
            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
        }     
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
        {/* responsive */}
        <ul className={` duration-300  md:hidden w-full h-screen text-white fixed bg-black  top-[78px] ${toggle? "left-0" : "left-[-100%]"}` }>
          <li className=" m-5 py-5">Home</li>
          <li className="m-5 py-5">Company</li>
          <li className="m-5 py-5">Resources</li>
          <li className="m-5 py-5">about</li>
          <li className="m-5 py-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
