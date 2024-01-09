import Image from "next/image";
import Header from "./components/Header";
import Text from "./components/Text";
import Footer from "./components/Footer";
import { getPages } from "./services/fetchData";
import { PageAPI } from "./interfaces/data";

export default async function Home() {
  const pages = await getPages();

  const getValues = (el: PageAPI) => {
    const { herotitle, herodescription, heroimage } = el.attributeValues.en_US;

    return {
      title: herotitle.value[0].htmlValue,
      description: herodescription.value[0].htmlValue,
      image: heroimage.value[0].downloadLink,
    };
  };

  const pageContent = getValues(pages[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header pages={pages} />
      <div className="flex flex-row mx-auto max-w-screen-xl">
        <div className="flex-1">
          <Text
            className="text-6xl pb-10 text-gray-900"
            text={pageContent.title}
          />
          <Text
            className="text-xl pb-8 text-gray-500 text-justify"
            text={pageContent.description}
          />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Image
            src={pageContent.image}
            alt="Photo by Karsten Winegeart on Unsplash"
            width={450}
            height={900}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
