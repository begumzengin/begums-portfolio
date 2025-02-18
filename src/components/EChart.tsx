import { useEffect, useRef } from 'react';
import { init, getInstanceByDom } from 'echarts';
import type { EChartsOption } from 'echarts';

export const experienceChartOption: EChartsOption = {
  title: {
    text: 'technology stack',
    textStyle: {
      color: '#fff',
      fontFamily: 'Joyride',
    },
    top: 'bottom',
    left: 'right',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontFamily: 'Joyride',
    },
    z: 100,
    data: [{ name: 'frontend', itemStyle: { color: '#21D3EB' } }, { name: 'tools', itemStyle: { color: '#B8C0EB' } }]
  },
  series: [{
    type: 'graph',
    layout: 'force',
    animation: true,
    animationDuration: 1500,
    animationEasing: 'cubicInOut',
    emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      },
    data: [
      // Projects (central nodes)
      { 
        id: '1',
        name: 'Tarım Kredi ERP',
        symbolSize: 50,
        category: 'projects',
        itemStyle: { color: '#e670a1' }
      },
      { 
        id: '6',
        name: 'MAN Truck & Bus',
        symbolSize: 50,
        category: 'projects',
        itemStyle: { color: '#e670a1' }
      },
      // Frontend Technologies
      { id: '2', name: 'react', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '3', name: 'next.js', symbolSize: 40, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '4', name: 'tailwindcss', symbolSize: 25, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '5', name: 'typescript', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '11', name: 'primeng', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '12', name: 'angular', symbolSize: 40, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '13', name: 'ngrx', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '14', name: 'rxjs', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '15', name: 'exceljs', symbolSize: 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      // Tools
      { id: '9', name: 'git', symbolSize: 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '10', name: 'docker', symbolSize: 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '16', name: 'figma', symbolSize: 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '17', name: 'balsamiq', symbolSize: 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '18', name: 'jenkins', symbolSize: 20, category: 'tools', itemStyle: { color: '#B8C0EB' } }
    ],
    links: [
      // Tarım Kredi ERP connections
      { source: '1', target: '4' },
      { source: '1', target: '5' },
      { source: '1', target: '11' },
      { source: '1', target: '12' },
      { source: '1', target: '14' },
      { source: '1', target: '15' },
      { source: '1', target: '9' },
      { source: '1', target: '18' },
      // MAN Truck & Bus connections
      { source: '6', target: '4' },
      { source: '6', target: '5' },
      { source: '6', target: '11' },
      { source: '6', target: '12' },
      { source: '6', target: '13' },
      { source: '6', target: '14' },
      { source: '6', target: '9' },
      { source: '6', target: '18' }
    ],
    categories: [
      { name: 'projects' },
      { name: 'frontend' },
      { name: 'tools' }
    ],
    force: {
      repulsion: 380,
      edgeLength: 280,
      gravity: 0.1,
      layoutAnimation: true,
      friction: 0.9,
    },
    z: 10,
    draggable: true,
    label: {
      show: true,
      position: 'right',
      color: '#fff',
      formatter: '{b}'
    },
    lineStyle: {
      color: '#fff',
      curveness: 0.3,
      width: 0.5
    }
  }]
};

interface EChartProps {
  option: EChartsOption;
  style?: { [key: string]: string };
  className?: string;
}

export default function EChart({ option, style, className }: EChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && chartRef.current !== null && !chartInstance.current) {
          chartInstance.current = init(chartRef.current);
          chartInstance.current.setOption(option);

          function resizeChart() {
            chartInstance.current?.resize();
          }
          window.addEventListener('resize', resizeChart);

          return () => {
            window.removeEventListener('resize', resizeChart);
          };
        }
      },
      {
        threshold: 0.1
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
      chartInstance.current?.dispose();
    };
  }, [option]);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '100%', ...style }}
      className={className}
    />
  );
}