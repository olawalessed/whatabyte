import Image from "next/image";
import { Icon } from "semantic-ui-react";
import logo from '../public/static/whatabyte-logo.svg'

export default function Footer() {
    return (
      <div>
        <div className="w-screen bg-black py-20 overflow-hidden">
          <div className="flex-col gap-x-10 relative">
            <div className="flex justify-around space-x-5 text-white px-20">
              {/* three Columns */}
              {/* Column One */}
              <div className="flex-1">
                <div className="flex-col relative">
                  <Image
                    src={logo}
                    width={70}
                    height={70}
                    layout="intrinsic"
                    className="rounded filter drop-shadow-lg"
                  />
                  <div className="flex w-full py-3 absolute top-48">
                    <Image
                      src={
                        "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      }
                      width={150}
                      height={62}
                      layout="intrinsic"
                    />
                    <Image
                      src={
                        "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                      }
                      width={150}
                      height={62}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* Column two */}

              <div className="flex gap-x-36">
                <div className="flex-col">
                  <p className="font-normal text-lg">Get Help</p>
                  <p className="font-normal text-lg">Add your restaurant</p>
                  <p className="font-normal text-lg">Signup to deliver</p>
                  <p className="font-normal text-lg">
                    Create an organization account
                  </p>
                  <p className="font-normal text-lg">Check Discounts</p>
                </div>
                <div className="flex-col">
                  <p className="font-normal text-lg">Restaurants near me</p>
                  <p className="font-normal text-lg">View all Cities</p>
                  <p className="font-normal text-lg">
                    Check restaurants new me
                  </p>
                  <p className="font-normal text-lg">The Chef's Stories</p>
                  <p className="font-normal text-lg">About Whatabyte</p>
                  <p className="font-normal text-lg">Contact</p>
                </div>
              </div>
            </div>

            <div className="flex-col w-full pt-20 overflow-hidden relative">
              {/* Straight line */}
              <div className="w-11/12 h-1.5 bg-gray-600 mx-40 absolute -right-20"></div>

              {/* Last Section */}
              <div className="flex justify-around space-x-10 text-white w-full pt-10 relative px-20 overflow-hidden">
                {/* Social media Icons */}
                <div className="flex-1">
                  <div className="flex gap-5">
                    <Icon name="facebook" size="large" />
                    <Icon name="twitter" size="large" />
                    <Icon name="instagram" size="large" />
                  </div>
                </div>
                {/* Terms and others */}
                <div className="flex-col text-right relative">
                  <div className="inline-block space-x-10">
                    <a className="underline text-white">Privacy Policy</a>
                    <a className="underline text-white">Terms</a>
                    <a className="underline text-white">Pricing</a>
                  </div>
                  <p className="py-2">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                </div>
                {/* The copyright item */}
                <div className="pl-5">
                  <p>
                    {" "}
                    (c) {new Date().getFullYear()} Whatabyte Technologies Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
