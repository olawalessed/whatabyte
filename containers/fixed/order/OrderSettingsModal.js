import router from "next/router";
import { Children, useState } from "react";
import { Button, Icon } from "semantic-ui-react";


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
      <div className="ease-in-out transition-transform duration-700 translate-y-28">
        <div
          className="fixed w-screen min-h-screen z-10 bg-black bg-opacity-70 overflow-hidden"
          onClick={() => setShowLocationModal(!showLocationModal)}
        ></div>
        <div className="max-w-xl p-10 bg-white filter drop-shadow-lg absolute right-0 left-0 md:top-40 mx-auto z-10">
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
