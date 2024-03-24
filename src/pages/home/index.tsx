import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Progress,
  Radio,
  Rate,
  Row,
  Segmented,
  Statistic,
  Switch,
  Tabs,
  Watermark,
} from "antd";
import {
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { SelectProps, TabsProps } from "antd";
import CountUp from "react-countup";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const formatter = (value: number) => <CountUp end={value} separator="," />;

export default function HomePage() {
  return (
    <section className="animate-router-enter p-6">
      <Row gutter={[16, 16]}>
        <Col span={15}>
          <Flex vertical gap="large">
            <Flex gap="small">
              <Button type="primary">Primary Button</Button>
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              <Button type="primary" shape="circle">
                A
              </Button>
              <Button icon={<SearchOutlined />}>Search</Button>
            </Flex>
            <Flex gap="small">
              <Radio.Group>
                <Radio value={1}>Radio</Radio>
              </Radio.Group>
              <Checkbox checked>Checkbox</Checkbox>
            </Flex>
            <Flex gap="small">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
              </Radio.Group>
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
              </Radio.Group>
            </Flex>
            <Flex gap="small" vertical>
              <Alert message="Error" type="error" showIcon />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Flex>
          </Flex>
        </Col>
        <Col span={9}>
          <Flex gap="large" vertical>
            {/* @ts-expect-error formatter */}
            <Statistic title="Active Users" value={112893} formatter={formatter} />
            <Flex gap="small">
              <Switch defaultChecked />
              <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
              <Switch checkedChildren="1" unCheckedChildren="0" />
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Flex>
            <Rate allowHalf defaultValue={2.5} />
            <Flex gap="large">
              <Badge count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={0} showZero>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Flex>
            <Tabs defaultActiveKey="1" items={items} type="card" />
          </Flex>
        </Col>
        <Col span={12}>
          <Flex gap="large" vertical>
            <Segmented<string>
              options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
            />
            <Flex gap="small">
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={75} status="exception" />
              <Progress type="circle" percent={100} />
              <Progress type="circle" percent={100} format={() => "Done"} />
            </Flex>
            <Flex vertical gap="small">
              <Progress percent={30} size="small" />
              <Progress percent={50} size="small" status="active" />
              <Progress percent={70} size="small" status="exception" />
              <Progress percent={100} size="small" />
            </Flex>
          </Flex>
        </Col>
        <Col span={12}>
          <Watermark content="有点小可爱">
            <div style={{ height: 300 }}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                className="w-full h-full"
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Watermark>
        </Col>
      </Row>
    </section>
  );
}
