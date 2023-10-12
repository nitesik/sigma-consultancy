import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

type Details = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [details, setDetails] = useState<Details>();

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div className="text-black">
      <Head>
        <title>Contact - Sigma Consultancy</title>
      </Head>
      <div className="px-3 lg:px-0 bg-background_3 pb-[100px] lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-fit flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="mt-[30px] text-lg lg:w-[50%] ">
            <h1 className="text-[30px] lg:text-[50px] leading-snug">
              Get in touch with
            </h1>
          </div>
          <div className="text-[40px] lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap">SIGMA EMPLOYMENT</h1>
            <h1 className=" text-primary text-wrap">VISA CONSULTANTS</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center w-full flex-none lg:text-start lg:w-[1000px] xl:w-[1200px] grid grid-cols-1 lg:grid-cols-2 m-[50px]">
          <div className="grid gap-8">
            <div className="grid">
              <h1 className="text-[32px] font-bold text-primary">Address</h1>
              <p className="text-[18px]">Shop7, 1/f, Wun Fat Bldg</p>
              <p className="text-[18px]">8 Wang Fat Path, Yuen Long</p>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">Mobile</h1>
              <Link href="tel:+852 5661 6822" className="text-[18px] w-fit">
                +852 5661 6822
              </Link>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">Landline</h1>
              <Link href="tel:+852 2792 3633" className="text-[18px] w-fit">
                +852 2792 3633
              </Link>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">FAX</h1>
              <Link href="tel:+852 3925 7035" className="text-[18px] w-fit">
                +852 3925 7035
              </Link>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">Email</h1>
              <Link
                href="mailto:prabin.malla@sigmaconsultantshk.com"
                className="text-[18px] w-fit"
              >
                prabin.malla@sigmaconsultantshk.com
              </Link>
            </div>
          </div>
          <form className="lg:grid mt-10 lg:mt-0 px-5 flex flex-col items-start text-start  gap-5">
            <div className="flex flex-col flex-none w-full gap-2">
              <label htmlFor="">First Name*</label>
              <input
                value={details?.firstName || ""}
                onChange={(e) =>
                  setDetails({ ...details!, firstName: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Last Name*</label>
              <input
                value={details?.lastName || ""}
                onChange={(e) =>
                  setDetails({ ...details!, lastName: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Email*</label>
              <input
                value={details?.email || ""}
                onChange={(e) =>
                  setDetails({ ...details!, email: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Message*</label>
              <textarea
                value={details?.message || ""}
                onChange={(e) =>
                  setDetails({ ...details!, message: e.target.value })
                }
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none h-[200px] resize-none"
              />
            </div>
            <button className="bg-primary w-fit px-10 text-white font-semibold py-4 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center flex-none w-full lg:text-start lg:w-[1000px] px-10 lg:px-0 xl:w-[1200px] grid gap-5 m-[50px]">
          <h1 className="text-[32px] text-primary font-semibold mb-2">
            Innovation distinguishes leaders from those who follow.
          </h1>
          <p className="text-lg">
            We are a dynamic consultancy specializing in visa services and maid
            registration. Our mission is to connect individuals and families
            with exciting opportunities in foreign countries, whether it&apos;s
            for education, career advancement, or household assistance. We
            provide expert guidance and support throughout the visa application
            process and offer a trusted platform for domestic workers to find
            employment overseas. With our commitment to excellence and a passion
            for turning dreams into reality, we are dedicated to empowering
            individuals and creating global connections.
          </p>
          <p className="text-lg">
            We take pride in being the bridge that connects people with their
            dreams and the opportunities that await them in different parts of
            the world. Our visa consultancy services are designed to simplify
            the complex process of international travel and immigration. Whether
            you&apos;re a student aspiring to study abroad, a professional
            seeking career growth, or an adventurer looking to explore the
            world, our team of experts is here to provide you with personalized
            guidance and ensure the success of your visa application.
          </p>
          <p className="text-lg">
            In addition to visa consultancy, our maid registering service is
            committed to ethical recruitment, connecting employers with
            qualified and compassionate domestic helpers who can provide support
            and care to families abroad.
          </p>
          <p className="text-lg">
            Our journey is driven by a simple yet powerful belief: potential
            knows no boundaries. We are here to make dreams a reality, one
            connection at a time. Join us on this extraordinary journey, and
            together, we&apos;ll unlock a world of opportunities and
            possibilities.
          </p>
        </div>
      </div>
    </div>
  );
}
