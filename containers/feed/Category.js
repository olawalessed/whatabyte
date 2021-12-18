import Image from "next/image";
import { Button, Icon, IconGroup } from "semantic-ui-react";
import Link from 'next/link'
import { useRef, useEffect } from "react";

export default function Category() {

  const scrollRef = useRef(0)

  useEffect(() => {
    console.log(scrollRef.current.scroll)
    return () => {
      console.log("clean")
    }
  }, [])

  const handleHorizontal = (direction) => {

    direction === "left"
      ? (scrollRef.current.scrollLeft -= 100)
      : (scrollRef.current.scrollLeft += 100)
  }
    return (
      <div className="mb-10">
        <div className="flex items-center justify-between overflow-hidden pr-20">
          <h1>Popular near you</h1>
          <div className="flex items-baseline gap-5">
            <p className="underline text-lg">See all</p>

            <Button icon onClick={() => handleHorizontal('left')} className="bg-white">
              <Icon name="arrow left" color="grey" />
            </Button>
            <Button icon onClick={() => handleHorizontal('right')}>
              <Icon name="arrow right" />
            </Button>
          </div>
        </div>
        <div className="flex gap-10 items-start overflow-auto overflow-x-hidden" ref={scrollRef}>
          {dummy.map((item, i) => {
            return (
              <div key={i}>
                <Link href="/spot/single">
                  <div className="flex-col space-y-1 relative">
                    <div className="w-60 h-48 max-h-48 co bg-gray-900">
                      <Image
                        src={
                          "https://res.cloudinary.com/qribcom/image/upload/v1632079977/Test-random/burger-with-fried-chicken-french-fries-soda.jpg"
                        }
                        layout="fill"
                      />
                      {/* <h4 className="text-white text-center py-20">Image</h4> */}
                    </div>
                    <h3>Name of Item</h3>
                    <div className="flex items-start">
                      <Icon name="creative commons" color="green" />
                      <p>•</p>
                      <p>$4.56 Del. Fee</p>
                      <p>•</p>
                      <p>5-10 min</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
}


export const dummy = [1,2,3,4,5,6,7,8,9]