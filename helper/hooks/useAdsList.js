import { useQuery } from "react-query";


const getFeedData = async () => {
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
  adsCollection {
    items {
      caption
      captionImage {
        fileName
        url
      }
      contentfulMetadata {
        tags {
          id
          name
        }
        
      }
    }
  }
}
        `,
      }),
    }
  );

  return await res.json();
};


export default function useAdsList() {
    return useQuery('adsList', getFeedData)
}
