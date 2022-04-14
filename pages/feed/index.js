
import CategoryInLine from "@/containers/feed/CategoryInLine";
import FeedSlider from "@/containers/feed/FeedSlider";
import Filter from "@/containers/feed/filterCategory/Filter";
import HomeFeed from "@/containers/feed/HomeFeed";
import useAdsList from "helper/hooks/useAdsList";
import NavbarSecondary from "layout/child/NavbarSecondary";
import { useQuery } from "react-query";
import Layout from "../../layout/Layout";

export default function Feed(resource) {
  
  // console.log(resource.data)
  
  


  // const { data, isError, isLoading, isSuccess } = useAdsList()
  
  // if (isError) {
  //   console.log("error")
  // }

  // if (isLoading) {
  //   console.log("data loading")
  // }

  // console.log(data)


// const data = 

  return (
    <Layout>
      {/* Navbar */}
      <NavbarSecondary />
      <CategoryInLine />
      <FeedSlider />
      <div className="grid grid-cols-4 w-screen mt-4">
        <div className="">
          <Filter />
        </div>
        <div className="col-span-3">
          <HomeFeed />
        </div>
      </div>
    </Layout>
  );
}



export async function getStaticProps () {

  const spaceId = process.env.NEXT_PUBLIC_SPACE_ID
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
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
  kitchenCollection {
    items {
      name
      kitchenImage {
        fileName
        url
      }
      favorite
    }
  }
  
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


  const data = await res.json()




  return {
    props: {
      // resource: [data.adsCollection.items, data.kitchenCollection.items],
    },
  };
}