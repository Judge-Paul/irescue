import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import BG from "public/bg.png";
import { motion } from "framer-motion";
import Car from "public/car.png";
import Tow from "public/tow.png";
import Apple from "public/app_store.png";
import Google from "public/play_store.png";

export default function Home() {
  return (
    <div className="bg-home mx-auto max-w-[100rem] items-center bg-cover bg-no-repeat px-4 md:px-8 lg:px-20">
      {/* <Image
        src={BG}
        alt="Background Image"
        className="fixed left-0 z-[-99] h-[760px] w-screen object-cover"
      /> */}
      <Navbar />
      <div className="h-full w-full py-20 md:grid md:grid-cols-2">
        <div className="text-white xl:pr-28">
          <h2 className="text-5xl font-bold">Tow anywhere with iRescue</h2>
          <p>Seek a tow or an ambulance with just one request.</p>
          <div className="relative">
            <span className="absolute left-0 top-8 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.5"
                  stroke="#E61717"
                  strokeWidth="5"
                ></circle>
              </svg>
            </span>
            <input
              className="mt-4 w-full rounded-md border border-gray-300 px-4 py-3 pl-10 pr-4 text-black"
              placeholder="Enter Location"
            />
            <span className="absolute right-0 top-7 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 3l-6.5 18a.551.551 0 01-1 0L10 14l-7-3.5a.55.55 0 010-1L21 3z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="relative">
            <span className="absolute left-0 top-8 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path stroke="#000" strokeWidth="4" d="M2 2H14V14H2z"></path>
              </svg>
            </span>
            <input
              className="mt-4 w-full px-4 py-3 pl-10 text-black"
              placeholder="Enter destination"
            />
          </div>
          <button className="mt-4 w-full bg-black px-8 py-4 font-semibold text-white hover:bg-black/90 lg:w-1/2">
            TOW NOW
          </button>
        </div>
        <div className="mt-5 md:mt-0">
          <motion.div
            animate={{ x: 1000, opacity: 0, display: "hidden" }}
            transition={{ duration: 2, delay: 1 }}
            className="fixed object-bottom"
          >
            <Image src={Tow} alt="Tow Truck" />
          </motion.div>
          <motion.div
            style={{ x: -450, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="object-bottom"
          >
            <Image src={Car} alt="Car" />
            {/* <Image src={Car} alt="Car" className="w-32" /> */}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-end gap-3 pb-10">
        <Image src={Apple} alt="apple logo" className="w-full sm:w-max" />
        <Image src={Google} alt="play store logo" className="w-full sm:w-max" />
      </div>
    </div>
  );
}
