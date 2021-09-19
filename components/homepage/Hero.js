import { Dropdown, Icon } from "semantic-ui-react";

export default function Hero() {
    return (
      <div className="flex-col min-h-screen w-screen p-2 md:px-20 md:pt-32 bg-hero-pattern bg-no-repeat bg-cover">
        <div className="flex py-2 md:pt-10 md:pb-20">
          <h3 className="text-7xl">Surprise your tastebud</h3>
        </div>

        <div className="flex items-center">
          <div className="flex items-center py-2 relative">
            <input
              type="text"
              className="md:py-5 px-14  filter drop-shadow-lg focus:border-b-2 md:w-96 focus:outline-none"
              placeholder="Enter your location..."
            />
            <Icon name="map marker" size="large" className="absolute left-3" />
          </div>
          {/* Select delivery option */}
          <div className="px-2 overflow-hidden w-max">
            <select
              name="delivery"
              id="delivery"
              className="px-5 py-5 border-0 appearance-none w-56 font-bold block"
            >
              {options.map((element) => {
                return (
                  <option
                    key={element.key}
                    value={element.value}
                    className="font-bold py-5 space-y-5"
                  >
                    {element.text}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Button */}
          <div className="px-0">
            <button type="submit" className="px-10 py-5 bg-black text-white">
              Find Dishes
            </button>
          </div>
        </div>
        <div className="py-5">
          <p className="text-left text-xl">
            <a className="underline cursor-pointer">Sign In</a> to continue
            where you left
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