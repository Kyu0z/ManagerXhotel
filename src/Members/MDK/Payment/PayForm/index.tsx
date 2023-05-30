import {
  Typography,
  Button,
  Form,
  Input,
  Space,
  DatePicker,
  Modal,
} from "antd";
import type { DatePickerProps } from "antd";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Title } = Typography;

const layout = {
  labelCol: { span: 24, color: "#7C7E8A", fontFamily: "Nunito" },
  wrapperCol: { span: 24 },
};

// Datapicker
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const PayForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Title level={3} className="!font-bold">
        Payment detail
      </Title>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          marginTop: "2rem",
        }}
        className="md:!w-[300px] sm:!w-[390px] sm:!ml-16"
      >
        <Form.Item name="email" label="Email">
          <Input
            size="large"
            style={{
              background: "#FFFFFF",
              border: "2px solid #DEDEE0",
              borderRadius: "8px",
            }}
          />
        </Form.Item>
        <Form.Item name="card-number" label="Card Number">
          <Input
            placeholder="xxxx xxxx xxxx xxxx"
            size="large"
            style={{
              background: "#FFFFFF",
              border: "2px solid #DEDEE0",
              borderRadius: "8px",
            }}
          />
        </Form.Item>
        <Space>
          <Form.Item name="expiry-date" label="Expiry Date">
            <DatePicker
              size="large"
              placeholder="yy / mm"
              onChange={onChange}
              picker="month"
              style={{
                background: "#FFFFFF",
                border: "2px solid #DEDEE0",
                borderRadius: "8px",
              }}
            />
          </Form.Item>
          <Form.Item name="cvv" label="CVV">
            <Input
              placeholder="xxx"
              size="large"
              style={{
                background: "#FFFFFF",
                border: "2px solid #DEDEE0",
                borderRadius: "8px",
              }}
            />
          </Form.Item>
        </Space>
        <Form.Item>
          <Space className="flex items-center justify-between mt-6 ">
            <Title className="!text-[#626872]" level={5}>
              Subtotal
            </Title>
            <Title level={5}>100$</Title>
          </Space>
          <Space className="flex items-center justify-between">
            <Title className="!text-[#626872]" level={5}>
              Discount
            </Title>
            <Title level={5}>0$</Title>
          </Space>
          <div className="border border-[#1a1a1a] border-solid"></div>
          <Space className="flex items-center justify-between mt-2">
            <Title className="!text-[#626872]" level={5}>
              Total Amount
            </Title>
            <Title level={5}>100$</Title>
          </Space>
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              background: "#ED712E",
              borderRadius: "8px",
              width: "100%",
              height: "64px",
              color: "#fff",
              fontSize: "1rem",
            }}
            onClick={showModal}
          >
            Thanh toán
          </Button>
          <Modal
            title="Thanh toán qua Paypal"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AeotlvV0aLem5P2XeShxwMl1_j07WDy1hDr-v0bra1wKVzAOlZXDp0oYNL5FSBLpeX33E2koFEfIWG6V",
              }}
            >
              <PayPalButtons
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "100.00",
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  if (actions.order) {
                    const details = await actions.order.capture();
                    const name = details.payer?.name?.given_name;
                    toast.success("Thanh toán thành công, Cảm ơn " + name); // Thông báo thành công
                    setTimeout(() => {
                      navigate("/invoice");
                    }, 1500);
                  }
                }}
              />
            </PayPalScriptProvider>
          </Modal>
        </Form.Item>
      </Form>
    </>
  );
};

export default PayForm;
