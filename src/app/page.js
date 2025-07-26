import Image from "next/image";
import { IoCodeSlashSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { PiAppleLogoFill } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className="py-10 w-full h-full">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-center tracking-[0.1rem]">
              Introduction
            </h1>
            <h1 className="text-3xl text-black/80">About me</h1>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/Capture1.PNG"
              width={1000}
              height={1000}
              alt=""
              className="w-80 h-100"
            />
          </div>
        </div>

        <div className="md:px-45 md:py-10 max-md:min-w-full max-md:px-4">
          <p className="text-black/70 leading-8 text-justify ">
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </p>
        </div>
        <div className="flex flex-row gap-15 px-35 justify-center items-center max-md:flex max-md:flex-col max-md:gap-4 max-md:py-10">
          <div className="w-70 h-55 flex flex-col gap-5 rounded-2xl outline-1 outline-gray-300 p-8">
            <IoCodeSlashSharp className="size-10"/>
            <h1>Language</h1>
            <p>Html,css,JavaScript,React Js,next Js
            </p>
          </div>
           <div className="w-70 h-55 flex flex-col gap-5 rounded-2xl outline-1 outline-gray-300 p-8">
            <HiAcademicCap  className="size-10"/>
            <h1>Language</h1>
            <p>Html,css,JavaScript,React Js,next Js
            </p>
          </div>
           <div className="w-70 h-55 flex flex-col gap-5 rounded-2xl outline-1 outline-gray-300 p-8">
            <PiAppleLogoFill className="size-10"/>
            <h1>Language</h1>
            <p>Html,css,JavaScript,React Js,next Js
            </p>
          </div>
           
           
        </div>
      </div>
    </>
  );
}
