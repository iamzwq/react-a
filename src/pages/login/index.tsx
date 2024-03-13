import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login Page</h1>
      <Button type="primary" onClick={() => navigate("/")}>
        登录
      </Button>
    </>
  );
}
