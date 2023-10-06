import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Maid() {
  const [nationality, setNationality] = useState("Indonesian");
  const [contract, setContract] = useState("Finish Contract");
  const [toBeConfirmed, setToBeConfirmed] = useState(false);

  useEffect(() => {
    console.log(nationality);
  });

  return (
    <div className="">
      <Head>
        <title>Maid Registration - Sigma Consultancy</title>
      </Head>
      <div className="px-3 lg:px-0 bg-background_3 pb-[100px] lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-fit flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[150px]">
          <div className="mt-[30px] text-lg lg:w-[50%] ">
            <h1 className="text-[30px] lg:text-[50px] leading-snug">
              Maid Service
            </h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[550px]">
            <p className="">
              Our maid registering form is a comprehensive tool designed to help
              you find the perfect domestic helper who meets your specific needs
              and preferences. By providing us with essential information
              through this form, you enable us to make the best match for you
              and ensure a successful hiring process.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[20px] lg:py-[100px]">
        <div className="w-full lg:w-[1000px] xl:w-[1200px]">
          <form className="lg:grid mt-10 lg:mt-0 px-5 flex flex-col items-start text-start w-full lg:text-start lg:w-[70%] gap-5">
            <div className="flex w-full flex-col lg:flex-row flex-none gap-2">
              <div className="flex-1 ">
                <label
                  className="text-xl flex mb-2 text-primary font-semibold"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
                />
              </div>
              <div className="flex-1 ">
                <label
                  className="text-xl flex mb-2 text-primary font-semibold"
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  required
                  id="email"
                  type="text"
                  className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
                />
              </div>
              <div className="hidden lg:flex flex-col w-[75px]">
                <label
                  className="text-xl mb-2 text-primary font-semibold"
                  htmlFor="age"
                >
                  Age*
                </label>
                <input
                  required
                  id="age"
                  type="number"
                  className="bg-[#f5f5f5] py-4 px-3 rounded border focus:border-primary outline-none"
                />
              </div>
            </div>
            <div className="flex-1 flex gap-3 w-full">
              <div className="flex-1 lg:flex-none">
                <label
                  className="text-xl flex mb-2 text-primary font-semibold"
                  htmlFor="tel"
                >
                  Telephone Number*
                </label>
                <input
                  required
                  id="tel"
                  type="tel"
                  className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col w-[75px] lg:hidden">
                <label
                  className="text-xl mb-2 text-primary font-semibold"
                  htmlFor="age"
                >
                  Age*
                </label>
                <input
                  id="age"
                  type="number"
                  className="bg-[#f5f5f5] py-4 px-3 rounded border focus:border-primary outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-xl mb-2 text-primary font-semibold">
                Nationality
              </h1>
              <div className="flex gap-5">
                <div className="flex gap-2">
                  <input
                    id="Indonesian"
                    required
                    onChange={(e) => setNationality(e.target.value)}
                    value="Indonesian"
                    type="radio"
                    name="nationality"
                    defaultChecked
                  />
                  <label htmlFor="Indonesian">Indonesian</label>
                </div>
                <div className="flex gap-2">
                  <input
                    value="Filipino"
                    type="radio"
                    name="nationality"
                    onChange={(e) => setNationality(e.target.value)}
                  />
                  <label>Filipino</label>
                </div>
                <div className="flex gap-2">
                  <input
                    value="Others"
                    id="otherNationality"
                    onChange={(e) => setNationality(e.target.value)}
                    type="radio"
                    name="nationality"
                  />
                  <label>Others</label>
                </div>
              </div>

              {nationality !== "Filipino" && nationality !== "Indonesian" ? (
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full py-4 px-3 mt-2 rounded border focus:border-primary outline-none"
                  onChange={(e) => setNationality(e.target.value)}
                />
              ) : null}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-xl mb-2 text-primary font-semibold">
                Contract Type
              </h1>
              <div className="flex gap-5">
                <div className="flex gap-2 items-start lg:items-center">
                  <input
                    className="mt-2 lg:mt-0"
                    id="finish"
                    required
                    onChange={(e) => setContract(e.target.value)}
                    value="Finish Contract"
                    type="radio"
                    name="contract"
                    defaultChecked
                  />
                  <label htmlFor="finish">Finish Contract</label>
                </div>
                <div className="flex gap-2 items-start lg:items-center">
                  <input
                    className="mt-2 lg:mt-0"
                    id="terminate"
                    value="Terminate Contract"
                    type="radio"
                    name="contract"
                    onChange={(e) => setContract(e.target.value)}
                  />
                  <label htmlFor="terminate">Terminate Contract</label>
                </div>
                <div className="flex gap-2 items-start lg:items-center">
                  <input
                    className="mt-2 lg:mt-0"
                    id="not"
                    value="Currently not in HK"
                    type="radio"
                    name="contract"
                    onChange={(e) => setContract(e.target.value)}
                  />
                  <label htmlFor="not">Currently not in HK</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl mb-2 text-primary font-semibold">
                Date of Termination
              </label>
              <div className="flex items-start lg:items-center lg:flex-row flex-col gap-5">
                {toBeConfirmed || (
                  <div className="flex items-start lg:items-center lg:flex-row flex-col gap-5">
                    <input
                      type="date"
                      required
                      min={new Date().getDate()}
                      name="termination"
                      className="px-5 py-5 w-[250px] rounded border focus:border-primary outline-none bg-[#f5f5f5]"
                    />
                    <h2>Or</h2>
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="termination"
                    checked={toBeConfirmed}
                    onChange={(e) => setToBeConfirmed(e.target.checked)}
                  />
                  <label>To be confirmed</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-xl mb-2 text-primary font-semibold"
                htmlFor="message"
              >
                Message*
              </label>
              <textarea
                id="message"
                className="bg-[#f5f5f5] w-full py-4 px-3 rounded border focus:border-primary outline-none h-[200px] resize-none"
              />
            </div>

            <button className="bg-primary w-fit px-10 text-white font-semibold py-4 rounded-full">
              Submit
            </button>
          </form>

          <div className="mt-16 text-lg grid gap-7 px-5 lg:px-0 text-center lg:text-start">
            <h1 className="text-[32px] font-semibold">Note</h1>
            <p>
              A well-structured and detailed maid registering form is crucial
              for both domestic helpers and employers. It helps employers make
              informed decisions when selecting a domestic helper by providing a
              clear overview of the maid&apos;s qualifications, experience, and
              expectations. For domestic helpers, it serves as a platform to
              showcase their skills and find suitable employment opportunities
              abroad.
            </p>

            <p>
              At Sigma Consultancy, we understand the importance of a
              comprehensive maid registering form and provide guidance and
              support to ensure that the information presented accurately
              represents the domestic helper&apos;s qualifications and
              preferences. Our goal is to facilitate successful matches that
              benefit both parties and create harmonious working relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
