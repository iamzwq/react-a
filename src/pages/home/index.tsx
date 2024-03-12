import { Col, Row } from "antd";

export default function HomePage() {
  return (
    <div className="px-6 py-4">
      <Row gutter={16} className="gap-4">
        <Col span={6} className="h-[200px] bg-info"></Col>
        <Col span={6} className="h-[200px] bg-info"></Col>
        <Col span={6} className="h-[200px] bg-info"></Col>
      </Row>
    </div>
  );
}
