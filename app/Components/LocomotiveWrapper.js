'use client'
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Update LocomotiveScroll when window is resized
      window.addEventListener('resize', () => {
        scroll.update();
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveWrapper;
