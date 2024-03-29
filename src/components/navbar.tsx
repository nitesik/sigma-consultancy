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
    <nav
      className={`flex w-full justify-center fixed  ${
        scrollY <= 50 && !isMenuOpen
          ? "bg-transparent text-[#fff] py-3"
          : "bg-[#fff] text-[#000] border-b border-[#000]"
      } z-10`}
    >
      <div className="z-50 w-full px-5 lg:px-0 lg:w-[1000px] xl:w-[1200px] flex justify-between py-5 items-center font-[700] text-lg ">
        <Link href="/" locale={t}>
          <Image
            src={icons.sigma_logo}
            width={175}
            height={226}
            alt="logo"
            className={` ${scrollY <= 50 && !isMenuOpen ? "invert" : ""}`}
          />
        </Link>
        <div className="hidden lg:flex gap-5 items-center">
          <div className=" flex gap-5">
            {siteConfig.getHeaderLinks().map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  router.asPath === item.href ? "text-primary" : "text-inherit"
                }`}
                locale={t}
              >
                {item[t]}
              </Link>
            ))}
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={icons.us_flag}
              alt="flag"
              width={45}
              height={45}
              className={`${t === "en" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "en" })}
            ></Image>
            <Image
              src={icons.china_flag}
              alt="flag"
              width={45}
              height={45}
              className={`${t === "cn" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "cn" })}
            ></Image>
            <Image
              src={icons.nepal_flag}
              alt="flag"
              width={30}
              height={30}
              className={`${t === "ne" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "ne" })}
            ></Image>
          </div>
        </div>
        <div
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image
            src={isMenuOpen ? icons.close : icons.menu}
            alt="menu"
            className={` ${scrollY <= 50 && !isMenuOpen ? "invert" : ""}`}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden grid place-content-center z-40 fixed top-0 left-0 h-screen w-screen bg-[#fff] text-center">
          <div className="h-fit gap-[30px] flex flex-col justify-between text-[23px]">
            {siteConfig.getHeaderLinks().map((item) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={item.en}
                href={item.href}
                className={`${
                  router.asPath === item.href ? "text-primary" : "text-inherit"
                }`}
              >
                {item[t]}
              </Link>
            ))}
          </div>
          <div className="flex gap-1 justify-center items-center text-[20px] mt-10 cursor-pointer text-center">
            <Image
              src={icons.us_flag}
              alt="flag"
              width={45}
              height={45}
              className={`${t === "en" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "en" })}
            ></Image>
            <Image
              src={icons.china_flag}
              alt="flag"
              width={45}
              height={45}
              className={`${t === "cn" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "cn" })}
            ></Image>
            <Image
              src={icons.nepal_flag}
              alt="flag"
              width={35}
              height={35}
              className={`${t === "ne" ? "bg-primary" : ""} p-1.5 rounded`}
              onClick={() => router.push(router.asPath, "", { locale: "ne" })}
            ></Image>
          </div>
        </div>
      )}
    </nav>
  );
}
