import { Image, Layout, Space, Typography } from "antd";
import success from "@src/components/icon/success.svg";

const { Title } = Typography;

const Invoice = () => {
  return (
    <div className="bg-[#F6F6F6] h-screen w-screen pt-10 pb-14">
      <Layout className="bg-[#fff] max-w-[844px] rounded-3xl mx-auto px-8 pt-4 pb-12">
        <div className="invoice-title border-b border-[#000] solid pb-6">
          <Layout className="flex flex-col items-center">
            <Image width={98} src={success} preview={false} />
            <Title level={5} className="mt-4">
              Payment success
            </Title>
            <Title level={1} className="!font-extrabold">
              100$
            </Title>
          </Layout>
        </div>
        <div className="invoice-info pt-6 border-b border-[#000] border-dashed pb-6">
          <Space className="flex items-center justify-between mb-2">
            <Title level={4} className="!font-normal">
              paymentId
            </Title>
            <Title level={3}>1231293081</Title>
          </Space>
          <Space className="flex items-center justify-between mb-2">
            <Title level={4} className="!font-normal">
              payment Time
            </Title>
            <Title level={3}>12-06-2023, 11:00</Title>
          </Space>
          <Space className="flex items-center justify-between mb-2">
            <Title level={4} className="!font-normal">
              payment Method
            </Title>
            <Title level={3}>Ví điện tử</Title>
          </Space>
          <Space className="flex items-center justify-between">
            <Title level={4} className="!font-normal">
              sender
            </Title>
            <Title level={3}>Nguyen Van A</Title>
          </Space>
        </div>
        <div className="invoice-total pt-4">
          <Space className="flex items-center justify-between">
            <Title level={4} className="!font-normal">
              Amount
            </Title>
            <Title level={3}>100$</Title>
          </Space>
        </div>
      </Layout>
    </div>
  );
};

export default Invoice;
