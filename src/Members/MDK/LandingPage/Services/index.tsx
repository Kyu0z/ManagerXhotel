import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const Services = () => {
  return (
    <div className="my-[3rem] !bg-[#F5F3F4] py-6">
      <Title level={1} className="text-center !mb-12 sm:!text-[1.5rem]">
        Services
      </Title>
      <Row>
        {[1, 2, 3, 4].map((index) => (
          <Col
            key={index}
            className="flex flex-col items-center flex-25 max-w-25 my-6 sm:flex-50 sm:max-w-50"
          >
            <div className="rounded-full bg-[#C4C4C4] w-[64px] h-[63px]"></div>
            <Title level={3} className="mt-6 mb-2 sm:!text-[1rem]">
              Lorem Ipsum
            </Title>
            <Title
              level={5}
              className="!m-0 !font-light text-[14px] w-[10.6rem] leading-[22px] text-center sm:!text-[1rem]"
            >
              orem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </Title>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
