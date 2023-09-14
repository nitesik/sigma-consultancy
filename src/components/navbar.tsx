import { useState, useEffect } from "react";
import Image from "next/image";
import { logo } from "@/utils/icons";

export default function Navbar() {

  const [scrollY, setScrollY] = useState(0);

  function getScrollYPos() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getScrollYPos);
  });
  
  return (
    <nav className={`z-100 w-full ease-linear flex justify-center fixed  ${scrollY <= 50 ? "bg-transparent text-[#fff] py-3" : "bg-[#fff] text-[#000] border-b border-[#000]"} z-10`}>
      <div className="w-[1200px] flex justify-between py-5 items-center font-[700] text-lg ">
        <Image src={logo} width={175} height={226} alt="logo" />
        <div className=" flex gap-5">
          <span>Services</span>
          <span>Industries</span>
          <span>Partners</span>
          <span>Resources</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  )
}