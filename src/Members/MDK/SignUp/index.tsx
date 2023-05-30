import { Typography, Layout, Button, Form, Input } from "antd";
import { toast } from "react-toastify";
import { db } from "@src/firebase";
import { collection, addDoc } from "firebase/firestore";
import facebook from "@src/components/icon/facebook.svg";
import google from "@src/components/icon/google.svg";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const layout = {
  labelCol: { span: 24, color: "#7C7E8A" },
  wrapperCol: { span: 24 },
};

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleNotify = async (values: any) => {
    const { username, code } = values;
    const name = username;
    const phoneNumber = code;

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        phoneNumber,
      });
      console.log("New document ID:", docRef.id);
      // Xử lý khi tài liệu mới được thêm vào thành công
      toast.success("Đăng ký thành công"); // Thông báo thành công
      setTimeout(() => {
        navigate("/payment");
      }, 1500);
    } catch (error) {
      console.error("Lỗi khi thêm tài liệu:", error);
      toast.error("Đăng ký thất bại"); // Thông báo thành công
    }
  };

  return (
    <Layout className="p-8 sm:p-0">
      <div className="w-[760px] my-0 mx-auto rounded-2xl border shadow-custom p-16">
        <Title level={1} className="text-center !mb-12">
          Get Your Free Account
        </Title>
        <Form
          {...layout}
          form={form}
          onFinish={handleNotify}
          name="control-hooks"
        >
          <div className="flex items-center gap-4">
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[{ required: true, message: "Hãy nhập họ tên.." }]}
              style={{ width: "50%" }}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>
            <Form.Item
              name="username"
              label="User name"
              style={{ width: "50%" }}
              rules={[{ required: true, message: "Hãy nhập user name.." }]}
            >
              <Input placeholder="Enter your user name" size="large" />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Hãy nhập địa chỉ Email.." }]}
          >
            <Input
              placeholder="Enter your email address"
              size="large"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Hãy nhập mật khẩu.." }]}
          >
            <Input
              placeholder="Enter your password"
              type="password"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="code"
            label="Phone Numbers"
            rules={[{ required: true, message: "Hãy nhập số điện thoại.." }]}
          >
            <Input placeholder="Enter phone numbers" size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "#ED712E",
                borderRadius: "8px",
                width: "100%",
                height: "45px",
                color: "#fff",
                fontSize: "1rem",
                margin: "1.5rem 0 1.2rem",
              }}
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <div className="login">
          <Title level={5} style={{ color: "#6B7280" }} className="text-center">
            Already have an account?{" "}
            <a href="#" className="!text-[#ED712E]">
              Login
            </a>
          </Title>
          <span className="text-[#A19F9D] flex items-center justify-center mt-7 mb-5">
            Or
          </span>
          <button className="rounded-lg border-[2px] solid border-[#A19F9D] py-3 px-2 flex w-full">
            <img src={facebook} />
            <span className="mx-auto">Sign up with Facebook</span>
          </button>
          <button className="rounded-lg border-[2px] solid border-[#A19F9D] py-3 px-2 flex w-full mt-4">
            <img src={google} />
            <span className="mx-auto">Sign up with Google</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
