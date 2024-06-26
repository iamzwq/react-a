import { Col, Row } from "antd";
import { type EChartsOption, useEcharts } from "@/hooks";
import { message } from "@/utils";

export default function DashboardPage() {
  const option: EChartsOption = {
    grid: {
      containLabel: true,
      top: 24,
      left: 24,
      right: 24,
      bottom: 24,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };
  const option2: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      containLabel: true,
      top: 24,
      left: 24,
      right: 24,
      bottom: 24,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
  const { chartRef } = useEcharts(option);
  const { chartRef: chartRef2 } = useEcharts(option2, {
    click: params => {
      message.info(`The name is ${params.name}, the value is ${params.value}`);
    },
  });

  return (
    <div className="">
      <Row gutter={[24, 24]} style={{ marginLeft: 0, marginRight: 0 }} className="py-6">
        <Col span={12}>
          <div ref={chartRef} className="w-full h-96" />
        </Col>
        <Col span={12}>
          <div ref={chartRef2} className="w-full h-96" />
        </Col>
      </Row>
    </div>
  );
}
