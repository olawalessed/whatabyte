import HeaderSection from "@/containers/slug/HeaderSection";
import InfoSection from "@/containers/slug/InfoSection";
import MenuTabSection from "@/containers/slug/MenuTabSection";
import NavbarSecondary from "layout/child/NavbarSecondary";
import Layout from "layout/Layout"
import { useRouter } from "next/router";

import { Icon } from "semantic-ui-react"




export default function SingleSpot() {


  const router = useRouter()
  console.log(router)

    return (
      <Layout>
        {/* Navbar */}
        <NavbarSecondary />
        <div>
                <HeaderSection />
                <InfoSection />
                <MenuTabSection />
                
        </div>
      </Layout>
    );
}
