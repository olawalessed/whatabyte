
import CategoryInLine from "@/containers/feed/CategoryInLine";
import FeedSlider from "@/containers/feed/FeedSlider";
import Filter from "@/containers/feed/Filter";
import HomeFeed from "@/containers/feed/HomeFeed";
import NavbarSecondary from "layout/child/NavbarSecondary";
import Layout from "../layout/Layout";

export default function Feed() {
  return (
    <Layout>
      {/* Navbar */}
      <NavbarSecondary />
      <CategoryInLine />
      <FeedSlider />
      <div className="grid grid-cols-4 w-screen mt-4">
        <div className="">
          <Filter />
        </div>
        <div className="col-span-3">
          <HomeFeed />
        </div>
      </div>
    </Layout>
  );
}
