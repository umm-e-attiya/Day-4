import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";import { log } from "console";
import Image from "next/image";

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
       console.log(data);
       
    return(
        <div>
        {data.map((data:any) => (
          <div key={data._id}>
            <Image
              src={urlFor(data.imageUrl).url()}
              alt={data.name}
              width={295}
              height={298}
            />
            <h1 className="font-bold lg:text-[20px] gap-2">{data.name}</h1>
            <p className="font-bold text-[24px]">{data.price}</p>
            <p>{data.discountPercent}</p>
            <p>{data.isNew}</p>
          </div>
        ))}
      </div>
    )
}

export default data;