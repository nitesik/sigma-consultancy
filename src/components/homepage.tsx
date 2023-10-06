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
      <div className="px-3 lg:px-0 bg-background_3 lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-screen flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="text-[40px] lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap">
              SIGMA VISA
            </h1>
            <h1 className="text-wrap">
              COUNSULTANTS <br /> SERVICES
            </h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[550px]">
            <p className="">
            Are you dreaming of exploring new horizons, pursuing world-class education, or building your career on an international stage? At VisaConsultancy.com, we are your trusted partners on the journey to realizing your global aspirations.
            </p>
          </div>
          <div className="my-[60px] flex gap-6 text-xl flex-col lg:flex-row">
            {/* <button className="py-4 px-8 border rounded-full border-[#fff]">
              Download Services Brochure
            </button> */}
            <button onClick={() => router.push("/about")} className="py-4 px-8 border rounded-full border-[#fff] hover:bg-white hover:text-primary">
              Why Work With Sigma
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col items-center font-extrabold text-center ">
            <h1 className="text-[#000]">Why Choose Us?</h1>
            <h1 className="text-[#56c2f8] w-fit flex-none ">STAY AHEAD OF THE COMPETITION.</h1>
          </div>
          <div className=" flex justify-center bg-[#fff] shadow-2xl w rounded-3xl lg:rounded-full leading-10 py-8 mx-5 lg:mx-0 lg:py-[30px] mt-10 text-center lg:w-[75%] px-5">
            <h1 className="text-[#000] text-sm lg:text-lg w-full lg:w-[60%]">
            With years of experience and a proven track record, our team of dedicated visa consultants is committed to providing you with the best advice and assistance. We understand that each individual&apos;s journey is unique, and we tailor our services to meet your specific needs. Our mission is to make your visa application process smooth, efficient, and successful.
            </h1>
          </div>
        </div>
      </div>

      

      <div className="bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center py-[50px] lg:py-[100px]">
        <div className="px-4 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] grid place-content-center text-center">
          <div>
            <h1 className="text-[30px] lg:text-[50px] font-extrabold">
              DISCOVERING THE CORRECT SOLUTIONS COMMENCES BY{" "}
              <span className="text-[#56c2f8]">
                INQUIRING ABOUT THE PRECISE QUESTIONS
              </span>
              .
            </h1>
            <p className="text-[15px] lg:text-[30px] font-medium mt-4">
              A culture that prioritizes clients tailors its approach to meet
              clients at various stages of their journey and is crafted to
              tackle their individual business obstacles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// linear-gradient(180deg,rgba(246,252,255,1) 80%,rgba(255,255,255,1) 100%)
