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

export const useEcharts = (
  options: EChartsOption,
  events?: Record<string, (params: any) => void>
) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    // 初始化Echarts实例
    const chartInstance = echarts.getInstanceByDom(container) || echarts.init(container);
    chartInstanceRef.current = chartInstance;
    chartInstance.setOption(options);

    // 绑定事件
    if (events) {
      for (const [eventName, callback] of Object.entries(events)) {
        chartInstance.on(eventName, callback);
      }
    }

    const onResizeChart = debounce(() => chartInstance!.resize());
    window.addEventListener("resize", onResizeChart);

    return () => {
      window.removeEventListener("resize", onResizeChart);
      chartInstance!.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, options]);

  return { chartRef, chartInstanceRef };
};
