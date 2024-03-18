import { Button, Layout } from "antd";
import { useRouter } from "@/hooks";

export default function LoginPage() {
  const { replace } = useRouter();

  return (
    <Layout className="flex h-screen items-center justify-center">
      <form
        onSubmit={() => replace("/home")}
        className="w-[480px] rounded bg-white p-4 shadow-md dark:bg-white/20"
      >
        <h1 className="mb-4 text-center text-2xl font-bold">登 录</h1>
        <input type="text" placeholder="用户名" />
        <input type="password" placeholder="密码" />
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </form>
    </Layout>
  );
}
