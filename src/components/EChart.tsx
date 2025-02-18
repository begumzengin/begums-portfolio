import { useEffect, useRef } from 'react';
import { init, getInstanceByDom } from 'echarts';
import type { EChartsOption } from 'echarts';

interface EChartProps {
  option: EChartsOption;
  style?: { [key: string]: string };
  className?: string;
}

export default function EChart({ option, style, className }: EChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: any;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    // Add chart resize listener
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option);
    }
  }, [option]);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '100%', ...style }}
      className={className}
    />
  );
}