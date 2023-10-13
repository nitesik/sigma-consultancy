import { SiteConfig } from "@/utils/site";
import { consultancy } from "@/utils/translation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Consultancy() {
  const router = useRouter();

  const t = router.locale as keyof SiteConfig;

  return (
    <div>
      <Head>
        <title>Consultancy Services - Sigma Consultancy</title>
      </Head>
      <div className="px-3 lg:px-0 bg-background_3 lg:bg-cover bg-no-repeat lg:bg-fixed lg:h-fit pb-[50px] lg:pb-[100px] flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="text-[40px] lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap ">
              {consultancy.header_one[t]}
            </h1>
            <h1 className="text-wrap lg:w-[750px] lg:text-[60px]">
              {consultancy.header_two[t]}
            </h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[750px] lg:leading-10">
            <p className="">
             {consultancy.description_one[t]}
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col lg:items-start font-extrabold lg:text-start text-center ">
            <h1 className="text-[#000]">{consultancy.header_three[t]}</h1>
          </div>
          <div className=" flex justify-centerleading-10 py-2 mx-5 lg:mx-0 lg:py-[0px] mt-3 text-center lg:text-start lg:w-[100%] px-5 lg:px-0">
            <h1 className="text-[#000] text-sm lg:text-lg w-full lg:w-[60%]">
              {consultancy.description_two[t]}
            </h1>
          </div>
          <div className="py-[20px] lg:py-[50px] lg:w-[1000px] xl:w-[1200px] ">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center mt-10 gap-y-10 text-start">
              {consultancy.services.map((item) => (
                <div
                  onClick={(e) => router.push("/about")}
                  key={item.name[t]}
                  className="bg-[#ffffff] shadow-xl px-5 lg:px-10 py-7 shado hover:scale-105 cursor-pointer
              w-md rounded-3xl h-[550px] w-[350px] items-center lg:items-start flex flex-col justify-between"
                >
                  <div className="lg:inline flex flex-col items-center text-center lg:text-start">
                    <Image
                      className=""
                      src={item.icon}
                      alt="pic"
                      width={54}
                      height={54}
                    />
                    <h1 className="mt-5 mb-3 text-xl font-extrabold">
                      {item.name[t]}
                    </h1>
                    <p className="text-base font-[400]">
                      {item.description[t]}
                    </p>
                  </div>
                  <Link
                    href={"/about"}
                    className="text-[#56c2f8] font-extrabold"
                  >
                    {consultancy.view_more[t]}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#01091e] lg:bg-cover bg-no-repeat lg:bg-fixed h-fit flex justify-center text-[#fff]">
        <div className="px-4 lg:px-0 w-[600px] py-[50px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <h1 className="text-[42px] text-center lg:text-start font-bold text-primary">
            {consultancy.header_four[t]}
          </h1>
          <ul className="py-5 text-lg w-full grid gap-3">
            {consultancy.benefits.map(({ title, description }, index) => (
                <li className="inline" key={index}>
                  <h2 className="font-bold text-primary float-left mr-1">
                    {title[t]}:
                  </h2>
                  <p>{description[t]}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-4 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <h1 className="text-[42px] text-center lg:text-start  font-bold text-primary">
            {consultancy.header_five[t]}
          </h1>
          <ul className="py-5 text-lg grid gap-3">
            
            {
              consultancy.key_aspects.map(({ title, description }, index) => <li key={index} className="inline">
              <h2 className="font-bold text-primary float-left mr-1">
                {title[t]}:
              </h2>
              <p>
                {description[t]}
              </p>
            </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
