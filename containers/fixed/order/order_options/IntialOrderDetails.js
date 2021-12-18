import {useRouter} from "next/router";
import { Button, Icon } from "semantic-ui-react";


export default function InitialOrderDetails({
  actionType,
  dispatch,
  setShowLocationModal,
  showLocationModal,
}) {


  const router = useRouter()


  const handleChange = () => {
    router.replace('?delivery?=location')
    dispatch({ type: actionType.CHANGE })
  }

  const handleSubscribe = () => {
    router.replace('?schedule=select')
    dispatch({type: actionType.SCHEDULE })
  }

  return (
    <div>
      <div className="flex-col space-y-2 w-full divide-y">
        <h4 className="text-4xl py-2">Delivery Details</h4>
        <div className="flex items-center justify-between w-full  px-5 py-6">
          <div className="flex-1 ">
            <div className="flex gap-5 items-center">
              <div>
                <Icon name="map marker" />
              </div>
              <div>
                <h3 className="">Lagos</h3>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="px-3 py-1.5 bg-gray-300 rounded-full"
              onClick={handleChange}
            >
              Change
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full  px-5 py-6">
          <div className="flex-1 ">
            <div className="flex gap-5 items-center">
              <div>
                <Icon name="time" />
              </div>
              <div>
                <h3 className="">Tomorrow</h3>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="px-3 py-1.5 bg-gray-300 rounded-full"
              onClick={handleSubscribe}
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="w-full px-5 py-6 bg-gray-900 text-white mt-4"
          onClick={() => setShowLocationModal(!showLocationModal)}
        >
          Done
        </button>
      </div>
    </div>
  );
}
