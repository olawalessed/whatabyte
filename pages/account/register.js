import Moralis from "moralis";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import logo from "../../public/static/landscapelan.svg";

export default function userReegisterPage() {


  // Get moralis user details
  const {isAuthenticated, isAuthenticating} = useMoralis()

  // const router = useRouter()
  console.log(router)

  // state
  const [state, setState] = useState({
    username: "",
    password: "",
    email: ""
  })


  // use Effect
  useEffect(() => {
    return isAuthenticated && router.replace("/feed")
  }, [isAuthenticated])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({...state, [name]: value})
  }

  const handleSubmitSignup = async (e) => {
    e.preventDefault()

    const user = new Moralis.User()

    user.set("username", state.username)
    user.set("password", state.password)
    user.set("email", state.email)

    try {
      const res = await user.signUp()

      console.log(res)
    } catch (error) {
      console.log(error.code, "****", error.message)
    }

  }

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="text-center mt-16 overflow-hidden">
        <Image
          src={logo}
          width={200}
          height={75}
          alt="Alternative text for img"
        />
      </div>
      <div className="max-w-lg mx-auto mt-5 overflow-hidden rounded-md bg-gray-100 filter drop-shadow-md">
        {/* form */}
        <div>
          <form onChange={handleInputChange} className="block w-full px-14 py-10">
            <h3>Create account</h3>
            <label htmlFor="name" className="text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={state.username}
              className="px-5 py-4 mb-3 mt-2 w-full bg-red-100 focus:ring-offset-1 focus:ring-red-800 focus:ring-4 outline-none rounded-sm"
            />
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              className="px-5 py-4 w-full mt-2 mb-3 bg-red-100 focus:ring-offset-1 focus:ring-red-800 focus:ring-4 outline-none rounded-sm"
            />
            <label htmlFor="email" className="text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              className="px-5 py-4 mt-2 bg-red-100 w-full focus:ring-offset-1 focus:ring-red-800 focus:ring-4 outline-none rounded-sm"
            />
            <button
              type="button"
              className="px-4 py-5 bg-red-700 w-full text-white rounded mt-5"
              onClick={handleSubmitSignup}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center my-5 bg-gray-100 h-14 px-20">
        <p className="text-gray-400 tracking-tight">
          {" "}
          Whatabyte Inc. - {new Date().getFullYear().toPrecision()}{" "}
        </p>
      </div>
    </div>
  );
}
