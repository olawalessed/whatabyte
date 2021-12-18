
import { RadioGroup } from "@headlessui/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Accordion, Form, Icon, Radio } from "semantic-ui-react";
import styles from "../../../styles/Slider.module.css";
import RadioFilterOptions from "./RadioFilterOptions";


export default function Filter() {

  const rangeRef = useRef(0)
  const outputRef = useRef(rangeRef.current);

  useEffect(() => console.log(rangeRef.current.value))

    return (
      <div className="px-10 sticky top-32 bottom-0">
        <h1>Filter Stores</h1>
        <h3>Sort</h3>
        <div className="flex-col gap-3">
          {/* Radio Selections */}
          <div>
            <RadioFilterOptions />
          </div>

          {/* Icon Selection */}
          <h3>Price</h3>
          <div className="flex space-x-3">
            {furg.map((item, i) => (
              <button
                key={i}
                type="button"
                className="px-3 py-2 bg-gray-200 rounded-full"
              >
                {`#` * item}
              </button>
            ))}
          </div>

          {/* Range Slider Price */}
          <h3>Delivery Fee</h3>
          <div className="w-full">
            <output className="" ref={outputRef}></output>
            <datalist className="flex justify-between w-full relative h-7">
              {furg.map((item, i) => (
                <option
                  className="w-12 h-6 py-1 bg-black rounded-full font-normal text-center text-white text-xs tracking-tight"
                  value={item}
                >
                  N{item}00
                </option>
              ))}
            </datalist>
            <input
              type="range"
              min="1"
              max="4"
              ref={rangeRef}
              className={styles.slider}
              id="priceRange"
              onChange={console.log("I'm been draged")}
            />
          </div>

          {/* Type of Diet */}
          <h3>Dietary</h3>
          <div>
            <div className="flex flex-wrap gap-2">
              {furg.map((item, i) => (
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-200 rounded-full"
                >
                  <Icon name="leaf" />
                  Vegetarian
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}


export const furg = [1, 2, 3, 4]