import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import {BsArrowRightCircleFill} from "react-icons/bs"

export default function FeedSlider() {
    return (
      <div className="py-5 px-10 w-full align-middle">
        <div className="space-x-3 flex items-center">
          <BsFillArrowLeftCircleFill style={{ fontSize: 20 }} />

          <div className="grid grid-cols-3 gap-3.5 w-full justify-between">
            <div className="h-44 bg-sky-500 rounded-md">
              <p>Image slider here</p>
            </div>
            <div className="h-44 bg-orange-600 rounded-md">
              <p>Image slider here</p>
            </div>
            <div className="h-44 bg-teal-500 rounded-md">
              <p>Image slider here</p>
            </div>
            
          </div>

          <BsArrowRightCircleFill style={{ fontSize: 20 }} />
        </div>
      </div>
    );
}
