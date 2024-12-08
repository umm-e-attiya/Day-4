import Image from "next/image";
import image1 from "../../../public/1.png"
import image2 from "../../../public/2.png"
import image3 from "../../../public/3.png"
import image4 from "../../../public/4.png"
import payment1 from "../../../public/payment1.png"
import payment2 from "../../../public/payment2.png"
import payment3 from "../../../public/payment3.png"
import payment4 from "../../../public/payment4.png"
import payment5 from "../../../public/payment5.png"
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
    return (
        <div>
            <footer>

            <div className="lg:w-[1240px] sm:w-[650px]  sm:h-[250px] lg:h-[180px] lg:ml-[200px] bg-black mt-20  rounded-[20px]">
                               <div className="lg:flex">
                                    <div>
                                      <h1 className="w-[551px] h-[94px] font-bold text-[40px] text-white ml-20 mt-10 ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                                    </div>
                                     <div>
                                     <div className="w-[349px] h-[48px] rounded-[62px] bg-white mt-10 ml-16 pt-[12px] pb-[12px] pl-[20px] flex">
                                     <HiOutlineMail className="mt-1" />
                                      <p className="w-[300px] h-[22px] font-normal text-[16px] text-gray-500 "> Enter your email address</p>
                                     </div>
                                      <div className="w-[349px] h-[48px] rounded-[62px] bg-white mt-3 ml-16  pt-[12px] pb-[12px] pl-[20px]">
                                         <p className="font-medium text-[16px] w-[172px] h-[22px]">Subscribe to Newsletter</p>
                                         </div>
                                      </div>
                                     </div>
                                     </div>


                <div className="bg-gray-200 w-full sm:h-[1700px]  lg:h-[499px]">
                    <div className="lg:flex lg:flex-row sm:flex-col">
                        <div>
                            <h1 className="font-bold text-[33px] mt-40 ml-16">SHOP.CO</h1>
                            <p className="w-[248px] h-[66px] font-normal text-gray-500 ml-16 text-[14px]">We have clothes that suits your style and which youre proud to wear. From women to men.</p>
                            <div className="flex ml-16 mt-10 gap-5">
                                <Image src={image1} alt="image1" className="w-[28px] h-[28px]" />

                                <Image src={image2} alt="image2" className="w-[28px] h-[28px]" />

                                <Image src={image3} alt="image3" className="w-[28px] h-[28px]" />

                                <Image src={image4} alt="image4" className="w-[28px] h-[28px]" />

                            </div>
                        </div>

                        <div className="mt-40">
                        <p className="font-medium text-[16px] text-black ml-20">Company</p>
                        <ul className="text-[16px] font-normal ml-20 text-gray-500">
                        <li className="mt-4">About</li>
                        <li className="mt-4">Features</li>
                        <li className="mt-4">Works</li>
                        <li className="mt-4">Career</li>
                        </ul>
                       </div>

                       <div className="mt-40">
                        <p className="font-medium text-[16px] text-black ml-20">Help</p>
                        <ul className="text-[16px] font-normal ml-20 text-gray-500">
                        <li className="mt-4">Customer Support</li>
                        <li className="mt-4">Delivery Details</li>
                        <li className="mt-4">Term & Conditions</li>
                        <li className="mt-4">Privacy Policy</li>
                        </ul>
                       </div>

                       <div className="mt-40">
                        <p className="font-medium text-[16px] text-black ml-20">FAQ</p>
                        <ul className="text-[16px] font-normal ml-20 text-gray-500">
                        <li className="mt-4">Account</li>
                        <li className="mt-4">Manage Deliveries</li>
                        <li className="mt-4">Orders</li>
                        <li className="mt-4">Payments</li>
                        </ul>
                       </div>

                       <div className="mt-40">
                        <p className="font-medium text-[16px] text-black ml-20">Resources</p>
                        <ul className="text-[16px] font-normal ml-20 text-gray-500">
                        <li className="mt-4">Free eBooks</li>
                        <li className="mt-4">Development Tutorial</li>
                        <li className="mt-4">How to - Blog</li>
                        <li className="mt-4">Youtube Playlist</li>
                        </ul>
                       </div>
                    </div>
                         
                     <hr className="w-[500px]  ml-32  "/>

                     <div className="mt-16 lg:flex">
                        <p className="text-gray-400 ml-20">Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className="flex gap-3 sm:ml-[100px] lg:ml-[900px]">
                            <Image src={payment1} alt="payment1" className="w-[46px] h-[30px]" />
                            <Image src={payment2} alt="payment2" className="w-[46px] h-[30px]" />
                            <Image src={payment3} alt="payment3" className="w-[46px] h-[30px]" />
                            <Image src={payment4} alt="payment4" className="w-[46px] h-[30px]" />
                            <Image src={payment5} alt="payment5" className="w-[46px] h-[30px]" />

                        </div>

                     </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;