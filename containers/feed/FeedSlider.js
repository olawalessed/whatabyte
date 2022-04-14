import useAdsList from "helper/hooks/useAdsList";
import Image from "next/image";
import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { BsArrowRightCircleFill } from "react-icons/bs"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeedSlider() {

   const { data, isError, isLoading, isSuccess } = useAdsList();

   if (isError) {
     console.log("error");
   }

   if (isLoading) {
     console.log("data loading");
   }

  //  console.log(data)

  const ads = data !== undefined && data.data.adsCollection.items
  // console.log(ads[0].captionImage)
  



    return (
      <div className="py-5 px-10 w-full align-middle">
        <div className="space-x-3 flex items-center">
          <BsFillArrowLeftCircleFill style={{ fontSize: 20 }} />

          <div className="grid grid-cols-3 gap-3.5 w-full justify-between">
            {isLoading ? (
              <>
                {skeletonCount.map((item, i) => (
                  <div key={i}>
                    <Skeleton height={174} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {ads.map((item, i) => (
                  <>
                    <div
                      className="block h-44 bg-sky-500 rounded-md p-5 relative"
                      style={{
                        backgroundImage: `url(${item.captionImage.url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <Image src={item.captionImage.url} layout="fill" /> */}
                      <p className="text-white text-xl font-bold">
                        {item.caption}
                      </p>
                    </div>
                  </>
                ))}
              </>
            )}

            {/*  */}
            {/* <div className="h-44 bg-orange-600 rounded-md">
              <p>Image slider here</p>
            </div>
            <div className="h-44 bg-teal-500 rounded-md">
              <p>Image slider here</p>
            </div> */}
          </div>

          <BsArrowRightCircleFill style={{ fontSize: 20 }} />
        </div>
      </div>
    );
}

const skeletonCount = [1,2,3]