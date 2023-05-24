import { Layout, Image, Row, Col, Typography } from "antd";
import logo from "@src/Members/MDK/LandingPage/image/logo.svg";

const { Title } = Typography;

const Footer = () => {
  return (
    <Layout className="max-w-[1200px] my-0 mx-auto mt-10 md:max-w-[820px] ">
      <Image preview={false} src={logo} />
      <Row className="gap-24 mt-16 md:gap-16">
        <Col span={4} className="md:flex-50 md:max-w-50">
          <Col span={24} className="md:flex-33 md:max-w-33">
            <Title level={3} className="sm:whitespace-nowrap">
              About
            </Title>
            <Title
              level={5}
              className="!m-0 !font-light leading-[22px] w-[14rem] !text-[16px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Title>
          </Col>
        </Col>
        <Col span={18} className="md:flex-50 md:max-w-50">
          <Row>
            {[
              {
                title: "Room",
                items: ["Single", "King", "Queen", "Double", "Lanai"],
              },
              {
                title: "Links",
                items: ["About", "Service", "FAQ", "Term & Condition"],
              },
              { title: "Social", items: ["Facebook", "Twister", "Tiktok"] },
              {
                title: "Contact",
                items: [
                  "100 Trần Quang Khải, Q.1, HCM",
                  "094.8757.151",
                  "duykhaidevfe@gmail.com",
                ],
              },
            ].map((section, index) => (
              <Col
                key={index}
                span={6}
                className="md:flex-25 sm:flex-50 sm:max-w-full sm:mb-8"
              >
                <Title level={3}>{section.title}</Title>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Title
                        level={5}
                        className="!m-0 !font-light leading-[22px] !text-[16px]"
                      >
                        {item}
                      </Title>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title
            level={5}
            className="!font-light !text-[16px] text-center md:pt-8"
          >
            Copyright 2023. design by dtd
          </Title>
        </Col>
      </Row>
    </Layout>
  );
};

export default Footer;
