import { useState, useLayoutEffect, useRef, useReducer   } from "react";
import { Icon } from "semantic-ui-react";

import logo from "../../public/static/landscape.png";

import Image from "next/image";

import { useRouter } from "next/router";
import Link from "next/link";
import ToggleSwitch from "@/containers/fixed/ToggleSwitch";
import DropDownCart from "@/containers/fixed/DropDownCart";
import OrderSettingsModal from "@/containers/fixed/order/OrderSettingsModal";
import InitialOrderDetails from "@/containers/fixed/order/order_options/IntialOrderDetails";
import ChangeSchedule from "@/containers/fixed/order/order_options/ChangeSchedule";
import ChangeDeliveryLocation from "@/containers/fixed/order/order_options/ChangeDeliveryLocation";






export default function NavbarSecondary({ showSidebar, }) {

  const router = useRouter()

  console.log(router)

  const [enabled, setEnabled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)

  // Scroll Window
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])
  
  
  const handleScroll = e => {
    window.scrollY > 250 ? setEnabled(true) : console.log("Scroll position is less than 150");
      // console.log("Scroll position is larger that 150")    
  }

  const dropDownCartRef = useRef(false)
  
  // Cart visibility
  const closeCartDropdown = () => {
    // setShowCart(false)
    console.log("Let's close the dropdown cart")
  };

  // Order Modal Control
  const handleOrderPreferenceModal = () => {
    setShowLocationModal(!showLocationModal)
     router.replace('?mod=order')
      console.log("Location update should come up")
  }
  


  // Control for the modal popup
  const actionType = {
    INITIAL: "INITIAL",
    CHANGE: "CHANGE",
    SCHEDULE: "SCHEDULE",
  };

  const reducer = (state, action) => {
    switch (action.type) {
        case actionType.CHANGE:
          return "Change";
          case actionType.SCHEDULE:
            return "Schedule";
            default:
              return "Initial";
            }
          }
                    
  const [modalState, dispatch] = useReducer(reducer, 'Initial');
  

  
  

  return (
    <div
      className={
        enabled ? `sticky top-0 bg-white z-10` : null
      }
    >
      <div className="flex h-20 bg-slate-300 w-screen items-center justify-between overflow-hidden py-5 md:py-5 px-2 md:px-10">
        <div>
          <Icon name="bars" size="large" onClick={() => showSidebar} />
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="px-2">
            <Image src={logo} width={142} height={27} />
          </div>  
        </Link>

        {/* Toggle Switch */}
        <div className="justify-self-start">
          <ToggleSwitch />
        </div>

        {/* Pop Up Delivery Set Button */}
        {router.route === "/feed" ? (
          <button
            type="button"
            className="px-5 py-4 bg-gray-200 rounded-full text-md"
            onClick={handleOrderPreferenceModal}
          >
            <Icon name="map marker" size="small" />
            Lekki - Phase II • Now
          </button>
        ) : null}

        {/* Input search */}
        <div className="mx-5">
          <div className="px-2 relative flex items-center border-b-2 border-black">
            <input
              type="search"
              className="py-2.5 text-lg outline-none border-none bg-slate-300"
              placeholder="Search favorites"
            />
            <Icon name="search" size="large" className="absolute -left-6" />
          </div>
        </div>

        {/* Cart Button */}
        <button
          type="button"
          className="px-6 py-3.5 text-white bg-black rounded-full"
          onClick={() => setShowCart(!showCart)}
        >
          <Icon name="cart" size="small" />
          Cart • 0
        </button>

        <div>
          <button
            type="button"
            className="px-3 py-1.5 md:px-10 md:py-5 rounded-full bg-white filter shadow-lg "
          >
            Login
          </button>
        </div>
      </div>
      <div ref={dropDownCartRef} >
        {showCart ? <DropDownCart /> : null}
      </div>

      {/* Modal pop-up */}
      <div>
        {showLocationModal ? (
          <OrderSettingsModal
            showLocationModal={showLocationModal}
            setShowLocationModal={setShowLocationModal}
            dispatch={dispatch}
          >
            {modalState === "Initial" && (
              <InitialOrderDetails
                actionType={actionType}
                dispatch={dispatch}
                showLocationModal={showLocationModal}
                setShowLocationModal={setShowLocationModal}
              />
            )}
            {modalState === "Change" && (
              <ChangeDeliveryLocation
                actionType={actionType}
                dispatch={dispatch}
              />
            )}
            {modalState === "Schedule" && (
              <ChangeSchedule actionType={actionType} dispatch={dispatch} />
            )}
          </OrderSettingsModal>
        ) : null}
      </div>
    </div>
  );
}
