import Banner from "./Banner";
import Footer from "./Footer";
import Gallery from "./Gallery";
import RoomType from "./RoomType";
import Services from "./Services";

const LandingPage = () => {
  return (
    <div className="pt-6 landing-page md:px-6 sm:px-2">
      <Banner />
      <RoomType />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
