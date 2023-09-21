import { useState, useEffect } from "react";
import Image from "next/image";
import { icons } from "@/utils/icons";
import { siteConfig, type SiteConfig } from "@/utils/site";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();

  const t = router.locale as keyof SiteConfig;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);
  
  function getScrollYPos() {
    setScrollY(window.scrollY);
  }

  function getWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", getScrollYPos);
    window.addEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getScrollYPos);
    window.addEventListener("resize", getWidth);

    if (width > 1000 && isMenuOpen) setIsMenuOpen(false);
  }, [scrollY, width]);
  
  return (
    <nav className={`flex w-full justify-center fixed  ${scrollY  <= 50 && !isMenuOpen ? "bg-transparent text-[#fff] py-3" : "bg-[#fff] text-[#000] border-b border-[#000]"} z-10`}>
      <div className="z-50 w-full px-5 lg:px-0 lg:w-[1000px] xl:w-[1200px] flex justify-between py-5 items-center font-[700] text-lg ">
        <Link href="/" locale={t}><Image src={icons.sigma_logo} width={175} height={226} alt="logo" className={` ${scrollY <= 50 && !isMenuOpen ? "invert" : ""}`} /></Link>
        <div className="hidden lg:flex gap-5">
          <div className=" flex gap-5">
            {siteConfig.getHeaderLinks().map((item, index) => <Link key={index} href={item.href} locale={t}>{item[t]}</Link>)}
          </div>
          <div className="flex gap-1 cursor-pointer">
            <p className={`${t === "en" ? "" : "text-[#737373]"}`} onClick={() => router.push(router.asPath, "", { locale: "en" })}>EN</p>
            |
            <p className={`${t === "cn" ? "" : "text-[#737373]"}`} onClick={() => router.push(router.asPath, "", { locale: "cn" })}>CN</p>
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
          <Image src={isMenuOpen ? icons.close : icons.menu} alt="menu" className={` ${scrollY <= 50 && !isMenuOpen ? "invert" : ""}`} />
        </div>
      </div>
      {isMenuOpen && <div className="lg:hidden grid place-content-center z-40 fixed top-0 left-0 h-screen w-screen bg-[#fff] text-center">
        <div className="h-[45vh] flex flex-col justify-between text-[23px]">
          {siteConfig.getHeaderLinks().map(item => <Link key={item.en} href={item.href}>{item[t]}</Link>)}
        </div>
        <div className="flex gap-1 justify-center text-[20px] mt-10 cursor-pointer text-center">
            <p className={`${t === "en" ? "" : "text-[#737373]"}`} onClick={() => router.push(router.asPath, "", { locale: "en" })}>EN</p>
            |
            <p className={`${t === "cn" ? "" : "text-[#737373]"}`} onClick={() => router.push(router.asPath, "", { locale: "cn" })}>CN</p>
          </div>
      </div>}
    </nav>
  )
}