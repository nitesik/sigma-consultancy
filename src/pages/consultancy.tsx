import { SiteConfig } from "@/utils/site";
import { homepage } from "@/utils/translation";
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
            <h1 className=" text-primary text-wrap ">SIGMA VISA</h1>
            <h1 className="text-wrap lg:w-[750px] lg:text-[60px]">
              Consultancy Services: Guiding You to Success
            </h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[750px] lg:leading-10">
            <p className="">
              Consultancy services are a valuable resource for individuals and
              businesses seeking expert guidance, advice, and solutions across
              various domains. Whether you&apos;re looking to navigate complex
              challenges, optimize processes, or make informed decisions,
              consultancy services provide the knowledge and expertise needed to
              achieve your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col lg:items-start font-extrabold lg:text-start text-center ">
            <h1 className="text-[#000]">Why Choose Us?</h1>
          </div>
          <div className=" flex justify-centerleading-10 py-2 mx-5 lg:mx-0 lg:py-[0px] mt-3 text-center lg:text-start lg:w-[100%] px-5 lg:px-0">
            <h1 className="text-[#000] text-sm lg:text-lg w-full lg:w-[60%]">
              At Sigma Consultancy, we are committed to providing top-notch
              consultancy services tailored to your unique needs. Our team of
              experts is dedicated to helping you overcome challenges, seize
              opportunities, and reach your full potential. Whether you&apos;re
              a business seeking growth, an individual pursuing personal
              development, or an organization striving for excellence, our
              consultancy services are here to guide you to success.{" "}
            </h1>
          </div>
          <div className="py-[20px] lg:py-[50px] lg:w-[1000px] xl:w-[1200px] ">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center mt-10 gap-y-10 text-start">
              {homepage.services.map((item) => (
                <div
                  onClick={e => router.push("/about")}
                  key={item.name.en}
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
                    View More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#01091e] lg:bg-cover bg-no-repeat lg:bg-fixed h-fit flex justify-center text-[#fff]">
        <div className="px-4 lg:px-0 w-[600px] py-[50px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <h1 className="text-[42px] text-center lg:text-start font-bold text-primary">Benefits of Consultancy Services:</h1>
          <ul className="py-5 text-lg grid gap-3">
            <li className="inline-block gap-2"><h2 className="font-bold text-primary float-left mr-1">Efficiency:</h2><p>Consultants streamline processes, reduce inefficiencies, and help organizations operate more effectively.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Innovation:</h2><p>They bring fresh ideas and innovative solutions to drive growth and competitiveness.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Cost Savings:</h2><p> Effective consultancy can lead to cost savings through improved resource allocation and reduced waste.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Risk Mitigation:</h2><p>Consultants help identify and mitigate risks, enhancing the overall resilience of organizations.</p></li>
            <li className="inline "><h2 className="font-bold text-primary float-left mr-1">Professional Development:</h2><p>Individual consultancy services can foster personal and professional growth, helping individuals achieve their goals.</p></li>
          </ul>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-4 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center lg:items-start flex-col">
          <h1 className="text-[42px] text-center lg:text-start  font-bold text-primary">Key Aspects of Consultancy Services:</h1>
          <ul className="py-5 text-lg grid gap-3">
            <li className="inline-block gap-2"><h2 className="font-bold text-primary float-left mr-1">Expertise:</h2><p>Consultancy firms employ professionals with specialized knowledge and experience in specific industries or fields. They bring deep insights and understanding to address your unique needs.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Problem Solving:</h2><p>Consultants analyze your current situation, identify challenges or opportunities, and propose effective strategies and solutions tailored to your objectives.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Objective Perspective:</h2><p>Consultants offer an external and objective viewpoint, providing insights that may be difficult to see from within an organization.</p></li>
            <li className="inline"><h2 className="font-bold text-primary float-left mr-1">Customization:</h2><p>Consultancy services are highly adaptable. They can be tailored to meet your specific requirements, whether you&apos;re a startup, an established business, a nonprofit organization, or an individual seeking personal development.</p></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
