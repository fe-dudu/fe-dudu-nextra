import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface Node {
  name: string;
  value: number;
  avatar: string;
  children?: Node[];
}

export function Bubble({
  data,
  width,
  height,
  padding,
}: {
  data: Node[];
  width: number;
  height: number;
  padding: number;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data.length) return;

    const root = d3
      .hierarchy({ children: data } as Node)
      .sum((d: Node) => d.value)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    const pack = d3.pack().size([width, height]).padding(padding);

    const nodes = pack(root).descendants().slice(1);

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('display', 'block')
      .style('margin', 'auto')
      .style('overflow', 'visible');

    const nodeGroups = svg
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    nodeGroups
      .append('circle')
      .attr('r', (d) => d.r)
      .style('fill', 'none')
      .style('stroke', '#eee')
      .style('stroke-width', '2px')
      .style('background', '#fff');

    nodeGroups
      .append('image')
      .attr('x', (d) => -d.r * 1)
      .attr('y', (d) => -d.r * 1)
      .attr('width', (d) => d.r * 2)
      .attr('height', (d) => d.r * 2)
      .attr('href', (d: d3.HierarchyCircularNode<Node>) => d.data.avatar)
      .attr('clip-path', (d) => `circle(${d.r * 1}px at ${d.r * 1}px ${d.r * 1}px)`);
  }, [data, height, width, padding]);

  return <svg ref={svgRef} />;
}
