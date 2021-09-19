import { useState } from 'react'
import {Menu, Input, Icon} from 'semantic-ui-react'



const Navbar = ({showSidebar}) => {
  

    return (
    <div>
        <div className="flex w-screen items-center justify-between overflow-hidden py-5 md:py-10 px-2 md:px-20">

          <div>
            <Icon name="bars" size="large"
            onClick={showSidebar}
            />
          </div>


          <div>
            <buton type="button" className="px-3 py-1.5 md:px-10 md:py-5 rounded-full bg-white ring-1 ring-black">Login</buton>
          </div>
        </div>

        
    </div>
    )
}


export default Navbar