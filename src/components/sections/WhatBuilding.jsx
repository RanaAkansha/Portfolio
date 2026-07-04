import Timeline from '../ui/Timeline';
import { lessons } from '../../data/lessons';

export default function WhatBuilding() {
  return (
    <section id="what-building" className="section-padding">
      <Timeline items={lessons} />
    </section>
  );
}
