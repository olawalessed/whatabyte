import { useLayoutEffect } from "react";
import { Icon } from "semantic-ui-react";

export default function DropDownCart() {

   

    return (
      <div className="absolute z-20 right-12">
        <div className="w-96 h-72 px-3 text-center bg-white py-10 filter drop-shadow-lg">
          <div className="flex-col gap-3 w-full">
            <div className="mt-10 mx-auto">
              <Icon
                name="shopping basket"
                size="big"
                className="text-gray-400"
              />
            </div>
            <div className="px-20 text-gray-400 text-lg py-5">
              <p>Nothing is present in your basket... Add Items</p>
                    </div>
                    <div>
                        <button type="button" className="py-5 bg-black text-white w-full">Check Store</button>
                    </div>
          </div>
        </div>
      </div>
    );
}
