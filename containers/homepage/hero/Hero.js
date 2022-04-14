import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown, Icon } from "semantic-ui-react";
import ChangeDeliveryLocation from "../../fixed/order/order_options/ChangeDeliveryLocation";
import SearchLocation from "./child/HeroSearchLocation";
import { useState } from "react";
import SearchBox from "./child/SearchBox";



export default function Hero() {


  const router = useRouter()
  console.log(router)

  const [searchText, setSearchText] = useState("")
  

  const handleFindLocation = () => {
    console.log("Let's find the location")
  }


    return (
      <div className="flex-col h-[600px] w-screen p-2 md:px-20 md:pt-28 bg-hero-pattern bg-no-repeat bg-cover">
        <div className="flex py-2 md:pt-10 md:pb-16">
          <h3 className="text-7xl">Surprise your tastebud</h3>
        </div>

        {/* seach box */}
        <SearchBox />

        <div className="py-5">
          <p className="text-left text-xl">
            <Link href="/account/login">
              <a className="underline cursor-pointer">Sign In </a>
            </Link>
            to continue where you left
          </p>
        </div>
      </div>
    );
}


export const options = [
  { key: 1, text: "Pick Delivery", value: 1, icon: "map marker"  },
  { key: 2, text: "Deliver Now", value: 1, icon: "map marker" },
  { key: 3, text: "Schedule for later", value: 2, icon: "map marker" },
];