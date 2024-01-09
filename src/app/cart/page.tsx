import Header from "../components/Header";
import Order from "../components/Order";
import Footer from "../components/Footer";
import { getPages } from "../services/fetchData";

export default async function Cart() {
  const pages = await getPages();
  return (
    <div className="flex flex-col min-h-screen">
      <Header pages={pages} />
      <div className="container mx-auto max-w-screen-xl px-8">
        <h2 className="text-4xl text-gray-900 mb-12">Shopping cart summary:</h2>
        <Order />
      </div>
      <Footer />
    </div>
  );
}
