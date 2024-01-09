export async function getPages() {
  const response = await fetch(
    "https://ecommerce.oneentry.cloud/api/content/pages",
    {
      method: "GET",
      headers: {
        "x-app-token": `${process.env.API_KEY}`,
      },
    }
  );
  return await response.json();
}

export async function getProducts(category: string) {
  const response = await fetch(
    `https://ecommerce.oneentry.cloud/api/content/products/page/url/${category}?limit=4&offset=0&langCode=en_US&sortOrder=DESC&sortKey=id`,
    {
      method: "GET",
      headers: {
        "x-app-token": `${process.env.API_KEY}`,
      },
    }
  );
  return await response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(
    `https://ecommerce.oneentry.cloud/api/content/products/${id}`,
    {
      method: "GET",
      headers: {
        "x-app-token": `${process.env.API_KEY}`,
      },
    }
  );

  return await response.json();
}
