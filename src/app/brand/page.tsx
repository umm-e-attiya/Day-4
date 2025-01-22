import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";import { log } from "console";
import Image from "next/image";
import Link from "next/link";

type data = {
   id:string;
   name:string,
   description:string,
   price:number,
   imageUrl:string,
   category:string,
   discountPercent:number,
   isNew:boolean,
   colors:string,
   sizes:string,
   

}
const data = async () =>{
    const data = await client.fetch(`
      *[_type=="products"]{
       _id,
       name,
       description,
       price,
       "imageUrl" : image.asset->url,
       category,
       discountPercent,
       "isNew": new,
       colors,
       sizes
     }
     `);

     if (!data || data.length === 0) {
      return (
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold">No products available</h2>
        </div>
      );
    }
       console.log(data);
       
    return(
        <div>
          <div className="lg:flex lg:ml-40 mt-10 lg:gap-[700px]">
            <h1 className="font-bold text-[32px]">Casual</h1>
            <div>
              <p className="font-normal text-[16px] mt-[10px] text-gray-500">Showing 1-10 of 100 Products</p>
            </div>
          </div>
          
          <div className="flex mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
         {data.map((data:any) => (
          <div key={data._id} className="ml-5 lg:ml-20 mt-6">
            <Link href={`/brand/${data._id}`}><Image
              src={urlFor(data.imageUrl).url()}
              alt={data.name}
              width={295}
              height={298}
           className="rounded-[20px]" /></Link>
            <h1 className="font-bold lg:text-[20px] gap-2">{data.name}</h1>
            <p className="font-bold text-[24px]">{data.price}</p>
            <p className="w-[20px] bg-red-400 rounded-lg">{data.discountPercent}</p>
            <p>{data.isNew}</p>
          </div>
        ))} 
       </div>
       </div>
       
      </div>

      
    )
}

export default data;