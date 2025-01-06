import Image from "next/image";
import { section2 } from "../../../Data/data";
import Link from "next/link";

const Section2 = () => {
  return(
              <div>
              <ul className="lg:flex grid grid-cols-1  mt-[30px] mx-10 gap-2 lg:mx-[100px] lg:gap-20">
                                            {section2.map((section2)=>{
                                              return(
                                                   
                                                   <ul key={section2.id}>
                                                    <Link href ={`/section2/${section2.id}`}><Image src={section2.image} alt="not found" width={295} height={298} className="lg:w-[295px] lg:h-[298px] w-[200px] rounded-[20px]" /> </Link>
                                                       <h1 className="font-bold lg:text-[20px] gap-2">{section2.title}</h1>
                                                       <div className="flex gap-4">
                                                       <Image src={section2.starimage} alt="not found" width={104} height={18} />
                                                       <div>
                                                         <p className="font-normal text-[14px]">{section2.review}</p>
                                                       </div>
                                                       </div>
                                                       
                                                      <div className="flex gap-2">
                                                        <p className="font-bold text-[24px]">{section2.price}</p>
                                                         <div>
                                                          <p className="text-gray-400 text-[24px] line-through">{section2.discountedprice}</p>
                                                         </div>
                                                          <div>
                                                            <p className="bg-red-300 text-[15px] mt-2 text-red-500 rounded-[62px]">{section2.sale}</p>
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
    

export default Section2;