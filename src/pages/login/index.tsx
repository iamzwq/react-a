import { useNavigate } from "react-router-dom";
import { Button, Form, type FormProps, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useTitle } from "@/hooks";
import { message, notification } from "@/utils";

type FieldType = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();

  useTitle("登录 - xx管理系统");

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    navigate("/home", { replace: true });
    setTimeout(() => {
      notification.success({
        message: "Login successfully!",
        placement: "topRight",
        duration: 2,
      });
    }, 500);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
    message.error("Failed to login, please check your input!");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Form
        initialValues={{ username: "admin", password: "123456" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        className="w-[400px] rounded-md bg-[--layout-body-bg] px-8 py-8 shadow"
      >
        <h2 className="mb-4 flex items-center justify-center">
          <img src="/favicon.svg" alt="logo" className="mr-2 w-9" />
          系统登录
        </h2>
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input addonBefore={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password addonBefore={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
