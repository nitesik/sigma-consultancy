export default function HomePage() {
  return (
    <div>
      <div className="bg-[url('../../public/wallpaper1.jpg')] bg-cover bg-no-repeat bg-fixed min-h-screen flex justify-center">
        <div className="w-[1200px] mt-[150px]">
          <div className="font-bold">
            <h1 className="text-[80px] text-[#56c2f8] text-wrap">
              SIGMA TECHNOLOGY
            </h1>
            <h1 className="text-[80px] text-wrap">COUNSULTING</h1>
            <h1 className="text-[80px] text-wrap">SERVICES</h1>
          </div>
          <div className="mt-[30px] text-lg w-[500px]">
            <p className="">
              Venture into the realm of sigma innovation, master process
              optimization, decipher invaluable insights and drive profitability
              with trailblazing sigma technology services.
            </p>
          </div>
          <div className="my-[60px] flex gap-6 text-xl">
            <button className="py-4 px-8 border rounded-full border-[#fff]">
              Download Services Brochure
            </button>
            <button className="py-4 px-8 border rounded-full border-[#fff]">
              Why Work With Sigma
            </button>
          </div>
        </div>
      </div>

      <div className="h-[600px] bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[60px] gap-10 flex flex-col items-end font-extrabold flex-none">
            <h1 className="text-[#000]">MAP YOUR BUSINESS LANDSCAPE.</h1>
            <h1 className="text-[#56c2f8]">STAY AHEAD OF THE COMPETITION.</h1>
          </div>
          <div className=" border border-[#CBD5E1] rounded leading-10 px-[20px] py-[30px] mt-10 text-center w-[50%]">
            <h1 className="text-[#000]">
              sigma technology consulting services tailor-made to suit the
              realities of your organization, increase competitive advantage,
              and support your most ambitious goals.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[url('../../public/wallpaper2.jpg')] bg-cover bg-no-repeat bg-fixed  h-[400px] flex justify-center">
        <div className="w-[1200px] grid place-content-center text-center">
          <div className="text-[50px] font-extrabold">
            <h1>FINDING THE RIGHT SOLUTIONS BEGINS</h1>
            <h1>WITH <span className="text-[#56c2f8]">ASKING THE RIGHT QUESTIONS</span>.</h1>
          </div>
        </div>
      </div>

      <div className="h-[600px] bg-gradient-to-b from-[#F6FCFF] to-[#fff] flex justify-center items-center">
        <div className="w-[1200px] h-fit z-0 flex justify-center items-center flex-col">
          <div className="text-[60px] gap-10 flex flex-col items-end font-extrabold flex-none">
            <h1 className="text-[#000]">MAP YOUR BUSINESS LANDSCAPE.</h1>
            <h1 className="text-[#56c2f8]">STAY AHEAD OF THE COMPETITION.</h1>
          </div>
          <div className=" border border-[#CBD5E1] rounded leading-10 px-[20px] py-[30px] mt-10 text-center w-[50%]">
            <h1 className="text-[#000]">
              sigma technology consulting services tailor-made to suit the
              realities of your organization, increase competitive advantage,
              and support your most ambitious goals.
            </h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

// linear-gradient(180deg,rgba(246,252,255,1) 80%,rgba(255,255,255,1) 100%)
