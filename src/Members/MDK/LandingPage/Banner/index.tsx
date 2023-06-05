import { Image, Layout, Space, Typography } from "antd";
import banner from "@src/Members/MDK/LandingPage/image/banner/banner.jpg";
import phone from "@src/Members/MDK/LandingPage/image/phone.svg";
import arr from "@src/Members/MDK/LandingPage/image/arrow-right.svg";
import { NavLink } from "react-router-dom";

const { Title } = Typography;

const Banner = () => {
  return (
    <Layout className="banner mb-[10rem]">
      <div className="w-[1357px] h-[525px] my-0 mx-auto md:w-full md:h-[14.5rem] sm:w-full sm:h-[1.5rem]">
        <Image className="rounded-3xl relative" src={banner} preview={false} />
        <ul className="nav absolute top-12 right-[12rem] flex items-center gap-5 md:right-[5rem] md:top-[2.5rem] sm:right-[1rem] sm:top-[1.5rem]">
          <NavLink to={"/"}>
            <li className="nav-item md:!text-[1rem] sm:!text-[.5rem]">Home</li>
          </NavLink>
          <NavLink to={"/services"}>
            <li className="nav-item md:!text-[1rem] sm:!text-[.5rem]">
              Services
            </li>
          </NavLink>
          <li className="nav-item md:!text-[1rem] sm:!text-[.5rem]">Room</li>
          <NavLink to={"/dashboard"}>
            <li className="nav-item md:!text-[1rem] sm:!text-[.5rem]">
              Dashboard
            </li>
          </NavLink>
        </ul>
        <div className="banner_bt md:!hidden sm:!hidden">
          <Space
            className="information absolute flex items-center justify-between !gap-[25rem] 
          md:top-[19.5rem] md:left-[4rem] md:!gap-[12rem] sm:top-[9.5rem] sm:left-[1.5rem] sm:!gap-[1rem]"
          >
            <Space className="flex items-center">
              <Space className="ml-10">
                <Image
                  src={phone}
                  preview={false}
                  className="md:!w-[20px] md:relative md:top-[5px] sm:!w-[10px] sm:relative sm:top-[5px]"
                />
                <Title
                  level={1}
                  className="!font-extrabold relative top-[8px] md:!text-[1.2rem] md:whitespace-nowrap sm:!text-[12px] sm:whitespace-nowrap"
                >
                  090-000-000
                </Title>
              </Space>
              <Title
                level={4}
                className="!font-extrabold ml-[1.8rem] md:!text-[.7rem] md:whitespace-nowrap sm:!text-[8px] sm:whitespace-nowrap"
              >
                Save 10% of booking right now!
              </Title>
            </Space>
            <Space>
              <button
                className="flex items-center justify-between gap-16 font-bold text-[16px] text-[#000] bg-[#F1E2D3] rounded-[20px] border-[2px] border-solid border-[#C18346] px-2 py-3 
            md:text-[10px] md:pr-[1.5rem] md:gap-12 sm:!text-[8px] sm:gap-4 sm:pr-[.5rem] sm:px-[2px] sm:py-1"
              >
                <span className="flex-grow md:whitespace-nowrap sm:whitespace-nowrap">
                  Book Now
                </span>
                <img src={arr} className="md:w-[15px] sm:w-[8px]" />
              </button>
            </Space>
          </Space>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
