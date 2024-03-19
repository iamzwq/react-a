import { Button, Form, type FormProps, Input, Layout } from "antd";
import { useRouter } from "@/hooks";
import { message, notification } from "@/utils";

type FieldType = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { replace } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    replace("/");
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
    <Layout className="flex h-screen items-center justify-center">
      <Form
        initialValues={{ username: "admin", password: "123456" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        className="w-[400px] rounded-md bg-[--bg-primary] px-8 pb-8 shadow-lg"
      >
        <h2 className="mb-4 text-center">Sign In</h2>
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item className="mb-0">
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
