import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductPageClient from '../../components/ProductPageClient/ProductPageClient';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number;
  isNew: boolean;
  colors: string;
  sizes: string;
  
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data: Product[] = await client.fetch(
    `*[_type == "products"]{
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      discountPercent,
      "isNew": new,
      colors,
      sizes
    }`
  );

  const product = data.find((item) => item._id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageClient product={product} />;
}


