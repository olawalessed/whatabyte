import router from "next/router";
import { Children, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import Overlay from "../Overlay";


// Housing modal for the pop
export default function OrderSettingsModal({
  children,
  setShowLocationModal,
  showLocationModal,
  dispatch
}) {

  console.log(showLocationModal)

   

  const handleGoBack = () => {
    router.replace('/feed')
    dispatch({type: 'INITIAL'})
  }

  const [show, setShow] = useState(showLocationModal)
  return (
    <div>
      <div className="ease-in-out transition-transform duration-700">
        <div
          className="w-screen min-h-screen z-10 bg-slate-700 bg-opacity-60 overflow-hidden"
          onClick={() => setShowLocationModal(!showLocationModal)}
        ></div>
        
        <div className="max-w-xl p-10 bg-white filter drop-shadow-lg absolute top-20 right-0 left-0 mx-auto z-10">
          <Icon
            name="close"
            className="left-10 text-black"
            onClick={() => setShowLocationModal(!showLocationModal)}
          />
            {/* <Icon name="close" /> */}
          {/* </Icon> */}

          {children}
          <button type="button"
            className="bg-black text-white px-4 py-1.5 rounded-full inherit my-2"
            onClick={handleGoBack}

          >
            <Icon name="arrow left" className="pr-5" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
