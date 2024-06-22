import {MessageCircleIcon, PhoneIcon, BookmarkIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center justify-items-center gap-3 p-3">
      <div className="section">
        <div className="bg-black rounded-[2rem] shadow-xl flex justify-center items-center h-[550px] w-[300px] p-3">
          <div className="bg-gradient-to-b from-blue-100 to-blue-300 rounded-3xl flex flex-col justify-center items-center h-full w-full gap-3 p-3">
            <span className="bg-black rounded-full flex justify-center items-center w-4/12 p-3"></span>

            <div className="flex flex-col justify-center items-center text-center h-full w-full">
              <div className="flex flex-col justify-center items-center justify-items-center mb-auto mt-3 gap-3">
                <h2>20:99</h2>

                <div className="bg-black/50 text-white rounded-full flex justify-center items-center px-5 p-1">
                  <p className="text-lg">Dec 16, 1971</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center justify-items-center w-full gap-3">
                <div className="layout flex-col w-full mt-auto gap-0 p-0">
                  <div className="backdrop-blur-md shadow-xl bg-white/60 rounded-2xl layout w-full">
                    <span className="bg-gradient-to-b from-green-300 to-green-500 shadow-xl rounded-xl layout">
                      <MessageCircleIcon className="text-white fill-white"/>
                    </span>

                    <div className="layout flex-col items-start w-full gap-0 p-0">
                      <p className="text-base font-bold">New Message</p>
                      <p className="text-base">@Ilyas: hello 👋</p>
                    </div>
                  </div>

                  <span className="backdrop-blur-md shadow-xl bg-white/30 rounded-b-3xl w-10/12 p-1"/>
                </div>

                <div className="layout justify-between w-full mb-3 py-0">
                  <span className="backdrop-blur-sm rounded-full bg-black/30 text-white w-fit p-3">
                    <PhoneIcon className="text-white fill-white h-5 w-5"/>
                  </span>

                  <span className="backdrop-blur-sm rounded-full bg-black/30 text-white w-fit p-3">
                    <BookmarkIcon className="text-white fill-white h-5 w-5"/>
                  </span>
                </div>
              </div>

            </div>

            <span className="bg-white rounded-full w-7/12 p-[2px]"/>
          </div>
        </div>
      </div>

      <div className="section"></div>
    </main>
  );
}
