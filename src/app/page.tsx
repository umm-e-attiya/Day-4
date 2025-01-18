
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
    <div>
    <div className="w-full lg:h-[600px] bg-gray-100 mt-3 lg:flex">                      
    <div>                     
      <h1 className="w-[315px] h-[40px] pt-[80px]  lg:ml-[200px] font-bold text-[36px] mt-[20px]">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>                     
      <p className="lg:w-[490px] w-[300px]  font-normal text-gray-500 text-[14px] mt-[200px]  lg:ml-[200px]">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>                     
      <button className="w-[200px] h-[52px] lg:ml-[190px] text-white bg-black mt-[20px] rounded-full">
        Shop Now
      </button>                                          
      </div>   
         <div>
          <Image src={rectangle2} alt="rectangle2" className="lg:w-[400px] h-[400px] w-[400px]  md:w-[300px] lg:h-[500px] md:mt-6 lg:mt-14 lg:ml-[200px]" />
        </div>          
      </div>
            
      <div className="w-full lg:h-[122px]  grid grid-cols-1  md:grid-cols-1    bg-black text-white   lg:pt-[10px] lg:flex ">
    <Image src={versace} alt="logo" className="pt-[20px] w-[70px] h-auto  lg:ml-[20px] lg:w-[200px] lg:h-[100px]" />
    <Image src={zara} alt="logo" className=" pt-[20px] w-[70px] h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
    <Image src={gucci} alt="logo" className="pt-[20px] w-[90px] h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
    <Image src={prada} alt="logo" className="pt-[20px] w-[110px] h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
    <Image src={calvinklein} alt="logo" className="pt-[20px] w-[120px] h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
  </div>
  
  
               
              <div className="w-[403px] h-[58px] mt-4 lg:mt-[200px] lg:ml-[300px]">
                <p className="font-bold text-[30px] mx-10 md:mx-80 md:whitespace-nowrap lg:text-[48px]">NEW ARRIVALS</p>
              </div>
                <div>
                <Section1/>
                </div>
                 <div>
                   <button className="w-[218px] h-[52px] mt-[100px] ml-10  lg:ml-[611px] border-[1px] rounded-[62px] pt-[16px] pr-[54px] pb-[16px] pl-[54px] font-medium text-[16px] text-black hover:bg-gray-100">View All</button>
               </div>
  
               <hr className="mt-4 lg:ml-[300px] w-[250px] lg:w-[1000px]"/>
  
  
               <div>
                    <h1 className="lg:ml-[600px] mx-10 md:mx-40 mt-[50px] font-bold text-[30px] lg:text-[48px]">TOP SELLING</h1>
               </div>
                 
                 <div>
                  <Section2/>
                 </div>

                 
             
               
  
                          <div>
                            <button className="w-[218px] h-[52px] border-[1px] mt-[100px] ml-10 lg:ml-[611px] rounded-[62px] pt-[16px] pb-[16px] pr-[54px] pl-[54px] font-medium text-[16px] hover:bg-gray-100">View All</button>
                          </div>
                          
                          <hr className="mt-4 lg:ml-[300px] w-[200px] lg:w-[1000px]"/>


                      
  
                       <div className="lg:w-[1239px] w-[300px]  lg:h-[820px] rounded-[40px] bg-gray-100 mt-[100px] lg:ml-[200px] ">
                             <div>
                              <h1 className="lg:ml-[276px] pt-[70px] font-bold text-[30px] lg:text-[48px]">BROWSE BY Dress STYLE</h1>
                              </div>
  
                              <div className="lg:flex lg:mt-7">
                                <Image src={frame1} alt="frame1" className="lg:w-[407px] lg:h-[289px] w-[300px]  lg:ml-[64px] rounded-[20px]" />
  
                                <Image src={frame2} alt="frame2" className="lg:w-[684px]  lg:h-[289px] w-[300px]   rounded-[20px]  lg:ml-[50px]" />
  
                              </div>
  
                              <div className="lg:flex mt-7">
                                <Image src={frame3} alt="frame1" className="lg:w-[684px]   lg:h-[289px] w-[300px]   lg:ml-[64px] rounded-[20px]" />
  
                                <Image src={frame4} alt="frame2" className="lg:w-[401px] lg:h-[289px] w-[300px]    rounded-[20px]  lg:ml-[50px]" />
  
                              </div>
                            </div>
  
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