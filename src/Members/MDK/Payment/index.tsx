import { Col, Row } from "antd";
import PayForm from "./PayForm";
import PayDetail from "./PayDetail";

const Payment = () => {
  return (
    <div className="pt-10 pb-4 pl-28">
      <Row>
        <Col span={12} style={{ marginTop: "2rem" }}>
          <PayForm />
        </Col>
        <Col span={12}>
          <PayDetail />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
