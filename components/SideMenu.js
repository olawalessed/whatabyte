import Image from 'next/image'
import logo from '../public/static/whatabyte-logo.svg'


export default function SideMenu({sidebar}) {

    // const blur = () => {
        
    // }    

    return (
      <section>
        {/* Sidebar content starts here */}
        <div className="flex space-x-5 z-10 transistion translate-x-10 ease-in-out duration-300">
          <div
            className={
              sidebar
                ? `w-96 min-h-screen bg-white flex-col p-10 relative`
                : `hidden`
            }
            onClick={console.log("Sidebar clicked")}
          >
            {/* Inner sidebar contents */}
            <div>
              <button
                type="button"
                className="w-full px-20 py-5 bg-black text-white text-xl font-sans"
              >
                Login
              </button>

              <div className="space-y-1 py-5">
                <h4 className="text-md">Create a business account</h4>
                <h4 className="pb-2.5 text-md">Add your restaurant</h4>
                <h4 className="text-md">Sign up to deliver</h4>
              </div>
            </div>

            <div className="absolute bottom-5">
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <Image
                    src={logo}
                    width={70}
                    height={70}
                    layout="intrinsic"
                    className="rounded"
                  />
                  <div className="block">
                    <p className="text-black font-bold tracking-tight text-lg leading-snug pr-2">
                      Discover more taste inside <br /> the app
                    </p>
                  </div>
                </div>
                {/* Store Icon */}
                <div className="flex py-3">
                  <Image
                    src={
                      "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    }
                    width={125}
                    height={62}
                    layout="intrinsic"
                  />
                  <Image
                    src={
                      "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    }
                    width={140}
                    height={50}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <Icon name="close" size="big" onClick={showSidebar}
            className="py-5"

            /> */}
        </div>
      </section>
    );
}


