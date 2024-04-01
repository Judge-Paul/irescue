import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { CirclePlus, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between">
      <Link className="mr-6" href="#">
        <Image src={Logo} alt="IRescue Logo" width={120} height={8} />
      </Link>
      <nav className="my-auto hidden gap-6 lg:flex">
        <Link
          className="px-2 font-semibold text-red-600 hover:text-red-700"
          href="#"
        >
          Home
        </Link>
        <Link
          className="px-2 font-semibold text-white hover:text-gray-100"
          href="#"
        >
          About
        </Link>
        <Link
          className="flex gap-3 px-2 font-semibold text-white hover:text-gray-100"
          href="#"
        >
          Services
          <CirclePlus size={18} className="my-auto text-red-600" />
        </Link>
        <Link
          className="px-2 font-semibold text-white hover:text-gray-100"
          href="#"
        >
          Subscription
        </Link>
        <Link
          className="px-2 font-semibold text-white hover:text-gray-100"
          href="#"
        >
          Login
        </Link>
      </nav>
      <div className="flex gap-3">
        <div className="my-auto flex gap-3 text-red-600">
          <Phone className="mt-auto" size={35} />
          <div className="my-auto text-right">
            <p className="text-sm font-medium text-white">Call Us Now !</p>
            <h4 className="text-lg font-bold italic">01-3306046</h4>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-r from-[#1E1E1E] via-[#391D1D] to-[#901A1A]"
          >
            <div className="grid gap-2 py-6 text-white">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Home
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                About
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Services
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Subscription
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
