import Header from "../../components/Header";
import Preview from "../../components/Preview";
import AddToCart from "../../components/AddToCart";
import Footer from "../../components/Footer";
import { getPages, getProduct } from "../../services/fetchData";
import { ProductAPI, URLProps } from "../../interfaces/data";

export default async function Product({ params }: URLProps) {
  const { category, productId } = params;

  const pages = await getPages();
  const product = await getProduct(productId);

  const getValues = (el: ProductAPI) => {
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
  };

  const productItem = getValues(product);

  return (
    <div className="flex flex-col min-h-screen">
      <Header pages={pages} />
      <div className="flex mx-auto max-w-screen-xl">
        <div className="flex-1 flex justify-start items-center">
          <Preview productItem={productItem}>
            <AddToCart
              id={productId}
              category={category}
              title={productItem.title}
              subtitle={productItem.subtitle}
              description={productItem.description}
              image={productItem.image}
              price={productItem.price}
            />
          </Preview>
        </div>
      </div>
      <Footer />
    </div>
  );
}
