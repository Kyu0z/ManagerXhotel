import { Col, Image, Layout, Row, Typography } from "antd";
import gal1 from "@src/Members/MDK/LandingPage/image/gallery/gal1.png";
import gal2 from "@src/Members/MDK/LandingPage/image/gallery/gal2.png";
import gal3 from "@src/Members/MDK/LandingPage/image/gallery/gal3.png";
import banner2 from "@src/Members/MDK/LandingPage/image/banner/banner2.png";

const { Title } = Typography;

const Gallery = () => {
  return (
    <Layout className="mt-32">
      <Row className="flex items-center sm:flex-col">
        <Col className="flex-50 max-w-50 md:flex-50 md:max-w-50 md:mt-8 sm:flex-100 sm:mt-6 sm:order-last">
          <div className="ml-[15rem] md:ml-[4rem] sm:ml-[1rem]">
            <Title
              level={1}
              className="!text-[45px] md:!text-[35px] sm:!text-[1.5rem]"
            >
              Our Gallery
            </Title>
            <Title
              level={5}
              className="!m-0 !font-light w-[14.6rem] leading-[33px] !text-[24px] md:!text-[20px] md:w-[12rem] sm:!text-[1rem] sm:w-[8rem]"
            >
              orem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </Title>
          </div>
        </Col>
        <Col className="flex-50 max-w-50 md:flex-50 sm:flex-100 sm:order-first">
          <div className="flex items-center justify-between w-full sm:!w-[280px]">
            <div className="w-[33,33%]">
              <Image src={gal1} />
            </div>
            <div className="w-[33,33%] mx-6">
              <Image src={gal2} />
            </div>
            <div className="w-[33,33%]">
              <Image src={gal3} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="!mt-24 !mb-20">
        <Image
          className="!w-[1718px] !h-[418px] md:!w-screen md:!h-[218px] sm:!w-screen sm:!h-[118px]"
          src={banner2}
        />
      </Row>
    </Layout>
  );
};

export default Gallery;
