import { Layout, Space, Typography, Col, Row } from "antd";
import HeaderPage from "../HeaderPage";
import Sidebar from "../Sidebar";
import TableUser from "./TableUser";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:p-6 sm:p-2">
      <Layout className="md:w-full">
        <HeaderPage />
      </Layout>
      <Row style={{ margin: "2rem 0" }}>
        <Col
          span={18}
          push={6}
          className="md:flex-100 md:w-full md:inset-0 sm:inset-0"
        >
          <Space style={{ alignItems: "baseline", marginBottom: 12 }}>
            <Title
              level={3}
              className="revenue bg-orange-500 relative w-[400px] h-[300px] rounded-lg"
            >
              <p className="p-4 text-[#fff] font-bold">Doanh thu ngày</p>
            </Title>
            <Title level={3} className="overview ml-[2rem] sm:hidden">
              Tổng quan
            </Title>
          </Space>
          <TableUser />
        </Col>
        <Col span={6} pull={18} className="md:!hidden sm:!hidden">
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
