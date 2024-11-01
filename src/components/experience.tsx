'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Experience"
          content="Professional experience that I have accumulated over several years."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-8 md:flex-row"
      >
        <VerticalTimeline lineColor="hsl(var(--muted))">
          {experiencesData.map(({ title, description, location, date }) => (
            <VerticalTimelineElement
              key={title}
              visible={inView}
              contentStyle={{
                background: 'hsl(var(--secondary))',
                boxShadow: 'none',
                padding: '20px',
              }}
              contentArrowStyle={{ display: 'none' }}
              date={date}
              dateClassName="!font-medium text-muted-foreground"
              icon={<Icons.briefcase />}
              iconStyle={{
                boxShadow: 'none',
                border: '2px solid hsl(var(--foreground)',
              }}
            >
              <h3 ref={ref} className="mb-2 text-xl font-semibold">
                {title}
              </h3>
              <p className="!mt-0 !font-normal">{location}</p>
              <p className="text-muted-foreground !mt-1 !font-normal">
                {description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};
