import { icons } from "@/utils/icons";
import { SiteConfig, siteConfig } from "@/utils/site";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {

  const router = useRouter();
  
  const t = router.locale as keyof SiteConfig;

  return (
    <div className="bg-[#01091e] text-white flex justify-center">
      <div className="text-center grid  lg:text-start lg:w-[1000px] xl:w-[1200px] my-[50px] lg:my-[100px]">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
          <div className="text-sm flex flex-col items-center lg:grid gap-3 place-content-center">
            <Image src={icons.sigma_logo} width={175} height={226} alt="logo" className="invert mb-5" />
            <p>Shop7, 1/f, Wun Fat Bldg</p>
            <p>8 Wang Fat Path, Yuen Long</p>
          </div>
          <div className="flex flex-col gap-2">
            {siteConfig.getHeaderLinks().slice(0, 3).map(item => (
            <Link key={item.en} href={item.href}>{item[t]}</Link>
            ))}
            <div className="grid lg:hidden gap-2">
            {siteConfig.getHeaderLinks().slice(3, 6).map(item => (
            <Link key={item.en} href={item.href}>{item[t]}</Link>
            ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-2">
          {siteConfig.getHeaderLinks().slice(3, 6).map(item => (
            <Link key={item.en} href={item.href}>{item[t]}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1>CONTACT US</h1>
            <p>9843932489</p>
          </div>
        </div>
        <p className="w-full text-center mt-10">© Copyright {new Date().getFullYear()} Sigma Consultancy</p>
      </div>
    </div>
  )
}