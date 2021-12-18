import { useState } from "react";
import { Icon } from "semantic-ui-react";

export default function HeaderSection() {


  const [favorite, setFavorite] = useState(false)


  // Set Favorite state
  const handleFavorite = () => {
    setFavorite(fav => !fav)
  }


    return (
      <div>
        <div className="w-full h-72 relative bg-food-background bg-no-repeat bg-cover z-0">
          <div className="flex h-full items-end justify-between font-black overflow-hidden px-10 pb-10">
            <div>
              <div className="flex-col space-y-1 text-white">
                <h1>As E dey Hot (Joint)</h1>
                <h4>$2.59 Delivery Fee • 55 - 65 Min • 4.5(150+)</h4>
              </div>
            </div>
            <div className="pr-20">
              <div className="flex gap-8 items-center">
                <button
                  type="button"
                  className="px-5 py-3 bg-indigo-100 rounded-full text-black"
                >
                  <Icon name="opencart" className="pr-7" />
                  Customize Order
                </button>
                <button onClick={handleFavorite}>
                  {favorite ? (
                    <Icon
                      name="heart"
                      size="large"
                      className="text-red-600"
                      />
                      ) : (
                        <Icon
                        name="heart outline"
                        size="large"
                        className="text-white"
                    />
                  )}
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
