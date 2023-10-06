import { SiteConfig } from "@/utils/site";
import { about, homepage } from "@/utils/translation";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function About() {
  const t = useRouter().locale as keyof SiteConfig;

  return (
    <div className="text-[#000]">
      <Head>
        <title>About - Sigma Consultancy</title>
      </Head>
      <div className="px-3 lg:px-0 bg-background_3 pb-[100px] lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-fit flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="text-[40px] lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap">SIGMA VISA CONSULTANTS</h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[50%] ">
            <h1 className="text-[30px] lg:text-[50px] leading-snug">
              Our Journey: Connecting Dreams Across Borders
            </h1>
            <p className="mt-[30px]">
              At Sigma Consultants, our story is one of bridging opportunities
              and fostering new beginnings. For years, we&apos;ve been dedicated
              to helping individuals and families find brighter prospects in
              foreign lands, where opportunities await and dreams can become a
              reality.
            </p>
            <p></p>
          </div>
          
        </div>
      </div>

      <div className="h-fit py-16 bg-[#f5f5f5] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col items-center font-extrabold text-center ">
            <h1 className="text-[#56c2f8] w-fit flex-none ">
              Empowering Dreams, Connecting Worlds.
            </h1>
          </div>
          <div className="h-fit w-full flex flex-col lg:flex-row flex-wrap gap-y-10 px-3 lg:px-0 justify-between mt-[50px] text-center lg:text-start">
            {about.goals_and_intros.map((item) => (
              <div
                key={item.title.en}
                className="bg-white px-10 rounded-3xl w-full lg:w-[45%] h-fit py-8 shadow-md hover:shadow-2xl"
              >
                <h1 className="text-[25px] lg:text-[32px] font-semibold text-primary">
                  {item.title[t]}
                </h1>
                <p className="text-lg mt-5">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background_2 lg:bg-cover bg-no-repeat lg:bg-fixed  h-fit flex justify-center text-[#fff]">
        <div className="w-[600px] lg:w-[1000px] xl:w-[1200px] px-4 lg:px-0 grid place-content-center text-center">
          <div className="py-[100px] lg:w-[1000px] xl:w-[1200px] ">
            <h1 className="text-[30px] lg:text-[50px] text-center font-extrabold ">
              Explore Further Details About Our Extensive Array of Consulting
              Services:
            </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center mt-10 gap-y-10 text-start">
              
              {about.offers.map((item) => (
                <div
                  key={item.name.en}
                  className="bg-[#ffffff33] px-5 lg:px-10 py-7 shado
              w-md rounded-3xl h-[300px] hover:shadow-primary hover:shadow-2xl w-[350px] items-center lg:items-start flex flex-col justify-between"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
