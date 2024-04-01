import Image from "next/image";
import Battery from "public/car-battery.svg";
import SUV from "public/suv.png";
import Hook from "public/logos/hook.svg";
import Calendar from "public/logos/calendar.svg";
import Thumb from "public/logos/thumbs-up.svg";

export default function Services() {
  return (
    <>
      <div className="mx-auto mt-36 max-w-6xl bg-[#EEEEEE] px-4 pb-10 pt-20 md:px-8 lg:px-20 2xl:max-w-[100rem]">
        <h2 className="text-center text-4xl font-medium">+ OUR SERVICES</h2>
        <div className="mt-6 gap-3 sm:mt-20 sm:flex">
          <Image src={Battery} alt="Battery logo" className="mx-auto" />
          <div className="my-auto">
            <h4 className="text-4xl font-semibold text-[#7A7A77]">
              Battery Jump Start
            </h4>
            <p className="lg:w-1/2">
              Whether it&apos;s a dead car battery or dead bike battery, we are
              the battery jump starter service you&apos;re looking for. We get
              you moving!
            </p>
          </div>
        </div>
        <Image src={SUV} alt="SUV logo" />
      </div>
      <div className="mx-auto mt-20 max-w-[100rem] px-4 pt-20 md:px-8 lg:px-20">
        <div className="grid w-full grid-cols-1 items-center justify-between gap-14 md:grid-cols-3">
          <div className="flex h-44 w-full justify-center border border-gray-400">
            <div className="my-auto text-3xl">
              <h4 className="font-medium">24/ 7</h4>
              <p>Service</p>
            </div>
            <Image src={Hook} width={100} height={100} alt="Hook logo" />
          </div>
          <div className="flex h-44 w-full justify-center gap-3 bg-black text-white">
            <Image src={Calendar} width={70} height={70} alt="Calendar logo" />
            <div className="my-auto text-3xl">
              <h4 className="font-medium">24/ 7</h4>
              <p>Assistance</p>
            </div>
          </div>
          <div className="flex h-44 w-full justify-center gap-3 border border-gray-400">
            <Image src={Thumb} width={70} height={70} alt="Thumbs up logo" />
            <div className="my-auto text-3xl">
              <h4 className="font-medium">Satisfaction</h4>
              <p>Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
