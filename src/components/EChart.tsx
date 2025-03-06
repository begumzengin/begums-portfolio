'use client';

import { useEffect, useRef, useState } from 'react';
import { init } from 'echarts';
import type { EChartsOption } from 'echarts';

export const experienceChartOption = (isMobile: boolean): EChartsOption => ({
  title: {
    show: !isMobile,
    text: 'technology stack',
    textStyle: {
      color: '#fff',
      fontFamily: 'Joyride',
      fontSize: isMobile ? 10 : 16
    },
    top: 'bottom',
    left: 'right',
  },
  tooltip: {
    trigger: 'item',
    textStyle: {
      fontSize: isMobile ? 10 : 14
    }
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
        width: isMobile ? 5 : 10
      }
    },
    data: [
      // Projects (central nodes)
      { 
        id: '1',
        name: 'Tarım Kredi ERP',
        symbolSize: isMobile ? 15 : 50,
        category: 'projects',
        itemStyle: { color: '#e670a1' },
        x: isMobile ? 50 : 100,         
        y: isMobile ? 150 : 300,
        fixed: true
      },
      { 
        id: '6',
        name: 'MAN Truck & Bus',
        symbolSize: isMobile ? 15 : 50,
        category: 'projects',
        itemStyle: { color: '#e670a1' },
        x: isMobile ? 300 : 700,
        y: isMobile ? 150 : 300,
        fixed: true
      },
      // Frontend Technologies
      { id: '2', name: 'react', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '3', name: 'next.js', symbolSize: isMobile ? 18 : 40, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '4', name: 'tailwindcss', symbolSize: isMobile ? 12 : 25, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '5', name: 'typescript', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '11', name: 'primeng', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '12', name: 'angular', symbolSize: isMobile ? 18 : 40, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '13', name: 'ngrx', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '14', name: 'rxjs', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      { id: '15', name: 'exceljs', symbolSize: isMobile ? 15 : 30, category: 'frontend', itemStyle: { color: '#21D3EB' } },
      // Tools
      { id: '9', name: 'git', symbolSize: isMobile ? 12 : 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '10', name: 'docker', symbolSize: isMobile ? 12 : 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '16', name: 'figma', symbolSize: isMobile ? 12 : 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '17', name: 'balsamiq', symbolSize: isMobile ? 12 : 20, category: 'tools', itemStyle: { color: '#B8C0EB' } },
      { id: '18', name: 'jenkins', symbolSize: isMobile ? 12 : 20, category: 'tools', itemStyle: { color: '#B8C0EB' } }
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
      repulsion: isMobile ? 200 : 400,
      edgeLength: isMobile ? 100 : 300,
      gravity: isMobile ? 0.2 : 0.1,
      layoutAnimation: true,
      friction: 0.9,
    },
    z: 10,
    draggable: !isMobile,
    label: {
      show: true,
      position: 'right',
      color: '#fff',
      formatter: '{b}',
      fontSize: isMobile ? 8 : 12
    },
    lineStyle: {
      color: '#fff',
      curveness: 0.3,
      width: isMobile ? 0.3 : 0.5
    }
  }]
});

interface EChartProps {
  option: EChartsOption;
  style?: { [key: string]: string };
  className?: string;
}

export default function EChart({ style, className }: EChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && chartRef.current !== null && !chartInstance.current) {
          chartInstance.current = init(chartRef.current);
          chartInstance.current.setOption(experienceChartOption(isMobile));

          const resizeChart = () => {
            chartInstance.current?.resize();
            chartInstance.current?.setOption(experienceChartOption(isMobile));
          };
          
          window.addEventListener('resize', resizeChart);
          return () => window.removeEventListener('resize', resizeChart);
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
  }, [isMobile]);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '100%',
        transform: isMobile ? 'scale(0.9)' : 'scale(1)', 
        transformOrigin: 'center',                      
        ...style
      }}
      className={className}
    />
  );
}