import Moralis from "moralis";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import logo from "../../public/static/landscapelan.svg";

export default function userLoginPage() {
  // Route method from hook
  const router = useRouter();
  
  // Blockchain methods
  const { isAuthenticated, authenticate } = useMoralis()

  // State
  const [state, setState] = useState({
    username: "",
    password: ""
  })


  // Effects
  useEffect(() => {
    if (isAuthenticated) router.replace("/feed")
  }, [isAuthenticated])


  // handle Change input
  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    setState({...state, [name]: value})
  }


  // ********************** Login *********************

  // Normal Login
  const user = {
    handleLogin: async () => {
      console.log("log user in");

      const user = new Moralis.User()

      user.set("username", state.username)
      user.set("password", state.password)

      try {
        const res = await user.logIn()

        console.log(res)
      } catch (error) {
        console.log(error.code, " : ", error.message )
      }

    },

    handleWalletLogin: () => {

      authenticate({ signingMessage: "Authorize Whatabyte to link your wallet"})
    },
  };

  console.log(isAuthenticated)


  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Head>
        <title>Whatabyte - Decentralized Food Order</title>
        <meta
          name="description"
          content="Order food with your crypto coin and token"
        />
      </Head>
      <div className="text-center mt-10 overflow-hidden">
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={75}
            alt="Alternative text for img"
          />
        </Link>
      </div>
      <div className="max-w-lg mx-auto mt-5 overflow-hidden rounded-md bg-gray-100 filter">
        {/* form */}
        <form onChange={(e) => handleInputChange(e)} className="px-10 py-14">
          <div className="block w-full">
            <h3>Account Login</h3>
            <label htmlFor="email" className="text-gray-400">
              {/* Email */}
            </label>
            <input
              type="email"
              name="username"
              id="email"
              value={state.username}
              placeholder="username / email"
              className="px-5 py-4 w-full mb-3 bg-gray-200 focus:ring-3 focus:ring-black rounded-full"
            />
            <label htmlFor="email" className="text-gray-400">
              {/* Password */}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
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
                className="px-8 py-3.5 w-full ring ring-opacity-100 ring-red-600 rounded-full mt-5 text-black"
                onClick={user.handleWalletLogin}
              >
                Login with Wallet
              </button>
            </div>
          </div>

          {/* signup */}
          <div className="my-3 block">
            <p>
              New to Whatabyte?{" "}
              <a href="/account/register">
                <span className="text-red-700 underline underline-offset-2">
                  signup here
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center w-full h-14 px-20 absolute bottom-3">
        <p className="text-gray-400 tracking-tight">
          Whatabyte Inc. - {new Date().getFullYear().toPrecision()}{" "}
        </p>
      </div>
    </div>
  );
}
