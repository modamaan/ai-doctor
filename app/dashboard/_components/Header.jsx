"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className=" bg-secondary shadow-sm ">
      <div className="w-[80%] m-auto flex gap-4 items-center justify-between">
        <Image src={"logo.svg"} width={90} height={90} alt="logo" />
        <ul className="hidden md:flex gap-6">
          <li
            className={`hover:text-[#153b21] hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-[#426e50] font-bold"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-[#153b21] hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/questions" && "text-[#426e50] font-bold"
            }`}
          >
            Questions
          </li>
          <li
            className={`hover:text-[#153b21] hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/upgrade" && "text-[#426e50] font-bold"
            }`}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-[#153b21] hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/how" && "text-[#426e50] font-bold"
            }`}
          >
            How it works?
          </li>
        </ul>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
