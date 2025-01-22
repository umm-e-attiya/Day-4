import Image from "next/image";
import rectangle2 from "../../public/Rectangle2.png"
import versace from "../../public/versace.png"
import zara from "../../public/zara.png"
import gucci from "../../public/gucci.png"
import prada from "../../public/prada.png"
import calvinklein from "../../public/calvinklein.png"
import frame1 from  "../../public/Frame1.png"
import frame2 from "../../public/Frame2.png"
import frame3 from "../../public/Frame3.png"
import frame4 from "../../public/Frame4.png"
import tick from "../../public/tick.png"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import fivefullstar from "../../public/fivefullstar.png"
import Section1 from "./section1/page"
import Section2 from "./section2/page";










export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full lg:h-[600px] bg-gray-100 mt-6 lg:flex">
        <div>
          <h1 className="w-[90%] lg:w-[315px] h-[40px] pt-[80px] lg:ml-[200px] font-bold text-[36px] mt-[20px]  lg:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="lg:w-[490px] w-[90%] font-normal text-gray-500 text-[14px] mt-[150px] lg:mt-[200px] lg:ml-[200px]  lg:text-left">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="w-[200px] h-[52px] lg:ml-[190px] text-white bg-black mt-[20px] rounded-full mx-auto lg:mx-0 block">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0">
          <Image
            src={rectangle2}
            alt="rectangle2"
            className="w-[90%] lg:w-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="w-full lg:h-[122px] grid grid-cols-2 md:grid-cols-3 lg:flex items-center bg-black text-white lg:pt-[10px]">
        <Image
          src={versace}
          alt="logo"
          className="w-[70px] h-auto mx-auto lg:mx-[20px] lg:w-[200px]"
        />
        <Image
          src={zara}
          alt="logo"
          className="w-[70px] h-auto mx-auto lg:mx-[100px] lg:w-[200px]"
        />
        <Image
          src={gucci}
          alt="logo"
          className="w-[90px] h-auto mx-auto lg:mx-[100px] lg:w-[200px]"
        />
        <Image
          src={prada}
          alt="logo"
          className="w-[110px] h-auto mx-auto lg:mx-[100px] lg:w-[200px]"
        />
        <Image
          src={calvinklein}
          alt="logo"
          className="w-[120px] h-auto mx-auto lg:mx-[100px] lg:w-[200px]"
        />
      </div>

      {/* New Arrivals Section */}
      <div className="text-center mt-8 lg:mt-[200px]">
        <p className="font-bold text-[30px] lg:text-[48px]">NEW ARRIVALS</p>
      </div>
      <div>
        <Section1 />
      </div>
      <div className="text-center mt-[50px]">
        <button className="w-[218px] h-[52px] border-[1px] rounded-[62px] font-medium text-[16px] text-black hover:bg-gray-100">
          View All
        </button>
      </div>
      <hr className="mt-4 w-[90%] lg:w-[1000px] mx-auto" />

      {/* Top Selling Section */}
      <div className="text-center mt-8">
        <h1 className="font-bold text-[30px] lg:text-[48px]">TOP SELLING</h1>
      </div>
      <div>
        <Section2 />
      </div>
      <div className="text-center mt-[50px]">
        <button className="w-[218px] h-[52px] border-[1px] rounded-[62px] font-medium text-[16px] hover:bg-gray-100">
          View All
        </button>
      </div>
      <hr className="mt-4 w-[90%] lg:w-[1000px] mx-auto" />

      {/* Browse by Dress Style Section */}
      <div className="w-full lg:w-[1239px] bg-gray-100 rounded-[40px] mx-auto mt-[100px]">
        <h1 className="text-center pt-[70px] font-bold text-[30px] lg:text-[48px]">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="lg:flex lg:mt-7">
          <Image
            src={frame1}
            alt="frame1"
            className="w-[90%] lg:w-[407px] mx-auto lg:ml-[64px] rounded-[20px]"
          />
          <Image
            src={frame2}
            alt="frame2"
            className="w-[90%] lg:w-[684px] mx-auto mt-4 lg:mt-0 lg:ml-[50px] rounded-[20px]"
          />
        </div>
        <div className="lg:flex mt-7">
          <Image
            src={frame3}
            alt="frame3"
            className="w-[90%] lg:w-[684px] mx-auto lg:ml-[64px] rounded-[20px]"
          />
          <Image
            src={frame4}
            alt="frame4"
            className="w-[90%] lg:w-[401px] mx-auto mt-4 lg:mt-0 lg:ml-[50px] rounded-[20px]"
          />
        </div>
      </div>

      {/* Customer Reviews Section */}
        <div className="flex">
                              <h1 className="font-bold lg:text-[48px] mt-[200px] lg:ml-[200px]">OUR HAPPY CUSTOMER</h1>
                              <div className="flex mt-7 ">
                              <FaArrowLeft className="w-[24px] h-[24px] mt-[200px] lg:ml-[450px]" />
                              <FaArrowRight className="w-[24px] h-[24px] mt-[200px] lg:ml-3" />
                              </div>
  
                            </div>
  
                            <div className="mt-7 lg:flex">
                              <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[240px] border-[1px] rounded-[40px] pl-[20px]  lg:ml-[200px]">
                               <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                               <div className="flex">
                                <p className="font-bold text-[20px] mt-5">Sarah M.</p>
                                <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-2"/>
                               </div>
                              <p className="lg:w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
  
                              </div>
  
                              <div className=" lg:w-[400px] lg:h-[240px] w-[300px] h-[300px]  border-[1px] rounded-[40px] pl-[20px]  lg:ml-[20px]">
                               <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                               <div className="flex">
                                <p className="font-bold text-[20px] mt-5">Alex K.</p>
                                <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-1"/>
                               </div>
                              <p className="lg:w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p>
  
                              </div>
                              <div className="  lg:w-[400px] lg:h-[240px] w-[300px] h-[300px]  border-[1px] rounded-[40px] pl-[20px]  lg:ml-[20px]">
                               <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                               <div className="flex">
                                <p className="font-bold text-[20px] mt-5">James L.</p>
                                <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-1"/>
                               </div>
                              <p className="lg:w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">As someone whos always on the lookout for unique fashion pieces Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
                            </div>
                            </div>
                           
            </div>
  
  );
}
