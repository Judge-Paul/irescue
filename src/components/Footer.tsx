import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FaFacebook,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Apple from "public/app_store.png";
import Google from "public/play_store.png";
import Huawei from "public/huawei_gallery.png";

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-[100rem] bg-[#171717] px-4 pb-8 pt-20 text-white">
      <div className="grid md:grid-cols-5 md:px-8 lg:px-20">
        <div className="col-span-2 mt-auto">
          <div>
            <h4 className="text-4xl font-semibold">01 -3306046</h4>
            <p className="text-2xl">hello@irescue.ng</p>
          </div>
          <div className="mt-6 flex gap-2">
            <Link href="#">
              <FaFacebook className="size-9 rounded-full bg-white/50 p-2 text-black hover:bg-gray-100 hover:text-gray-800" />
            </Link>
            <Link href="#">
              <FaXTwitter className="size-9 rounded-full bg-white/50 p-2 text-black hover:bg-gray-100 hover:text-gray-800" />
            </Link>
            <Link href="#">
              <AiFillInstagram className="size-9 rounded-full bg-white/50 p-2 text-black hover:bg-gray-100 hover:text-gray-800" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="size-9 rounded-full bg-white/50 p-2 text-black hover:bg-gray-100 hover:text-gray-800" />
            </Link>
            <Link href="#">
              <FaYoutube className="size-9 rounded-full bg-white/50 p-2 text-black hover:bg-gray-100 hover:text-gray-800" />
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid justify-between sm:grid-cols-3">
            <div>
              <h4>Coverage</h4>
              <div className="mt-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Airport Towing
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Cities
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  High Ways
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  VIP Exclusive
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Premium Tow
                </Link>
              </div>
            </div>
            <div>
              <h4>Partner with iRescue</h4>
              <div className="mt-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Become a mechanic
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Become a towing van
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Sign up as a iRezone
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Sign up as an Ambulance
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Franchise
                </Link>
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="mt-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  About us
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Press
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "block text-gray-400",
                  )}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <Image src={Apple} alt="App Store" />
            <Image src={Google} alt="Play Store" />
            <Image src={Huawei} alt="Huawei Gallery" />
          </div>
        </div>
      </div>
      <div className="mt-6 justify-between rounded-full bg-[#3B3A3A] px-2 py-4 sm:flex md:px-8 lg:px-20">
        <span className="my-auto text-sm text-[#A3A3A3] sm:text-lg">
          &copy; {new Date().getFullYear()} iRescue Emergency &trade;
        </span>
        <div className="my-auto gap-5 text-lg font-semibold sm:flex sm:text-xl">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-md block text-white sm:text-xl",
            )}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-md block text-white sm:text-xl",
            )}
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
