import Image from "next/image"
import frame9 from "../../../public/Frame9.png"
import shirt1 from "../../../public/shirt1.png"
import shirt2 from "../../../public/shirt2.png"
import shirt3 from "../../../public/shirt3.png"
import shirt4 from "../../../public/shirt4.png"
import fivehalfstar from "../../../public/fivehalfstar.png"



const ProductListing = () =>{
    return(
           <div>
                <div>
                      <Image src={frame9} alt="frame9" className="w-[259px] h-[22px] mt-2 ml-10" />
                </div>

                 <div className="lg:flex ml-24">
                    <div>
                           <Image src={shirt1} alt="shirt1" className="w-[152px] h-[162px] rounded-[20px] mt-7 ml-10 " />
                           <Image src={shirt2} alt="shirt2" className="w-[152px] h-[162px] rounded-[20px] mt-7 ml-10 " />
                           <Image src={shirt3} alt="shirt3" className="w-[152px] h-[162px] rounded-[20px] mt-7 ml-10" />

                    </div>
                    <div>
                          <Image src={shirt4} alt="shirt4" className="w-[444px] h-[520px] rounded-[20px] mt-10 ml-12" />
                    </div>

                     <div className="ml-14 mt-6">
                        <h1 className="font-bold text-[40px] ml-12 ">One Life Graphic T-shirt</h1>
                         <div className="lg:flex ml-16">
                         <Image src={fivehalfstar} alt="fivehalfstar" className="w-[139px] h-[24px]"/>
                         <p className="text-gray-400 ml-2">4.5/5</p>
                         </div>
                         <div className="flex ml-12">
                            <p className="font-bold text-[36px]">$260</p>
                            <p className="text-gray-500 font-bold text-[36px] line-through ml-3">$300</p>
                            <p className="w-[44px] h-[22px] font-medium text-[16px] bg-red-500 text-red-600 mt-4  ml-3">-40%</p>
                         </div>
                         <div>
                            <p className="w-[590px] text-gray-400 font-normal text-[16px] ml-12">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                         </div>

                         <hr className="mt-6"/>

                         
                     </div>

                 </div>
           </div>
    )
}
export default ProductListing;