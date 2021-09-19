import SideMenu from 'components/SideMenu';
import Hero from '../components/homepage/Hero'
import Layout from '../components/Layout'
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Transition } from '@headlessui/react';
import Overlay from 'components/Overlay';

export default function index() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <Layout>
      <div className="min-h-screen w-screen overflow-hidden relative">
        <div
          className="bg-center bg-no-repeat bg-yellow-100"
          styles={{
            backgroundImage: `url(${image.background})`,
          }}
        >
          <Navbar showSidebar={showSidebar} />
          <div className="top-0 z-10 fixed">
            <Transition show={sidebar}>
              <Transition.Child
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Overlay sidebar={sidebar} showSidebar={showSidebar} />
              </Transition.Child>
              <Transition.Child
                enter="transition ease-in-out duration-700 transform"
                enterFrom="-translate-x-full"
                enterTo="transalate-x-0"
                leave="transition-opacity ease-in-out duration-700 transform"
                leaveFrom="transalate-x-0"
                leaveTo="translate-x-full"
              >
                <SideMenu sidebar={sidebar} showSidebar={showSidebar} />
                {/* <div className="w-full h-full bg-white rounded-md shadow-lg" /> */}
              </Transition.Child>
            </Transition>
          </div>
          <Hero className="z-0" />
        </div>
      </div>
    </Layout>
  );
}



export const image = [
  {
    background: "../../public/static/fishy.jpg"
  }
]