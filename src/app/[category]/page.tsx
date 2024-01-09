import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { getPages, getProducts } from "../services/fetchData";
import { ProductAPI, URLProps } from "../interfaces/data";

export default async function Product({ params }: URLProps) {
  const { category } = params;
  const pages = await getPages();
  const products = await getProducts(category);

  const getValues = (products: ProductAPI[]) => {
    return products.map((el) => {
      const {
        producttitle,
        productsubtitle,
        productdescription,
        productimage,
        productprice,
      } = el.attributeValues.en_US;

      return {
        id: el.id,
        category: category,
        title: producttitle.value[0].htmlValue,
        subtitle: productsubtitle.value[0].htmlValue,
        description: productdescription.value[0].htmlValue,
        image: productimage.value[0].downloadLink,
        price: productprice.value,
      };
    });
  };

  const productItems = getValues(products.items);

  return (
    <div className="flex flex-col min-h-screen">
      <Header pages={pages} />
      <div className="mx-auto max-w-screen-xl px-8">
        <h2 className="text-4xl text-gray-900 mb-12">
          Browse our {category} collection:
        </h2>
        <div className="grid gap-x-6 gap-y-10 grid-cols-4 mt-6">
          {productItems.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
