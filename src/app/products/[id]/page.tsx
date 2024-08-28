import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getProduct } from "../products.api";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-8 justify-between">
            Product Detail: {product.id}
            <Link
              className={buttonVariants()}
              href="/"
            >
              Go Back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img
            src={product.image}
            className="w-full h-64 object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
