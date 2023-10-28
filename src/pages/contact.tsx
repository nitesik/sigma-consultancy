import { SiteConfig } from "@/utils/site";
import { contact } from "@/utils/translation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Details = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [details, setDetails] = useState<Details>();
  const router = useRouter();

  const t = router.locale as keyof SiteConfig;

  return (
    <div className="text-black">
      <Head>
        <title>Contact - Sigma Consultancy</title>
      </Head>
      <div className="px-3 lg:px-0 bg-background_3 pb-[100px] lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-fit flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start flex flex-col items-center lg:items-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="mt-[30px] text-lg lg:w-[50%] ">
            <h1 className="text-[30px] lg:text-[50px] leading-snug">
              {contact.header_one[t]}
            </h1>
          </div>
          <div className="text-[40px] w-[80%] mt-5 lg:text-[80px] font-bold">
            <h1 className=" text-primary text-wrap">{contact.header_two[t]}</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center w-full flex-none lg:text-start lg:w-[1000px] xl:w-[1200px] grid grid-cols-1 lg:grid-cols-2 m-[50px]">
          <div className="grid gap-8">
            <div className="grid">
              <h1 className="text-[32px] font-bold text-primary">
                {contact.address[t]}
              </h1>
              <p className="text-[18px]">Shop7, 1/f, Wun Fat Bldg</p>
              <p className="text-[18px]">8 Wang Fat Path, Yuen Long</p>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">
                {contact.mobile[t]}
              </h1>
              <Link href="tel:+852 5661 6822" className="text-[18px] w-fit">
                +852 5661 6822
              </Link>
            </div>
            <div className="grid place-content-center lg:place-content-start">
              <h1 className="text-[32px] font-bold text-primary">
                {contact.landline[t]}
              </h1>
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
              <h1 className="text-[32px] font-bold text-primary">
                {contact.email[t]}
              </h1>
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
              <label htmlFor="firstName">{contact.first_name[t]}*</label>
              <input
                id="firstName"
                value={details?.firstName || ""}
                onChange={(e) =>
                  setDetails({ ...details!, firstName: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName">{contact.last_name[t]}*</label>
              <input
                id="lastName"
                value={details?.lastName || ""}
                onChange={(e) =>
                  setDetails({ ...details!, lastName: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">{contact.email[t]}*</label>
              <input
                id="email"
                value={details?.email || ""}
                onChange={(e) =>
                  setDetails({ ...details!, email: e.target.value })
                }
                type="text"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message">{contact.message[t]}*</label>
              <textarea
                id="message"
                value={details?.message || ""}
                onChange={(e) =>
                  setDetails({ ...details!, message: e.target.value })
                }
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none h-[200px] resize-none"
              />
            </div>
            <button className="bg-primary w-fit px-10 text-white font-semibold py-4 rounded-full">
              {contact.submit[t]}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center flex-none w-full lg:text-start lg:w-[1000px] px-10 lg:px-0 xl:w-[1200px] grid gap-5 m-[50px]">
          <h1 className="text-[32px] text-primary font-semibold mb-2">
            {contact.header_three[t]}
          </h1>
          <p className="text-lg">{contact.description_one[t]}</p>
          <p className="text-lg">{contact.description_two[t]}</p>
          <p className="text-lg">{contact.description_three[t]}</p>
          <p className="text-lg">{contact.description_four[t]}</p>
        </div>
      </div>
    </div>
  );
}
