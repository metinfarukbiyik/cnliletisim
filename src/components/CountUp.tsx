import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/** Counts a number up when scrolled into view. Accepts strings like "500+", "%100", "10+". */
const CountUp = ({ value, duration = 1.6 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseInt(match[2], 10);
    const controls = animate(0, target, {
      duration,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
};

export default CountUp;
