import { Col, Image, Layout, Row, Typography } from "antd";
import room1 from "@src/Members/MDK/LandingPage/image/room/room1.png";
import room2 from "@src/Members/MDK/LandingPage/image/room/room2.png";
import room3 from "@src/Members/MDK/LandingPage/image/room/room3.png";
import room4 from "@src/Members/MDK/LandingPage/image/room/room4.png";

const { Title } = Typography;

const RoomType = () => {
  return (
    <Layout className="room-type max-w-[1200px] my-0 mx-auto md:max-w-[820px]">
      <Title level={2} className="sm:!text-[1.5rem]">
        Room Type
      </Title>
      <Row className="flex items-center justify-between mb-4">
        {[
          {
            room: "Single Room",
            className: "scroll-color md:!right-[17.32%] sm:!right-[1.32%]",
          },
          {
            room: "Double Room",
            className: "scroll md:!right-[9.32%] sm:!right-[2.32%]",
          },
          {
            room: "King Room",
            className: "scroll md:!right-[22.32%] sm:!right-[2.32%]",
          },
          {
            room: "Queen Room",
            className: "scroll md:!right-[9.32%] sm:!right-[1.32%]",
          },
          {
            room: "Lanai Room",
            className: "scroll md:!right-[9.32%] sm:!right-[1.32%]",
          },
        ].map((item, index) => (
          <Col
            key={index}
            className="flex-20 max-w-20 mb-8 sm:max-w-fit sm:mb-2"
          >
            <Title
              level={4}
              className="relative top-[10px] sm:!text-[1rem] sm:whitespace-nowrap"
            >
              {item.room}
            </Title>
            <div className={item.className}></div>
          </Col>
        ))}
      </Row>
      <Row className="md:!gap-[1rem]">
        {[room1, room2, room3, room4, room1, room2, room3, room4].map(
          (room, index) => (
            <Col
              key={index}
              className="flex-25 max-w-25 md:flex-33 md:max-w-33 sm:flex-50 sm:max-w-50"
              style={{ marginBottom: "2rem" }}
            >
              <Image
                className="w-[280px] h-[155px] rounded-[30px] sm:!w-[180px] sm:!h-[80px]"
                src={room}
              />
              <div>
                <Title level={4} className="sm:!text-[1rem]">
                  Luxury Room
                </Title>
                <Title
                  level={5}
                  className="!m-0 !font-light text-[14px] relative top-[-5px] sm:!text-[1rem]"
                >
                  Lorem Ipsum is simply dummy text of the printing.
                </Title>
              </div>
            </Col>
          )
        )}
      </Row>
    </Layout>
  );
};

export default RoomType;
