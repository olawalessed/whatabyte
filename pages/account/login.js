import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/static/landscapelan.svg";


export default function userLoginPage() {


  // Route method from hook
  const route = useRouter()


  // ********************** Login *********************

  // Normal Login
  const user = {
    handleLogin: () => {
      console.log("User logged in")
      route.push("/feed")
    },

    handleWalletLogin: () => {
      console.log("Connect with the metamask or wallet")
      route.push("/feed");
    }
  }



    return (
      <div className="h-screen w-full overflow-hidden relative">
        <div className="text-center mt-10 overflow-hidden">
          <Image
            src={logo}
            width={200}
            height={75}
            alt="Alternative text for img"
          />
        </div>
        <div className="max-w-lg mx-auto mt-5 overflow-hidden rounded-md bg-gray-100 filter">
          {/* form */}
          <div>
            <div className="block w-full px-10 py-14">
              <h3>Account Login</h3>
              <label htmlFor="email" className="text-gray-400">
                {/* Email */}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                className="px-5 py-4 w-full mb-3 bg-gray-200 focus:ring-3 focus:ring-black rounded-full"
              />
              <label htmlFor="email" className="text-gray-400">
                {/* Password */}
              </label>
              <input
                type="password"
                name="password"
                id="passwor"
                placeholder="**********"
                className="px-5 py-4 w-full bg-gray-200 focus:ring-offset-5 focus:ring-black rounded-full"
              />
              {/* Submit Button */}
              <button
                type="button"
                className="px-4 py-5 bg-red-600 w-full text-white rounded-xl mt-5"
                onClick={user.handleLogin}
              >
                Login
              </button>

            {/* Or Using Connect Wallet */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="px-8 py-5 ring ring-opacity-100 ring-red-600 rounded-full mt-5 text-black"
                onClick={user.handleWalletLogin}
              >
                Connect with Wallet
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-14 px-20 absolute bottom-3">
          <p className="text-gray-400 tracking-tight">
            Whatabyte Inc. - {new Date().getFullYear().toPrecision()}{" "}
          </p>
        </div>
      </div>
    );
}
