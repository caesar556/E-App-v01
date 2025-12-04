import AddToCart from "@/components/common/AddToCart";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { id } = params;

  const res = await fetch(`${API_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return <div>Failed to load product</div>;

  const json = await res.json();
  const product = json.data;

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-6 ">
      <Card className="max-w-5xl w-full bg-black/80 border-none backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <CardContent className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={product.imageCover}
              width={300}
              height={300}
              alt={product.title}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2  text-white space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>

            {product.price && (
              <p className="text-2xl font-semibold text-violet-300">
                ${product.price}
              </p>
            )}

            {product.description && (
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            )}
            <div className="flex gap-8 mb-6">
              <Image
                src={product.imageCover}
                width={50}
                height={50}
                alt={product.title}
              />
              <Image
                src={product.imageCover}
                width={50}
                height={50}
                alt={product.title}
              />
              <Image
                src={product.imageCover}
                width={50}
                height={50}
                alt={product.title}
              />
            </div>
            <AddToCart productId={product._id} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
