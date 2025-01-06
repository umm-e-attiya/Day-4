import Image from "next/image";
import Link from "next/link";
import vector from "/public/Vector.png"; // Path corrected
import searchbar from "/public/searchbar.png"; // Path corrected
import { IoChevronDownSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Ensure the package is installed
import { MenuIcon } from "lucide-react"; // Ensure lucide-react is installed

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black w-full flex items-center justify-between px-9 lg:px-14 lg:py-3">
        <p className="text-white text-[12px] md:text-[14px] w-full text-center">
          Sign up and get 20% off your first order.
          <span className="font-medium text-white underline cursor-pointer"> Sign Up Now</span>
        </p>
        {/* Fixed Image */}
        <Image src={vector} alt="vector" width={20} height={20} className="hidden" />
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-white mt-4 lg:mt-6 px-4 md:px-7 lg:px-14">
        {/* Mobile Menu Icon */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <Image src={searchbar} alt="searchbar" width={250} height={47} />
            <ul className="text-gray-400 mt-14 space-y-2">
              <li className="flex items-center justify-between">
                Shop <IoChevronDownSharp />
              </li>
              <li>On Sale</li>
              <li>New Arrival</li>
              <li>Brands</li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[30px]">
          <b>SHOP.CO</b>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:ml-4 gap-6 text-gray-400">
          <li className="flex items-center">
            Shop <IoChevronDownSharp className="ml-1 w-4 h-4" />
          </li>
          <li>On Sale</li>
          <li>New Arrival</li>
          <li>Brands</li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex lg:ml-auto">
          <Image src={searchbar} alt="searchbar" width={577} height={48} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 ml-10 lg:ml-6">
          <Link href="/cart">
            <BsCart2 className="w-6 h-6 cursor-pointer" />
          </Link>
          <RiAccountCircleFill className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
