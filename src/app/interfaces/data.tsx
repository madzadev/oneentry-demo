export interface Product {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductAPI {
  id: string;
  attributeValues: {
    en_US: {
      producttitle: {
        value: { htmlValue: string }[];
      };
      productsubtitle: {
        value: { htmlValue: string }[];
      };
      productdescription: {
        value: { htmlValue: string }[];
      };
      productimage: {
        value: { downloadLink: string }[];
      };
      productprice: {
        value: number;
      };
    };
  };
}

export interface Page {
  pageUrl: string;
  title: string;
  description: string;
  image: string;
  localizeInfos: {
    en_US: {
      title: string;
    };
  };
}

export interface PageAPI {
  attributeValues: {
    en_US: {
      herotitle: {
        value: { htmlValue: string }[];
      };
      herodescription: {
        value: { htmlValue: string }[];
      };
      heroimage: {
        value: { downloadLink: string }[];
      };
    };
  };
}

export interface URLProps {
  params: {
    category: string;
    productId: string;
  };
}

export interface TextProps {
  className: string;
  text: string;
}
