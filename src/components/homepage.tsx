import { icons } from "@/utils/icons";
import { SiteConfig } from "@/utils/site";
import { homepage } from "@/utils/translation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale as keyof SiteConfig;
  return (
    <div className="text-[#000]">
      <Head>
        <title>Sigma Consultancy</title>
      </Head>

      <div className="px-3 lg:px-0 bg-background_3 lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-fit lg:pb-[70px] flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="text-[40px] lg:w-[70%] lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap">
              {homepage.header_one[t]}
            </h1>
            <h1 className="text-wrap">{homepage.header_two[t]}</h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[550px]">
            <p className="">{homepage.description_one[t]}</p>
          </div>
          <div className="my-[60px] flex gap-6 text-xl flex-col lg:flex-row">
            <button
              onClick={() => router.push("/about")}
              className="py-4 px-8 border rounded-full border-[#fff] hover:bg-white hover:text-primary"
            >
              {homepage.button_one[t]}
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col items-center font-extrabold text-center ">
            <h1 className="text-[#000]">{homepage.header_three[t]}</h1>
            <h1 className="text-[#56c2f8] w-fit flex-none ">
              {homepage.header_four[t]}.
            </h1>
          </div>
          <div className=" flex justify-center bg-[#fff] shadow-2xl w rounded-3xl lg:rounded-full leading-10 py-8 mx-5 lg:mx-0 lg:py-[30px] mt-10 text-center lg:w-[75%] px-5">
            <h1 className="text-[#000] text-sm lg:text-lg w-full lg:w-[60%]">
              {homepage.description_two[t]}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center py-[50px] lg:py-[100px]">
        <div className="px-4 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] grid place-content-center text-center">
          <div>
            <h1 className="text-[30px] lg:text-[50px] font-extrabold">
              {homepage.header_five[t]}
            </h1>
            <p className="text-[15px] lg:text-[30px] font-medium mt-4">
              {homepage.description_three[t]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
