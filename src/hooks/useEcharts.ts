import { useEffect, useRef } from "react";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import { GridComponent, LegendComponent, TooltipComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { debounce } from "@/utils";

echarts.use([
  GridComponent,
  LineChart,
  CanvasRenderer,
  BarChart,
  LegendComponent,
  TooltipComponent,
  PieChart,
]);

export type EChartsOption = echarts.EChartsCoreOption;

export const useEcharts = (options: EChartsOption) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    // 初始化Echarts实例
    const chartInstance = echarts.getInstanceByDom(container) || echarts.init(container);
    chartInstance.setOption(options);

    const onResizeChart = debounce(() => chartInstance!.resize());
    window.addEventListener("resize", onResizeChart);

    return () => {
      window.removeEventListener("resize", onResizeChart);
      chartInstance!.dispose();
    };
  }, [chartRef, options]);

  return chartRef;
};
