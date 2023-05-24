import { Col, Row } from "antd";
import PayForm from "./PayForm";
import PayDetail from "./PayDetail";

const Payment = () => {
  return (
    <div className="pt-10 pb-4 pl-28 sm:!p-4">
      <Row>
        <Col
          span={12}
          style={{ marginTop: "2rem" }}
          className="sm:!flex-100 sm:max-w-full sm:order-last"
        >
          <PayForm />
        </Col>
        <Col span={12} className="sm:!flex-100 sm:max-w-full sm:order-first">
          <PayDetail />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
