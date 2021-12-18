import Link from 'next/link'
import { useState } from 'react'
import {Menu, Input, Icon} from 'semantic-ui-react'



const Navbar = ({showSidebar}) => {
  

    return (
      <div>
        <div className="flex w-screen items-center justify-between overflow-hidden py-5 md:py-10 px-2 md:px-20">
          <div>
            <Icon name="bars" size="large" onClick={showSidebar} />
          </div>

          <div className="flex items-center space-x-10">
            {/* Discover page link */}
            <div>
              <Link href="/feed">
                <p className="font-medium text-base cursor-pointer border-b-2 border-gray-50 hover:border-gray-900">
                  Discover
                </p>
              </Link>
            </div>
            {/* Login button */}
            <div>
              <Link href="/account/login">
                <buton
                  type="button"
                  className="px-3 py-1.5 md:px-10 md:py-5 rounded-full bg-white filter shadow-lg cursor-pointer"
                >
                  Login
                </buton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Navbar