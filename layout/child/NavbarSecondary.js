import { useState, useLayoutEffect, useRef, useReducer, useEffect   } from "react";
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
import { useMoralis } from "react-moralis";






export default function NavbarSecondary({ showSidebar, }) {

  const router = useRouter()

  
  // MOralis
  const { isAuthenticated, logout, login, user } = useMoralis()
  
  
  
  const [enabled, setEnabled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  
  // Scroll Window
  useEffect(() => {
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
  
  
  // handle user login
  const handleUserLogin = () => {
    router.push("/account/login");
  }
  
  
  // handle user logout
  const handleUserLogout = () => {
    console.log("log user out")
    setShowLogOut(false)
    return logout()
  }
  
  // console log
  console.log(router)
  console.log(user)
  
  
  return (
    <div className={enabled ? `sticky top-0 bg-white z-10` : null}>
      <div className="flex h-20 bg-slate-300 w-screen items-center justify-between overflow-hidden py-5 md:py-5 px-2 md:px-10">
        <div>
          <Icon name="bars" size="large" onClick={() => showSidebar} />
        </div>
        {/* Logo */}
        <Link href="/">
          <div className="px-2 w-36 h-7 relative">
            <Image src={logo} layout="fill" />
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
            className="px-2.5 py-2.5 bg-gray-200 rounded-full text-md"
            onClick={handleOrderPreferenceModal}
          >
            <Icon name="map marker" style={{fontSize: 1}} />
            Lekki - Phase II • Now
          </button>
        ) : null}

        {/* Input search */}
        <div className="mx-5">
          <div className="px-2 relative flex items-center border-b-2 border-black">
            <input
              type="search"
              className="py-2 pl-4 text-lg outline-none border-none bg-slate-300"
              placeholder="Search favorites"
            />
            <Icon name="search" style={{fontSize: 16}} className="absolute left-0" />
          </div>
        </div>

        {/* Cart Button */}
        <button
          type="button"
          className="px-3 py-2.5 text-white bg-black rounded-full flex items-center"
          onClick={() => setShowCart(!showCart)}
        >
          <span className="mx-3">
            <Icon name="cart" size="small" style={{ fontSize: 16 }} />
          </span>
          Basket • 0
        </button>

        {/* User authentication indicatior */}
        <div>
          {isAuthenticated ? (
            <button
              type="button"
              className="p-2 text-ellipsis truncate flex gap-x-2 items-center  rounded-full bg-white filter shadow-lg font-bold relative"
              onClick={() => setShowLogOut(!showLogOut)}
            >
              <div className="relative w-7 h-7 ring-2 ring-offset-2 ring-green-500 rounded-full animate-pulse">
                <Image src="/avatar.png" layout="fill" />
              </div>
              {/* <span className="absolute top-4 left-4 rounded-full w-5 h-5 bg-green-500 drop-shadow-lg animate-pulse pointer-events-none" /> */}
              <span className="px-2.5">
                {user.attributes.ethAddress || user.attributes.username}
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="px-3 py-1.5 md:px-10 md:py-5 rounded-full bg-white filter shadow-lg "
              onClick={handleUserLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div ref={dropDownCartRef}>{showCart ? <DropDownCart /> : null}</div>

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

      <div className="absolute right-10">
        {showLogOut && (
          <button
            className="hover:bg-red-700 hover:text-white bg-red-100 ring-4 ring-red-600 ring-offset-4 px-10 py-4 rounded-full text-red-700"
            onClick={handleUserLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
