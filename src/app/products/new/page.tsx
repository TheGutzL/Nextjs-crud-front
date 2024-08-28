import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import ProductForm from "./product-form";

interface Props {
  params: {
    id: string;
  };
}

const ProductsNewPage = async ({ params }: Props) => {
  const product = await getProduct(params.id);
  console.log(product);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>{params.id ? "Edit Product" : "Create Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsNewPage;
