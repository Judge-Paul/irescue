import Image from "next/image";
import Location from "public/logos/locations.svg";
import Service from "public/logos/service.svg";
import Confirmation from "public/logos/confirmation.svg";
import Towing from "public/logos/towing.svg";
import TowCar from "public/tow-car.png";
import { Button } from "@/components/ui/button";

export default function HowitWorks() {
  return (
    <div className="mx-auto mt-20 max-w-[100rem] px-4 pt-20 md:px-8 lg:px-20">
      <div className="text-center">
        <p className="text-lg 2xl:text-2xl">HOW IT WORKS</p>
        <h2 className="text-2xl font-medium sm:text-4xl">
          Introducing your New Favorite.
        </h2>
        <h2 className="text-2xl font-medium sm:text-4xl">
          Car Towing Experience
        </h2>
      </div>
      <div className="grid gap-14 pt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <Image
            src={Location}
            alt="Location logo"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h4 className="font-semibold">Pick Location</h4>
          <p className="pt-2 text-gray-500">
            We do things smarter, not harder, with grace and gratitude.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={Service}
            alt="Service logo"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h4 className="font-semibold">Choose a service</h4>
          <p className="pt-2 text-gray-500">
            We do things smarter, not harder, with grace and gratitude.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={Confirmation}
            alt="Confirmation logo"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h4 className="font-semibold">Choose a service</h4>
          <p className="pt-2 text-gray-500">
            Just verify your driver&apos;s license, add a payment method and
            you&apos;re good to go
          </p>
        </div>
        <div className="text-center">
          <Image
            src={Towing}
            alt="Towing logo"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h4 className="font-semibold">Start Towing</h4>
          <p className="pt-2 text-gray-500">
            Charging, insurance and roadside assistance are already included
          </p>
        </div>
      </div>
      <div className="grid pt-20 md:grid-cols-5">
        <div className="md:col-span-3">
          <h3 className="text-xl">TOWING SERVICES</h3>
          <h4 className="text-4xl font-semibold">Earn Money With iRescue</h4>
          <Image src={TowCar} alt="truck towing car" className="w-full" />
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between">
            <span className="flex-grow border-b-2 border-black">
              Car Towing
            </span>
            <span className="flex-grow border-b-2 border-red-500">
              Ambulance Emergency
            </span>
            <span className="flex-grow border-b-2 border-black">iRezone</span>
          </div>
          <div className="mt-10 flex gap-4">
            <div>
              <span className="rounded-full bg-red-500 px-3 py-2 font-bold text-white">
                1
              </span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">
                Drive more, earn more
              </h4>
              <p>
                Our 150+ million riders will send you plenty of ride requests.
                When demand is high, you can earn even more.
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <div>
              <span className="rounded-full bg-red-500 px-3 py-2 font-bold text-white">
                2
              </span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">
                Set your schedule
              </h4>
              <p>
                Drive for as long and as often as you like. Weekdays; weekends;
                evenings — fit driving around your lifestyle.
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <div>
              <span className="rounded-full bg-red-500 px-3 py-2 font-bold text-white">
                3
              </span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">
                Get paid each week
              </h4>
              <p>
                You&apos;ll receive your earnings at the end of each week — no
                need to wait around for payday.
              </p>
              <Button className="mt-4 rounded-full px-10 font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
