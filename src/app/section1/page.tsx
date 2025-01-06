import Image from "next/image";
import Link from "next/link";
import { section1 } from "../../../Data/data";


const Section1 = () =>{
    return(
        <div>
                           <ul className=" grid grid-cols-1 mx-10  lg:flex mt-[30px] lg:mx-[100px] lg:gap-20">
                              {section1.map((section1)=>{
                                return(
                                     
                                     <ul key={section1.id}>
                                       <Link href ={`/section1/${section1.id}`}> <Image src={section1.image} alt="not found" width={295} height={298} className="lg:w-[295px] lg:h-[298px] w-[200px] rounded-[20px]" /> </Link>
                                         <h1 className="font-bold lg:text-[20px] gap-2">{section1.title}</h1>
                                         <div className="flex gap-4">
                                         <Image src={section1.starimage} alt="not found" width={104} height={18} />
                                         <div>
                                           <p className="font-normal text-[14px]">{section1.review}</p>
                                         </div>
                                         </div>
                                         
                                        <div className="flex gap-2">
                                          <p className="font-bold text-[24px]">{section1.price}</p>
                                           <div>
                                            <p className="text-gray-400 text-[24px] line-through">{section1.discountedprice}</p>
                                           </div>
                                            <div>
                                              <p className="bg-red-300 text-[15px] mt-2 text-red-500 rounded-[62px]">{section1.sale}</p>
                                            </div>
                                           </div>
            
                                     </ul>
                                )
                              })
        
                              }
                           </ul>
                      </div>
                            )
}
export default Section1;