import Image from "next/image";
import vector from "../../../public/Vector.png"
import { IoChevronDownSharp } from "react-icons/io5";
import searchbar from "../../../public/searchbar.png"
import { BsCart2 } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import {Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
const Navbar = () =>{
    return(
           <div>
                
                <div className="sm:w-[650px] lg:w-full bg-fixed bg-black flex items-center justify-between px-4 py-2 lg:py-3">
  {/* Text Section */}
  <p className="text-white w-[90%] sm:w-[70%] sm:ml-[200px] md:w-[60%] lg:w-[70%] lg:ml-[600px] text-[12px]  lg:text-[14px] leading-tight">
    Sign up and get 20% off to your first order. 
    <span className="font-medium text-white underline"> Sign Up Now</span>
  </p>
  
  {/* Image Section */}
  <Image 
    src={vector} 
    alt="vector" 
    className="w-[13px] h-[13px] sm:w-[10px] sm:h-[16px] sm:ml-44 lg:w-[20px] lg:h-[20px]" 
  />
</div>





              <div className="w-full bg-white flex mt-[40px] lg:flex lg:mt-[40px]">

              <Sheet>
  {/* Trigger Button */}
  <SheetTrigger className="lg:hidden">
    <MenuIcon className="ml-28" />
  </SheetTrigger>

  {/* Content of the Sheet */}
  <SheetContent className="bg-white">
    <Image 
      src={searchbar} 
      alt="searchbar" 
      className="w-[250px] h-[47px]" 
    />
    <ul className="text-gray-400 mt-14 space-y-2">
      <li className="flex items-center justify-between">
        Shop <IoChevronDownSharp  />
      </li>
      <li>On Sale</li>
      <li>New Arrival</li>
      <li>Brands</li>
    </ul>
  </SheetContent>
</Sheet>

                    
                    <h1 className="font-bold text-[30px] ml-28  lg:ml-24 lg:text-[30px] "><b>SHOP.CO</b></h1>

                    <ul className="sm:hidden md:hidden lg:flex lg:ml-4 gap-4 lg:mt-3 text-gray-400 ">
                        <li>Shop</li><IoChevronDownSharp className="lg:w-[13px]  lg:h-[20px]" />
                        
                        <li>On Sale </li>
                        <li>New Arrival</li>
                        <li>Brands</li>
                    </ul>

                    <div>
                        <Image src={searchbar} alt="searchbar" className= "sm:hidden md:hidden lg:flex lg:w-[577px] lg:h-[48px] lg:ml-[90px]"/>
                        
                    </div>

                    <div className="flex lg:ml-7 ml-24 gap-4 mt-4">
                    <div>
                        <Link href="/productlisting"></Link>
                    <BsCart2 />
                    </div>
                    <RiAccountCircleFill />
                    </div>

                    
              </div>

             
             </div>
             



      
              
                      
              

              
        
        
        
    )
}

export default Navbar;



