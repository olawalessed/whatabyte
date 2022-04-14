import { useQuery } from "react-query";



const getParentCategoryList = async () => {

    const spaceId = process.env.NEXT_PUBLIC_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: `
              {
  parentCategoryCollection (limit: 10) {
    total 
    items {
      categoryName
      listOfKitchenCollection (limit: 10) {
        items {
          name
          kitchenImage {
            url
          }
          favorite
          deliveryTime
          deliveryPrice
        }
      }
    }
  }
}
              `,
        }),
      }
    );

    return await res.json()
}


export default function useParentCategoryList() {
  return useQuery("parentCategoryList", getParentCategoryList);
}