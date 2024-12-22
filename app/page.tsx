import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center  text-[#333333] mt-10">
      <div className=" md:w-[380px] mb-4 items-start">
        <Image src="logo.svg" width={116} height={13} alt="logo" />
      </div>
      <div className=" bg-[#f3f3f3] flex flex-col gap-6 rounded-3xl p-4 md:w-[380px] mx-auto">
        <p>
          <span className=" font-medium">tiny spec</span>, is a design agency
          that focuses on designing and building thoughtful & functional
          internet software for startups with strong focus on branding, visual
          design & quality.
        </p>
        <p>
          we are available for new projects. For enquiries, contact us at{" "}
          <a
            href="mailto:work@tinyspec.co"
            className=" font-medium transition-all hover:text-[#0074F9]"
          >
            work@tinyspec.co
          </a>
        </p>
      </div>
      <div className=" bg-white border border-[#f3f3f3] flex flex-col gap-6 rounded-3xl p-4 w-[380px] mx-auto mt-3">
        <p>
          <span className=" font-medium">Clients:</span>
        </p>
        <div>
          <a
            href="https://www.bykaer.com/"
            target="_blank"
            className=" bg-[#0074F9] hover:bg-[#0091f9] text-white py-2 px-2 rounded-3xl transition-all"
          >
            kaer.com
          </a>
        </div>
      </div>
      <div className=" bg-[#f3f3f3] flex flex-col gap-6 rounded-3xl p-4 w-[380px] mx-auto relative -top-6 -z-10 ">
        <p className=" mt-4">
          <span className=" font-medium">Projects:</span>
        </p>
        <div>
          <p>Coming soon!</p>
        </div>
      </div>
    </div>
  );
}
