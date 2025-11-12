import { Home } from "@/components/home";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products `, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return <h2>Failed in fetching data</h2>;
  }

  const data = await res.json();

  return data.data;
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <div>
      <Home products={products} />
    </div>
  );
}
