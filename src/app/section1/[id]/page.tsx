"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
 
import frame5 from "../../../../public/Frame5.png"
import { section1 } from "../../../../Data/data";
import { Section3 } from "../../../../Data/data";
import { Review } from "../../../../Data/data";
interface param {
    params:{
        id:string
    }
}

const Section1 = ({params}: param) =>{
  
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("Large");
    const convertNumber = Number(params.id)
    const [cartItems, setCartItems] = useState<any[]>([]); 
    const section1find = section1.find((items) => items.id === convertNumber)
    
    useEffect(() => {
      const savedCartData = localStorage.getItem("cartData");
      if (savedCartData) {
          setCartItems(JSON.parse(savedCartData)); // Local storage ka data state mein daalna
      }
  }, []);
    
    const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSizeChange = (size: string) => setSelectedSize(size);

 

  const handleAddToCart = () => {
    if (section1find) {
        const cartItem = {
            id: section1find?.id,
            title: section1find?.title,
            price: section1find?.price,
            quantity,
            size: selectedSize,
        };

        setCartItems([...cartItems, cartItem]); // Add to local cart state

        localStorage.setItem("cartData", JSON.stringify([...cartItems, cartItem]));

        // Redirect to cart page
        
    }
};



    return(
          <div className="lg:mx-36 mt-10">
              
              {section1find &&
                 <div className="lg:flex lg:gap-16">
                 <Image src={section1find?.image || "/noting"} alt="not-found" width={444} height={530} className="lg:w-[444px] lg:h-[530px] w-[300px] mx-6 rounded-[20px]" />
                  <div>
                   <h1 className="font-bold lg:text-[40px]">{section1find?.title}</h1>
                   <div className="lg:flex">
                   <Image src={section1find?.starimage || "/noting"} alt="not-found" width={139} height={24}  />
                    <div>
                     <p className="text-[16px] gap-3">{section1find?.review}</p>
                    </div>
                   </div>
                    <div className="flex gap-4">
                     <p className="font-bold text-[32px]">{section1find?.price}</p>
                     <div>
                       <p className="font-bold text-[32px] line-through text-gray-400">{section1find?.discountedprice}</p>
                     </div>
                     <div>
                       <p className="bg-red-300 text-[16px] font-medium mt-2 text-red-500 rounded-[62px]">{section1find?.sale}</p>
                     </div>

                    </div>
                    <div>
                     <p className="font-normal text-gray-500 text-[16px] lg:w-[590px]">{section1find?.description}</p>
                   </div>
                   <hr className="md:w-[590px] w-[300px]  border-[1px] mt-3"  />

                   <div className="mt-3">
                   <h1 className="font-normal text-[16px] text-gray-500">Select Sizes</h1>
                  <div className="lg:flex lg:gap-4">
                   <p className="w-[86px] h-[46px] rounded-[62px] bg-gray-300 text-gray-500 text-[16px] px-[20px] py-[12px]">Small</p>
                   <p className="w-[86px] h-[46px] mt-4 rounded-[62px] bg-gray-300 text-gray-500 text-[16px] px-[15px] py-[12px]">Medium</p>
                   <p className="w-[86px] h-[46px] mt-4 rounded-[62px] bg-black text-white text-[16px] px-[20px] py-[12px]">Large</p>
                   <p className="w-[86px] h-[46px] mt-4 rounded-[62px] bg-gray-300 text-gray-500 text-[16px] whitespace-nowrap px-[20px] py-[12px]">X-Large</p>
                   </div>
                   </div>
                   <hr className="md:w-[590px] w-[300px] border-[1px] mt-3" />

                   <div className="lg:flex">
                  <div className="mt-3 flex items-center gap-4 w-[170px] h-[52px] rounded-[62px] bg-gray-300 pl-14">
                  <button
                onClick={handleDecrement}
                className="text-black"
              >
                -
              </button>
              <p className="text-[20px] font-medium">{quantity}</p>
              <button
                onClick={handleIncrement}
                className=" text-black"
              >
                +
              </button>
            </div>
            <div>
                  <button
              onClick={handleAddToCart}
              className="bg-black text-white font-medium text-[16px] w-[300px] lg:w-[400px] h-[52px] lg:px-[54px] lg:py-[16px] lg:ml-[54px] rounded-[62px] mt-4"
            >
              Add to Cart
            </button>
            </div>
            </div>
                 
            </div>
              
                  
                  
                </div>
             

              }
             <div className="lg:flex whitespace-nowrap mt-6 gap-4 ">
              <div>
              <p className="font-normal text-[20px] mt-5 lg:ml-40  text-gray-400">Product Details</p>
              <hr className="lg:w-[400px] w-[300px] bg-gray-400 border-[1px]" />
              </div>
              <div>
              <p className="font-medium text-[20px] mt-5 lg:ml-40 text-black">Rating & Review</p>
              <hr className="lg:w-[400px] w-[300px] text-black border-[2px] hover:bg-black" />
              </div>
              <div>
              <p className="font-normal text-[20px] mt-5 lg:ml-40 text-gray-400">FAQs</p>
              <hr className="lg:w-[400px] w-[300px] bg-gray-400 border-[1px]" />
              </div>
            </div>
            <div className="lg:flex">
              <div className="flex lg:gap-5 mt-4">
                  <h1 className="font-bold text-[24px] whitespace-nowrap">All Reviews </h1>
                  <p className="font-normal text-[16px] text-gray-400 mt-2">(451)</p>
              </div>
                 <div className="lg:flex lg:ml-[60%] lg:gap-5 mt-4">
                  <div className="w-[48px] h-[48px] rounded-[62px]  bg-gray-300">
                    <Image src={frame5} alt="notfound" width={24} height={24} className="mx-[10px] my-[10px]" />
                  </div>
                  <div className="w-[120px] h-[48px] rounded-[62px] bg-gray-300">
                    <p className="font-medium text-[16px] mx-[30px] my-[13px]">Latest</p>
                  </div>

                  <div className="w-[166px] h-[48px] rounded-[62px] bg-black">
                    <p className="font-medium text-[16px] text-white  mx-[30px] my-[13px] whitespace-nowrap">Write a Review</p>
                  </div>
            
                 </div>
            </div>
            <div >
              <ul className="grid md:grid-cols-2 mt-10">
                 {Review.map((review, index)=>{
                    return(
                       <ul key={index} className="lg:w-[610px] w-[300px] h-[390px]  lg:h-[300px] rounded-[20px] border-[1px] py-[28px] px-[32px] mt-10">
                          <Image src={review.star} alt="not founded" width={127} height={22} />
                           <div className="flex gap-3 mt-[22px]">
                            <p className="font-bold text-[20px]">{review.Name}</p>
                            <Image src={review.tickimage} alt="not founded" width={24} height={24}/>
                           </div>
                           <p className="lg:w-[522px] font-normal text-gray-500 text-[16px] mt-[22px]">{review.description}</p>
                           <p className="mt-[22px] font-medium text-gray-700 text-[16px]">{review.date}</p>
                       </ul>
                    )
                 })}
              </ul>
            </div>
            <div className="flex justify-center items-center mt-20">
              <p className="w-[230px] h-[52px] rounded-[62px] border-[1px] whitespace-nowrap px-[54px] py-[16px] font-medium text-[16px] text-center">Load More Reviews</p>
            </div>

            <div>
                   <h1 className="font-bold lg:text-[48px] text-[30px] text-center mt-16">You might also like</h1>
            </div>
              <div>
                                         <ul className="lg:flex md:grid md:grid-cols-2 mt-[30px] mx-10 lg:mx-[100px] gap-20">
                                            {Section3.map((section3 , index)=>{
                                              return(
                                                   
                                                   <ul key={index} className="py-5">
                                                      <Image src={section3.image} alt="not found" width={300} height={300} className="rounded-[20px]" />
                                                       <h1 className="font-bold text-[20px] gap-2 whitespace-nowrap">{section3.title}</h1>
                                                       <div className="flex gap-4">
                                                       <Image src={section3.starimage} alt="not found" width={113} height={18} />
                                                       <div>
                                                         <p className="font-normal text-[14px]">{section3.review}</p>
                                                       </div>
                                                       </div>
                                                       
                                                      <div className="flex gap-2">
                                                        <p className="font-bold text-[24px]">{section3.price}</p>
                                                         <div>
                                                          <p className="text-gray-400 text-[24px] line-through">{section3.discountedprice}</p>
                                                         </div>
                                                          <div>
                                                            <p className="bg-red-300 text-[15px] mt-2 text-red-500 rounded-[62px]">{section3.sale}</p>
                                                          </div>
                                                         </div>
                          
                                                   </ul>
                                              )
                                            })
                      
                                            }
                                         </ul>
                                    </div>
          </div>
    )
}
export default Section1;