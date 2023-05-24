import { Typography, Space, Image } from "antd";
import king_pay from "@src/assets/king_pay.jpeg";
import tick from "@src/components/icon/tick.svg";

const { Title } = Typography;

const PayDetail = () => {
  return (
    <>
      <Image width="100%" className="!h-[350px] md:!h-[250px]" src={king_pay} />
      <div className="content w-[700px] pt-7 pl-8 pr-2 md:w-[350px]">
        <Title level={3}>King room</Title>
        <Title level={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          similique dolorum rem reiciendis sit dicta eum, dignissimos, beatae
          illo commodi placeat adipisci
        </Title>
        <div className="border border-[#1a1a1a] border-solid my-4"></div>
        <Space className="flex items-center justify-between">
          <Title level={4}>Dịch vụ</Title>
          <Title level={5}>Wifi, Gym, food</Title>
        </Space>
        <Space className="flex items-center justify-between">
          <Title level={4}>Thời gian</Title>
          <Title level={5}>12/06/2023- 12/08/2023</Title>
        </Space>
        <div className="border border-[#1a1a1a] border-solid my-4"></div>
        <Space>
          <Image preview={false} src={tick}></Image>
          <Title level={5}>Secure Payment</Title>
        </Space>
      </div>
    </>
  );
};

export default PayDetail;
