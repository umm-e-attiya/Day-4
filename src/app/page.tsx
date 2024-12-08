import Image from "next/image";
import rectangle2 from "../../public/Rectangle2.png"
import versace from "../../public/versace.png"
import zara from "../../public/zara.png"
import gucci from "../../public/gucci.png"
import prada from "../../public/prada.png"
import calvinklein from "../../public/calvinklein.png"
import image7 from "../../public/image 7.png"
import image8 from "../../public/image 8.png"
import image9 from "../../public/image 9.png"
import image10 from "../../public/image 10.png"
import fivehalfstar from "../../public/fivehalfstar.png"
import fourhalfstar from "../../public/fourhalfstar.png"
import fivefullstar from "../../public/fivefullstar.png"
import fourfullstar from "../../public/fourfullstar.png"
import threefullstar from "../../public/threefullstar.png"
import image11 from "../../public/image11.png"
import image12 from "../../public/image12.png"
import image13 from "../../public/image13.png"
import image14 from "../../public/image14.png"
import frame1 from  "../../public/Frame1.png"
import frame2 from "../../public/Frame2.png"
import frame3 from "../../public/Frame3.png"
import frame4 from "../../public/Frame4.png"
import tick from "../../public/tick.png"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";




export default function Home() {
  return (
          <div>
  <div className="w-full sm:h-[800px] lg:h-[600px] bg-gray-100 mt-3 lg:flex">                      
  <div>                     
    <h1 className="w-[315px] h-[40px] pt-[80px] sm:ml-[80px] lg:ml-[200px] font-bold text-[36px] mt-[20px]">
      FIND CLOTHES THAT MATCHES YOUR STYLE
    </h1>                     
    <p className="w-[490px] font-normal text-gray-500 text-[14px] mt-[200px] sm:ml-[80px] lg:ml-[200px]">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>                     
    <button className="w-[200px] h-[52px] sm:ml-[80px] lg:ml-[190px] text-white bg-black mt-[20px] rounded-full">
      Shop Now
    </button>                                          
    </div>   
       <div>
        <Image src={rectangle2} alt="rectangle2" className="lg:w-[400px] h-[400px] ml-[30px] lg:h-[500px] lg:mt-14 lg:ml-[200px]" />
      </div>          
    </div>
          
    <div className="w-full h-[300px] lg:h-[122px]   pt-[20px] bg-black text-white   lg:pt-[10px] lg:flex sm:flex-row">
  <Image src={versace} alt="logo" className="sm:pt-[20px] sm:w-[70px] sm:h-auto  lg:ml-[20px] lg:w-[200px] lg:h-[100px]" />
  <Image src={zara} alt="logo" className=" sm:pt-[20px] sm:w-[70px] sm:h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
  <Image src={gucci} alt="logo" className="sm:pt-[20px] sm:w-[90px] sm:h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
  <Image src={prada} alt="logo" className="sm:pt-[20px] sm:w-[110px] sm:h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
  <Image src={calvinklein} alt="logo" className="sm:pt-[20px] sm:w-[120px] sm:h-auto lg:ml-[100px] lg:w-[200px] lg:h-[100px]" />
</div>


             
            <div className="w-[403px] h-[58px] mt-[200px] lg:ml-[600px] sm:ml-[200px]">
              <p className="font-bold text-[48px]">NEW ARRIVALS</p>
            </div>


            <div className="lg:flex ">
            <div className="mt-8 sm:ml-[200px] lg:ml-[200px]">
              <Image src={image7} alt="image7" className="w-[295px] h-[298px] rounded-[20px] " />
              <p className="font-bold text-[15px] mt-[20px]">T-SHIRT WITH TAPE DETAILS</p>
              <div className="flex">
               <Image src={fivehalfstar} alt="fivehalfstar"  className="w-[104px] h-[18px]" />
              <p className="font-normal ml-2 text-[14px]">4.5/5</p>
              </div>
              <p className="font-bold text-[24px]">$120</p>
             </div>
              <div className="lg:ml-5 sm:ml-[200px] mt-8">
             <Image src={image8} alt="image8" className="w-[295px] h-[298px] rounded-[20px] " />
              <p className="font-bold text-[15px] mt-[20px]">SKINNY FIT JEANS</p>
              <div className="flex">
               <Image src={fourhalfstar} alt="fourhalfstar"  className="w-[80px] h-[18px]" />
              <p className="font-normal ml-2 text-[14px]">3.5/5</p>
              </div>
              <div className="flex">
              <p className="font-bold text-[24px]">$240</p>
              <p className="text-[24px] font-bold text-gray-300 line-through ml-4">$260</p>
              <p className="w-[58px] h-[28px] rounded-[62px] bg-red-400 text-red-600 font-medium ml-5 pr-[14px] pl-[14px] pb-[6px] pt[6px]">-20%</p>
              </div>
              </div>
              <div className="mt-8 sm:ml-[200px] lg:ml-5">
              <Image src={image9} alt="image9" className="w-[295px] h-[298px] rounded-[20px] " />
              <p className="font-bold text-[15px] mt-[20px]">Checkered Shirt</p>
              <div className="flex">
               <Image src={fivehalfstar} alt="fivehalfstar"  className="w-[104px] h-[18px]" />
              <p className="font-normal ml-2 text-[14px]">4.5/5</p>
              </div>
              <p className="font-bold text-[24px]">$180</p>
             </div>

             <div className="mt-8 sm:ml-[200px] lg:ml-5">
              <Image src={image10} alt="image10" className="w-[295px] h-[298px] rounded-[20px] " />
              <p className="font-bold text-[15px] mt-[20px]">Sleeve Striped T-shirt</p>
              <div className="flex">
               <Image src={fivehalfstar} alt="fivehalfstar"  className="w-[104px] h-[18px]" />
              <p className="font-normal ml-2 text-[14px]">4.5/5</p>
              </div>
              <div className="flex">
              <p className="font-bold text-[24px]">$130</p>
              <p className="font-bold text-[24px] ml-3 line-through text-gray-300">$160</p>
              <p> <p className="w-[58px] h-[28px]  rounded-[62px] bg-red-400 text-red-600 font-medium ml-5 pr-[14px] pl-[14px] pb-[7px] pt[7px]">-30%</p></p>
              </div>
             </div>
             </div>

             <div>
                 <button className="w-[218px] h-[52px] mt-[100px] sm:ml-[200px] lg:ml-[611px] border-[1px] rounded-[62px] pt-[16px] pr-[54px] pb-[16px] pl-[54px] font-medium text-[16px] text-black hover:bg-gray-100">View All</button>
             </div>

             <hr className="mt-4 lg:ml-[300px] lg:w-[1000px]"/>


             <div>
                  <h1 className="lg:ml-[600px] ml-[200px] mt-[50px] font-bold text-[48px]">TOP SELLING</h1>
             </div>

             
             <div className="lg:flex">
             <div className="mt-8 ml-[200px] lg:ml-[200px]">
                <Image src={image11} alt="image11" className="w-[295px] h-[298px] rounded-[20px] " />
                <p className="font-bold text-[20px]">VERTICAL STRIPED SHIRT</p>
                <div className="flex">
                  <Image src={fivefullstar} alt="fivefullstar" className="w-[113px] h-[18px]" />
                  <p className="font-normal ml-2 text-gray-500 text-[14px]">5.0/5</p>
                </div>
                <div className="flex">
              <p className="font-bold text-[24px]">$212</p>
              <p className="text-[24px] font-bold text-gray-500 line-through ml-4">$232</p>
              <p className="w-[58px] h-[28px] rounded-[62px] bg-red-400 text-red-600 font-medium ml-5 pr-[14px] pl-[14px] pb-[6px] pt[6px]">-20%</p>
              </div>
               </div>
                   
                   <div className="lg:ml-5 sm:ml-[200px] mt-8">
                       <Image src={image12} alt="image12" className="w-[295px] h-[298px] rounded-[20px]" />
                       <p className="font-bold text-[20px]">COURAGE GRAPHIC T-SHIRT</p>
                       <div className="flex">
                        <Image src={fourfullstar} alt="stars" className="w-[89px] h-[18px]" />
                         <p className="font-normal text-[14px] ml-2 ">4.0/5</p>
                       </div>
                       <p className="font-bold text-[24px]">$145</p>
                   </div>

                   <div className="lg:ml-5 sm:ml-[200px] mt-8">
                      <Image src={image13} alt="image13" className="w-[295px] h-[298px] rounded-[20px]" />
                      <p className="font-bold text-[20px]  ">LOOSE FIT BERMUDA SHORTS</p>
                      <div className="flex">
                        <Image src={threefullstar} alt="threefullstar" className="w-[66px] h-[18px]" />
                         <p className="font-normal text-[14px] ml-2 text-gray-100">3.0/5</p>
                         </div>
                         <p className="font-bold text-[24px]">$80</p>
                        </div>

                        <div className="lg:ml-5 sm:ml-[200px] mt-8">
                      <Image src={image14} alt="image14" className="w-[295px] h-[298px] rounded-[20px]" />
                      <p className="font-bold text-[20px]  ">FADED SKINNY JEANS</p>
                      <div className="flex">
                        <Image src={fivehalfstar} alt="stars" className="w-[104px] h-[18px]" />
                         <p className="font-normal text-[14px] ml-2 text-gray-100">4.0/5</p>
                         </div>
                         <p className="font-bold text-[24px]">$210</p>
                        </div>
                        </div>

                        <div>
                          <button className="w-[218px] h-[52px] border-[1px] mt-[100px] sm:ml-[200px] lg:ml-[611px] rounded-[62px] pt-[16px] pb-[16px] pr-[54px] pl-[54px] font-medium text-[16px] hover:bg-gray-100">View All</button>
                        </div>


                     <div className="lg:w-[1239px] sm:w-[650px] sm:h-[1500px] lg:h-[820px] rounded-[40px] bg-gray-100 mt-[100px] lg:ml-[200px] ">
                           <div>
                            <h1 className="sm:ml-[100px] lg:ml-[276px] pt-[70px] font-bold text-[48px]">BROWSE BY Dress STYLE</h1>
                            </div>

                            <div className="lg:flex lg:mt-7">
                              <Image src={frame1} alt="frame1" className="w-[407px] h-[289px] sm:mt-7 sm:ml-[100px]  lg:ml-[64px] rounded-[20px]" />

                              <Image src={frame2} alt="frame2" className="lg:w-[684px] sm:w-[500px] h-[289px] sm:ml-[100px] rounded-[20px] sm:mt-7  lg:ml-[50px]" />

                            </div>

                            <div className="lg:flex mt-7">
                              <Image src={frame3} alt="frame1" className="lg:w-[684px]  sm:w-[500px] h-[289px] sm:mt-7 sm:ml-[100px]  lg:ml-[64px] rounded-[20px]" />

                              <Image src={frame4} alt="frame2" className="w-[401px] h-[289px] sm:mt-7 sm:ml-[100px] rounded-[20px]  lg:ml-[50px]" />

                            </div>
                          </div>

                          <div className="flex">
                            <h1 className="font-bold text-[48px] mt-[200px] ml-[100px] lg:ml-[200px]">OUR HAPPY CUSTOMER</h1>
                            <div className="flex mt-7 ">
                            <FaArrowLeft className="w-[24px] h-[24px] mt-[200px] lg:ml-[450px]" />
                            <FaArrowRight className="w-[24px] h-[24px] mt-[200px] lg:ml-3" />
                            </div>

                          </div>

                          <div className="mt-7 lg:flex">
                            <div className="w-[400px] h-[240px] border-[1px] rounded-[40px] pl-[20px] sm:ml-[100px] lg:ml-[200px]">
                             <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                             <div className="flex">
                              <p className="font-bold text-[20px] mt-5">Sarah M.</p>
                              <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-2"/>
                             </div>
                            <p className="w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>

                            </div>

                            <div className=" w-[400px] h-[240px] border-[1px] rounded-[40px] pl-[20px] sm:ml-[100px] lg:ml-[20px]">
                             <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                             <div className="flex">
                              <p className="font-bold text-[20px] mt-5">Alex K.</p>
                              <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-1"/>
                             </div>
                            <p className="w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p>

                            </div>
                            <div className=" md:visible w-[400px] h-[240px] border-[1px] rounded-[40px] pl-[20px] sm:ml-[100px] lg:ml-[20px]">
                             <Image src={fivefullstar} alt="fivefullstar" className="w-[138px] h-[22px] mt-6" />
                             <div className="flex">
                              <p className="font-bold text-[20px] mt-5">James L.</p>
                              <Image src={tick} alt="tick" className="w-[24px] h-[24px] mt-5 ml-1"/>
                             </div>
                            <p className="w-[336px] h-[88px] font-normal text-gray-400 text-[16px]">As someone whos always on the lookout for unique fashion pieces Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
                          </div>
                          </div>

                          
                                     
                                           
                                           
                                    
                                  
                          

                          



</div>
  );
}