import { icons } from "@/utils/icons";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-[#000]">
      <div className="px-3 lg:px-0 bg-background_3 lg:bg-cover bg-no-repeat lg:bg-fixed lg:min-h-screen flex justify-center text-[#fff]">
        <div className="text-center w-[600px] lg:text-start lg:w-[1000px] xl:w-[1200px] mt-[125px] lg:mt-[200px]">
          <div className="text-[40px] lg:text-[80px] font-bold">
            <h1 className=" text-[#56c2f8] text-wrap">
              SIGMA TECHNOLOGY
            </h1>
            <h1 className=" text-wrap">
              COUNSULTING <br /> SERVICES
            </h1>
          </div>
          <div className="mt-[30px] text-lg lg:w-[550px]">
            <p className="">
              Explore the world of sigma innovation, excel in optimizing
              processes, unlock invaluable insights, and enhance profitability
              through cutting-edge sigma technology services.
            </p>
          </div>
          <div className="my-[60px] flex gap-6 text-xl flex-col lg:flex-row">
            <button className="py-4 px-8 border rounded-full border-[#fff]">
              Download Services Brochure
            </button>
            <button className="py-4 px-8 border rounded-full border-[#fff]">
              Why Work With Sigma
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit py-16 bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="px-0 lg:px-0 w-[600px] lg:w-[1000px] xl:w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[30px] lg:text-[60px] flex flex-col items-end font-extrabold text-center ">
            <h1 className="text-[#000] ">MAP YOUR BUSINESS LANDSCAPE.</h1>
            <h1 className="text-[#56c2f8] w-fit flex-none ">STAY AHEAD OF THE COMPETITION.</h1>
          </div>
          <div className=" flex justify-center bg-[#fff] shadow-2xl rounded-3xl lg:rounded-full leading-10  py-[30px] mt-10 text-center w-[75%]">
            <h1 className="text-[#000] w-[60%]">
              Customized Sigma Technology consulting services designed to align
              with your organization&apos;s unique needs, elevate your
              competitive edge, and bolster your most ambitious objectives.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-background_2 lg:bg-cover bg-no-repeat lg:bg-fixed  h-fit flex justify-center text-[#fff]">
        <div className="w-[600px] lg:w-[1000px] xl:w-[1200px] grid place-content-center text-center">
          <div className="py-[100px] lg:w-[1000px] xl:w-[1200px] ">
            <h1 className="text-[30px] lg:text-[50px] text-center font-extrabold ">
              Explore Further Details About Our Extensive Array of Consulting Services:
            </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center mt-10 gap-y-10 text-start">
              <div className="bg-[#ffffff33] px-5 lg:px-10 py-7 shado
              w-md rounded-3xl h-[450px] w-[350px] items-center lg:items-start flex flex-col justify-between">
                <div className="lg:inline flex flex-col items-center text-center lg:text-start">
                  <Image
                    className="invert "
                    src={icons.enterprise}
                    alt="pic"
                    width={54}
                    height={54}
                  />
                  <h1 className="mt-5 mb-3 text-xl font-extrabold">
                    Enterprise Application Integration (EAI)
                  </h1>
                  <p className="text-base font-[400]">
                    Integrate isolated systems and databases to facilitate
                    smooth communication between Supply Chain Management (SCM),
                    Customer Relationship Management (CRM), and other separate
                    systems, enhancing operational scalability to boost revenue.
                  </p>
                </div>
                <p className="text-[#56c2f8] font-extrabold">View More</p>
              </div>
              <div className="bg-[#ffffff33] px-5 lg:px-10 py-7 shadow-md text-center lg:text-start rounded-3xl h-[450px] w-[350px] items-center lg:items-start flex flex-col justify-between">
                <div className="lg:inline flex flex-col items-center">
                  <Image className="invert" src={icons.bulb} alt="pic" width={54} height={54} />
                  <h1 className="mt-5 mb-3 text-xl font-extrabold">
                    Intelligent Automation
                  </h1>
                  <p className="text-base font-[400]">
                    专为帮助您驾驭不断发展的数字环境而量身定制，为您提供智能自动化
                    (IA) 的变革能力，从云和本地集成到自动化工作流程。
                  </p>
                </div>
                <p className="text-[#56c2f8] font-extrabold">View More</p>
              </div>
              <div className="bg-[#ffffff33] px-5 lg:px-10 py-7 shadow-md text-center lg:text-start rounded-3xl h-[450px] w-[350px] items-center lg:items-start flex flex-col justify-between">
                <div className="lg:inline flex flex-col items-center">
                  <Image className="invert" src={icons.bulb} alt="pic" width={54} height={54} />
                  <h1 className="mt-5 mb-3 text-xl font-extrabold">
                    Enterprise Application Integration (EAI)
                  </h1>
                  <p className="text-base font-[400]">
                    Integrate isolated systems and databases to facilitate
                    smooth communication between Supply Chain Management (SCM),
                    Customer Relationship Management (CRM), and other separate
                    systems, enhancing operational scalability to boost revenue.
                  </p>
                </div>
                <p className="text-[#56c2f8] font-extrabold">View More</p>
              </div>
              <div className="bg-[#ffffff33] px-5 lg:px-10 py-7 shadow-md text-center lg:text-start rounded-3xl h-[450px] w-[350px] items-center lg:items-start flex flex-col justify-between">
                <div className="lg:inline flex flex-col items-center">
                  <Image className="invert" src={icons.bulb} alt="pic" width={54} height={54} />
                  <h1 className="mt-5 mb-3 text-xl font-extrabold">
                    Enterprise Application Integration (EAI)
                  </h1>
                  <p className="text-base font-[400]">
                    Integrate isolated systems and databases to facilitate
                    smooth communication between Supply Chain Management (SCM),
                    Customer Relationship Management (CRM), and other separate
                    systems, enhancing operational scalability to boost revenue.
                  </p>
                </div>
                <p className="text-[#56c2f8] font-extrabold">View More</p>
              </div>
              <div className="bg-[#ffffff33] px-5 lg:px-10 py-7 shadow-md text-center lg:text-start rounded-3xl h-[450px] w-[350px] items-center lg:items-start flex flex-col justify-between">
                <div className="lg:inline flex flex-col items-center">
                  <Image className="invert" src={icons.bulb} alt="pic" width={54} height={54} />
                  <h1 className="mt-5 mb-3 text-xl font-extrabold">
                    Enterprise Application Integration (EAI)
                  </h1>
                  <p className="text-base font-[400]">
                    Integrate isolated systems and databases to facilitate
                    smooth communication between Supply Chain Management (SCM),
                    Customer Relationship Management (CRM), and other separate
                    systems, enhancing operational scalability to boost revenue.
                  </p>
                </div>
                <p className="text-[#56c2f8] font-extrabold">View More</p>
              </div>
            </div>
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
