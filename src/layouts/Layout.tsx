import { Layout as AntdLayout } from "antd";
import Content from "./Content/Content";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <Header />
      <AntdLayout>
        <SideBar />
        <Content />
      </AntdLayout>
    </>
  );
}
